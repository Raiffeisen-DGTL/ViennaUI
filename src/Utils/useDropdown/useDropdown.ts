import React, { ReactNode, useCallback, useMemo, useState } from 'react';

type CallbackFunc = (options: any[]) => any[] | Promise<any[]>;

export type DropdownScrollEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

export interface PropsType {
    /** Компонент неактивен если true */
    disabled?: boolean;
    align?: 'top' | 'bottom' | 'auto';
    /** Список элементов в выпадающем списке: массив, callback функция или promise */
    options?: any[] | CallbackFunc;
    /** Обработчик события при прокрутке списка  */
    onScroll?: DropdownScrollEvent;
    /** Режим чтения, выпадающий список не откроется */
    readonly?: boolean;
}

type ActionType = 'increment' | 'decrement';

export function useDropdown(props: PropsType) {
    const { disabled, options, readonly, onScroll } = props;

    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

    const [showList, setShowList] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [localOptions, setLocalOptions] = useState<ReactNode[]>([]);

    const align: 'top' | 'bottom' | 'vertical' | undefined = useMemo(
        () => (props.align !== 'auto' ? props.align : 'vertical'),
        [props.align]
    );

    const reactNodeHasNowrap = (elem: ReactNode): boolean => {
        return React.isValidElement(elem) ? Boolean(elem.props?.__nowrap__) : false;
    };

    const getNextIndex = (current: number, last: number, type: ActionType): number => {
        if (type === 'increment') {
            return current < last ? current + 1 : 0;
        }
        return current > 0 ? current - 1 : last;
    };

    const showDropdown = () => {
        if (disabled || readonly) return;
        setShowList(true);
    };

    const hideDropdown = () => {
        setShowList(false);
    };

    const changeCurrentIndex = (type: ActionType) => {
        const lastIndex = localOptions.length - 1;
        let index = currentIndex;
        const nextIndex = getNextIndex(currentIndex, lastIndex, type);

        index = reactNodeHasNowrap(localOptions[nextIndex]) ? getNextIndex(nextIndex, lastIndex, type) : nextIndex;
        setCurrentIndex(index);
    };

    const handleOptionMouseOver = useCallback(
        (e, option) => {
            setCurrentIndex(localOptions.findIndex((v) => v === option)); // Запоминаем позицию при наведении
        },
        [localOptions]
    );

    const handleScroll = useCallback(
        (event) => {
            const target: HTMLDivElement = event.target;
            if (target.offsetHeight + target.scrollTop > target.scrollHeight - 10 && typeof options === 'function') {
                const result = options(localOptions);
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
