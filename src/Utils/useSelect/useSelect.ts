import React, { Ref, useEffect, useRef } from 'react';
import { useDropdown } from '../useDropdown';
import { OnChangeHandler, ValueToStringType, type SelectValueType } from '../types';

export type SelectEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data: { name?: string; value?: string; index?: number }
) => void;

type UseDropdownPropsType<T> = Pick<
    ReturnType<typeof useDropdown<T>>,
    'showDropdown' | 'popperElement' | 'hideDropdown' | 'showList' | 'currentIndex' | 'changeCurrentIndex'
> & { localOptions: (React.ReactNode | T)[] };

export interface SelectServiceType {
    focus: () => void;
    blur: () => void;
}

export type PropsType<T = SelectValueType> = UseDropdownPropsType<T> & {
    /** Имя компонента */
    name?: string;
    /** Разворачивать список при получениее фокуса */
    openWhenFocus?: boolean;
    /** Если установлено, то onSelect будет вызываться с первым элементом из списка по нажатию на Enter,
     *  если ничего не выбрано (по умолчанию false)
     * */
    selectFirstOnEnter?: boolean;
    /** Обработчик события при выборе элемента списка  */
    onSelect?: OnChangeHandler<T | undefined, React.MouseEvent | React.KeyboardEvent>;
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: React.FocusEventHandler;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: React.FocusEventHandler;
    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SelectEvent<React.KeyboardEvent>;

    value?: T;
    valueToString: ValueToStringType<T>;

    forwardedRef: Ref<HTMLDivElement>;
    inputRef: React.RefObject<HTMLInputElement>;
    inputDirtyRef: React.MutableRefObject<boolean>;

    /** Ref, принимающий функции для программного focus/blur  */
    controlsRef?: React.MutableRefObject<SelectServiceType | null>;
};

export function useSelect<T>(props: PropsType<T>) {
    const {
        name,
        selectFirstOnEnter,
        onSelect,
        onBlur,
        onFocus,
        onKeyDown,
        value,
        valueToString,

        localOptions,
        showDropdown,
        popperElement,
        hideDropdown,
        showList,
        currentIndex,
        changeCurrentIndex,

        forwardedRef,
        inputRef,
        controlsRef,
        inputDirtyRef,
    } = props;

    const refSelect = useRef<HTMLDivElement>(null);

    const lastSelectedValue = useRef('');

    const handleSelect = (selectedValue: T | undefined, event: React.MouseEvent | React.KeyboardEvent) => {
        hideDropdown();

        const mappedValue = selectedValue ? valueToString(selectedValue) : '';

        lastSelectedValue.current = mappedValue;

        inputRef.current && (inputRef.current.value = mappedValue);

        onSelect?.({ value: selectedValue, event, options: { name } });

        (inputRef.current ?? refSelect.current)?.blur();
    };

    const handleFocus = (event: React.FocusEvent) => {
        showDropdown();

        inputRef.current && (inputRef.current.value = '');

        onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent) => {
        const popper = (popperElement as React.RefObject<HTMLDivElement> | null)?.current;
        const isDropdownChild = popper?.contains(event.relatedTarget);

        if (isDropdownChild) {
            refSelect.current?.focus();
            return;
        }

        hideDropdown();

        if (inputRef.current) {
            // TODO: в 12 мажоре рассмотреть вариант с вызовом внешних хендлеров без передачи event
            inputDirtyRef.current && dispatchOnChange(inputRef.current);
            inputRef.current.value = lastSelectedValue.current;
            inputDirtyRef.current = false;
        }

        onBlur?.(event);
    };

    const handleClickInner = (event: React.MouseEvent) => {
        const isFocused = document.activeElement === refSelect.current;

        if (!isFocused) return;

        event.preventDefault();
        refSelect.current?.blur();
    };

    const handleClick = (() => {
        if (!inputRef.current) return handleClickInner;

        const preventedBoxClick = (event: React.MouseEvent) => {
            const target = event.target as HTMLElement;

            const isIcon = target.nodeName === 'svg' || target.nodeName === 'path';
            const isPart = (el: HTMLElement | null) => el?.dataset.testid === 'part';
            const isPostfix = isPart(target) || (isIcon && isPart(target.closest('div')));
            const isInput = target.id === 'editable-input';

            if (isPostfix || isInput) return;

            event.preventDefault();
        };

        return document.activeElement === inputRef.current ? preventedBoxClick : undefined;
    })();

    const handleKeyDown = (event: React.KeyboardEvent) => {
        let properKeyFired = true;

        switch (event.key) {
            case 'Escape': {
                refSelect.current?.blur();
                break;
            }
            case 'ArrowDown': {
                event.preventDefault();

                if (showList) changeCurrentIndex('increment');

                break;
            }
            case 'ArrowUp': {
                event.preventDefault();

                if (showList) changeCurrentIndex('decrement');

                break;
            }
            case 'Enter': {
                event.preventDefault();

                const selectedIndex = selectFirstOnEnter && currentIndex < 0 ? 0 : currentIndex;

                if (showList && selectedIndex >= 0) {
                    const option = localOptions[selectedIndex];

                    if (option === undefined) break;

                    const optionVal = React.isValidElement<{ children: string; value?: string }>(option)
                        ? (option.props.value ?? option.props.children)
                        : option;

                    handleSelect && handleSelect(optionVal as T, event);
                } else {
                    showDropdown();
                }
                break;
            }
            case 'Tab': {
                if (!inputRef.current || event.shiftKey) break;

                (inputRef.current ?? refSelect.current)?.blur();
                break;
            }
            default:
                properKeyFired = false;
                break;
        }

        properKeyFired && onKeyDown?.(event, { name, index: currentIndex });
    };

    useEffect(() => {
        if (!controlsRef) return;

        controlsRef.current = {
            focus: () => (inputRef.current ?? refSelect.current)?.focus(),
            blur: () => (inputRef.current ?? refSelect.current)?.blur(),
        };
    }, [controlsRef]);

    useEffect(() => {
        if (typeof forwardedRef === 'function') {
            forwardedRef(refSelect.current);
        } else if (forwardedRef && 'current' in forwardedRef) {
            (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = refSelect.current;
        }
    }, [forwardedRef]);

    // Обновляем значение uncontrolled input при изменении value снаружи
    useEffect(() => {
        if (!inputRef.current || inputDirtyRef.current) return;

        const newValue = value ? valueToString(value) : '';

        if (lastSelectedValue.current.toString() === newValue.toString()) return;

        inputRef.current.value = newValue;
        lastSelectedValue.current = newValue;
    }, [value, valueToString]);

    return {
        refSelect,
        handleSelect,
        handleClick,
        handleFocus,
        handleBlur,
        handleKeyDown,
    };
}

function dispatchOnChange(input: HTMLInputElement) {
    const nativeInputValueSetter = Object?.getOwnPropertyDescriptor?.(window.HTMLInputElement.prototype, 'value')?.set;

    if (!nativeInputValueSetter) {
        input.value = '';
        return;
    }

    nativeInputValueSetter.call(input, '');
    input.dispatchEvent(new Event('change', { bubbles: true }));
}
