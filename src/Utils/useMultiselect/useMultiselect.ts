import React, { isValidElement, ReactElement, Ref, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { PropsType as UseDropdownPropsType, useDropdown } from '../useDropdown';
import { type SelectValueType } from '../types';

export type SelectEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data: { name?: string; value?: string; index?: number }
) => void;

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
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: React.FocusEventHandler;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: React.FocusEventHandler;
    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SelectEvent<React.KeyboardEvent>;
    /** Ref, принимающий функции для программного focus/blur  */
    controlsRef?: React.MutableRefObject<SelectServiceType | null>;
    disableSearch?: boolean;
};

export function useMultiselect<T>(
    props: PropsType<T>,
    {
        forwardedRef,
        handleSelect,
        handleMultiselect,
        ignoreFocus,
    }: {
        forwardedRef: Ref<HTMLDivElement>;
        handleSelect?: (value: T, event: React.MouseEvent | React.KeyboardEvent) => void;
        handleMultiselect?: (value: T, event: React.MouseEvent | React.KeyboardEvent) => void;
        ignoreFocus?: RefObject<boolean>;
    }
) {
    const {
        disabled,
        name,
        openWhenFocus = true,
        selectFirstOnEnter,
        onBlur,
        onFocus,
        onKeyDown,
        controlsRef,
        disableSearch,
    } = props;

    const [active, setActive] = useState(false);

    const refSelect = useRef<HTMLDivElement>(null);
    const isClickedOutside = useRef<boolean>(false);
    const isRealClickedOutside = useRef<boolean>(false);

    const {
        popperElement,
        setPopperElement,
        showList,
        currentIndex,
        setCurrentIndex,
        changeCurrentIndex,
        localOptions,
        setLocalOptions,
        align,
        showDropdown,
        hideDropdown,
        handleOptionMouseOver,
        handleScroll,
    } = useDropdown(props);

    const hide = () => {
        hideDropdown();
        refSelect.current?.blur();
    };

    const setFocusOnField = (event: React.FocusEvent | React.MouseEvent) => {
        if (disabled || ignoreFocus?.current) return;
        const isNotActive = !active;
        setActive(true);
        if (openWhenFocus) {
            showDropdown();
        }
        if (isNotActive && event.type === 'focus' && typeof onFocus === 'function') {
            onFocus(event as React.FocusEvent);
        }
    };

    const setBlurOnFiled = (
        event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | MouseEvent,
        isHideDropdown = true
    ) => {
        if (isHideDropdown) hide();
        // call onBlur only if click was made outside of component
        if (active && isHideDropdown) {
            setActive(false);
        }
    };

    const showDropdownWithSetFocus = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (document.activeElement !== refSelect.current) {
            refSelect.current?.focus();
        }
        setFocusOnField(event);
    };

    const handleClick = useCallback(
        (event: React.MouseEvent) => {
            if (showList) {
                hide();
            } else {
                showDropdownWithSetFocus(event);
            }
        },
        [disabled, showList]
    );

    const handleBlur = (e: React.FocusEvent) => {
        if (isClickedOutside.current) {
            typeof onBlur === 'function' && onBlur(e);
            isClickedOutside.current = false;
            setBlurOnFiled(e);
        }
    };

    const handleFocus = (event: React.FocusEvent) => {
        if (ignoreFocus?.current) {
            return;
        }

        if (!active) {
            setFocusOnField(event);
        }
    };

    const callProgramBlur = () => {
        if (refSelect.current) {
            isClickedOutside.current = true;

            if (!isRealClickedOutside.current || disableSearch) {
                refSelect.current?.focus();
            } else {
                isRealClickedOutside.current = false;
            }
            refSelect.current?.blur();
        }
    };

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            switch (event.key) {
                case 'Escape': {
                    hide();
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

                    const selectedIndex = selectFirstOnEnter && currentIndex < 0 ? 0 : currentIndex;

                    if (showList && selectedIndex >= 0) {
                        const option = localOptions[selectedIndex];
                        const value = (
                            isValidElement(option)
                                ? ((option as ReactElement<{ value?: T }>).props.value ??
                                  (option as ReactElement<{ children: string }>).props.children)
                                : (option?.toString() ?? '')
                        ) as T;

                        handleSelect && handleSelect(value, event);
                        handleMultiselect && handleMultiselect(value, event);
                    } else {
                        showDropdown();
                    }
                    break;
                }
                case 'Tab': {
                    callProgramBlur();
                    break;
                }
            }

            if (typeof onKeyDown === 'function') {
                onKeyDown(event, { name, index: currentIndex });
            }
        },
        [onKeyDown, currentIndex, handleSelect, localOptions, showList, name, selectFirstOnEnter, callProgramBlur]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const $popper = (popperElement as React.RefObject<HTMLDivElement> | null)?.current;
            const $target = event.target as HTMLDivElement;
            const $svg = $target.closest('svg');

            const isChevronOrNotSVG = !$svg || $svg.closest('div')?.dataset.test === 'arrow';

            if (
                active &&
                (refSelect.current || $popper) &&
                !refSelect.current?.contains($target) &&
                !$popper?.contains($target) &&
                isChevronOrNotSVG
            ) {
                isRealClickedOutside.current = true;

                callProgramBlur();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popperElement, refSelect, active, callProgramBlur]);

    useEffect(() => {
        if (typeof forwardedRef === 'function') {
            forwardedRef(refSelect.current);
        } else if (forwardedRef && 'current' in forwardedRef) {
            (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = refSelect.current;
        }
    }, [forwardedRef]);

    useEffect(() => {
        if (!controlsRef) return;

        controlsRef.current = {
            focus: () => refSelect.current?.focus(),
            blur: callProgramBlur,
        };
    }, [controlsRef]);

    return {
        active,
        setActive,
        popperElement,
        setPopperElement,
        showList,
        showDropdown,
        hideDropdown,
        currentIndex,
        setCurrentIndex,
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
        callProgramBlur,
    };
}
