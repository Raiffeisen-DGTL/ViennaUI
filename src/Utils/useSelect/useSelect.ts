import React, { Ref, useCallback, useEffect, useRef, useState } from 'react';
import { PropsType as UseDropdownPropsType, useDropdown } from '../useDropdown';
import { defer } from '../defer';

export type SelectEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; index?: number }
) => void;

export type PropsType = UseDropdownPropsType & {
    /** Имя компонента */
    name?: string;
    /** Разворачивать список при получениее фокуса */
    openWhenFocus?: boolean;
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: SelectEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: SelectEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SelectEvent<React.KeyboardEventHandler<HTMLInputElement>>;
};

export function useSelect(
    props: PropsType,
    {
        forwardedRef,
        handleSelect,
    }: {
        forwardedRef: Ref<HTMLDivElement>;
        handleSelect: (event: any, value: any) => void;
    }
) {
    const { disabled, name, openWhenFocus = true, onBlur, onFocus, onKeyDown } = props;

    const [active, setActive] = useState(false);

    const refSelect = useRef<HTMLDivElement>(null);

    const {
        popperElement,
        setPopperElement,
        showList,
        currentIndex,
        changeCurrentIndex,
        localOptions,
        setLocalOptions,
        align,
        showDropdown,
        hideDropdown,
        handleOptionMouseOver,
        handleScroll,
    } = useDropdown(props);

    const setFocusOnField = (event: any) => {
        if (disabled) return;
        const isNotActive = !active;
        setActive(true);
        if (openWhenFocus) {
            showDropdown();
        }
        if (isNotActive && typeof onFocus === 'function') {
            onFocus(event);
        }
    };

    const setBlurOnFiled = (event: any) => {
        const isActive = active;
        setActive(false);
        hideDropdown();
        if (isActive && typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    const showDropdownWithSetFocus = (event: any) => {
        if (document.activeElement === refSelect.current) {
            setFocusOnField(event);
        } else {
            refSelect.current?.focus();
        }
    };

    const handleClick = useCallback(
        (event) => {
            if (showList) {
                hideDropdown();
            } else {
                showDropdownWithSetFocus(event);
            }
        },
        [disabled, showList]
    );

    const handleBlur = (event: React.FocusEvent) => {
        setBlurOnFiled(event);
    };

    const handleFocus = (event: React.FocusEvent) => {
        if (!active) {
            // Задержка нужна для программного проставления фокуса, потому что handleClickOutside отрабатывает позже фокуса
            defer(setFocusOnField, [event]);
        }
    };

    const handleKeyDown = useCallback(
        (event) => {
            switch (event.key) {
                case 'Escape': {
                    hideDropdown();
                    break;
                }
                case 'ArrowDown': {
                    event.preventDefault();

                    if (showList) {
                        changeCurrentIndex('increment');
                    }
                    break;
                }
                case 'ArrowUp': {
                    event.preventDefault();
                    if (showList) {
                        changeCurrentIndex('decrement');
                    } else {
                        showDropdown();
                    }
                    break;
                }
                case 'Enter': {
                    event.preventDefault();
                    if (showList && currentIndex >= 0) {
                        const option = localOptions[currentIndex] as any;
                        handleSelect(event, option?.props.value || option?.props.children);
                    } else {
                        showDropdown();
                    }
                    break;
                }
                case 'Tab': {
                    setBlurOnFiled(event);
                    break;
                }
            }

            if (typeof onKeyDown === 'function') {
                onKeyDown(event, { name, index: currentIndex });
            }
        },
        [onKeyDown, currentIndex, handleSelect, localOptions, showList, name]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const $popper = (popperElement as React.RefObject<HTMLDivElement> | null)?.current;
            const $target = event.target as HTMLDivElement;

            // Делаем иммитацию blur если клик произошел вне Box и DropList
            if (
                (refSelect.current || $popper) &&
                !refSelect.current?.contains($target) &&
                !$popper?.contains($target)
            ) {
                setBlurOnFiled(event);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [popperElement]);

    useEffect(() => {
        if (typeof forwardedRef === 'function') {
            forwardedRef(refSelect.current);
        } else if (forwardedRef && 'current' in forwardedRef) {
            (forwardedRef as any).current = refSelect.current;
        }
    }, [forwardedRef]);

    return {
        active,
        popperElement,
        setPopperElement,
        showList,
        showDropdown,
        hideDropdown,
        currentIndex,
        localOptions,
        setLocalOptions,
        align,
        refSelect,
        setBlurOnFiled,
        handleClick,
        handleFocus,
        handleBlur,
        handleKeyDown,
        handleOptionMouseOver,
        handleScroll,
    };
}
