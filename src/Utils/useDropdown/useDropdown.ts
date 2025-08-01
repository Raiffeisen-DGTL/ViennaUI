import React, { isValidElement, ReactElement, ReactNode, useCallback, useMemo, useState } from 'react';
import { SelectValueType, useUpdateEffect } from '../../Utils';

type CallbackFunc<T> = (options: T[]) => T[] | Promise<T[]>;

export type DropdownScrollEvent<T = React.UIEvent<HTMLDivElement>> = (
    event: T,
    data: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

export interface PropsType<T = SelectValueType> {
    /** Компонент неактивен если true */
    disabled?: boolean;
    align?: 'top' | 'bottom' | 'auto';
    /** Список элементов в выпадающем списке: массив, callback функция или promise */
    options?: T[] | CallbackFunc<T>;
    /** Обработчик события при прокрутке списка  */
    onScroll?: DropdownScrollEvent;
    /** Обработчик события при открытии/закрытии выпадающего списка */
    onToggle?: (isShown: boolean) => void;
    /** Режим чтения, выпадающий список не откроется */
    readonly?: boolean;
    /** Режим чтения, выпадающий список не откроется */
    readOnly?: boolean;
}

type ActionType = 'increment' | 'decrement';

export function useDropdown<T>(props: PropsType<T>) {
    const { disabled, options, readonly, readOnly, onScroll, onToggle } = props;

    const [popperElement, setPopperElement] = useState<React.MutableRefObject<HTMLDivElement>>();

    const [showList, setShowList] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [localOptions, setLocalOptions] = useState<(ReactNode | T)[]>([]);

    const align: 'top' | 'bottom' | 'vertical' | undefined = useMemo(
        () => (props.align !== 'auto' ? props.align : 'vertical'),
        [props.align]
    );

    const reactNodeHasNowrap = (elem: ReactNode): boolean => {
        return React.isValidElement(elem)
            ? Boolean((elem as ReactElement<{ __nowrap__?: boolean }>).props.__nowrap__)
            : false;
    };

    const getNextIndex = (current: number, last: number, type: ActionType): number => {
        if (type === 'increment') {
            return current < last ? current + 1 : 0;
        }

        return current > 0 ? current - 1 : last;
    };

    const showDropdown = () => {
        if (disabled || readonly || readOnly) return;
        setShowList(true);
    };

    const hideDropdown = () => {
        setShowList(false);
    };

    useUpdateEffect(() => {
        onToggle?.(showList);
    }, [showList]);

    const changeCurrentIndex = (type: ActionType) => {
        const lastIndex = localOptions.length - 1;
        let index = currentIndex;
        const nextIndex = getNextIndex(currentIndex, lastIndex, type);
        const option = localOptions[nextIndex];

        index =
            isValidElement(option) && reactNodeHasNowrap(option) ? getNextIndex(nextIndex, lastIndex, type) : nextIndex;
        setCurrentIndex(index);
    };

    const handleOptionMouseOver = useCallback(
        (option: ReactNode) => {
            setCurrentIndex(localOptions.findIndex((v) => v === option)); // Запоминаем позицию при наведении
        },
        [localOptions]
    );

    const handleScroll = useCallback(
        (event: React.UIEvent<HTMLDivElement>) => {
            const target = event.currentTarget;
            if (target.offsetHeight + target.scrollTop > target.scrollHeight - 10 && typeof options === 'function') {
                const result = options(localOptions as T[]);
                if (result instanceof Promise) {
                    result.then(setLocalOptions).catch(() => null);
                } else {
                    setLocalOptions(result);
                }
            }
            if (onScroll) {
                onScroll(event, {
                    target,
                    height: target.offsetHeight,
                    scrollTop: target.scrollTop,
                    scrollHeight: target.scrollHeight,
                });
            }
        },
        [onScroll, localOptions, options, currentIndex]
    );

    return {
        popperElement,
        setPopperElement,
        showList,
        setShowList,
        currentIndex,
        setCurrentIndex,
        localOptions,
        setLocalOptions,
        align,
        showDropdown,
        hideDropdown,
        changeCurrentIndex,
        handleOptionMouseOver,
        handleScroll,
    };
}
