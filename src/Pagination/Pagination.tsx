import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { GoLeftIcon, GoRightIcon } from 'vienna.icons';
import { getLastIndex, getPagersNumbers } from './utils';
import { Pager } from './Pager';
import { Box, PropsBox } from './Pagination.styles';
import { BoxStyled } from '../Utils/styled';
import { useKeyboardPagination } from './hooks/useKeyboardPagination';
import { ARROW_NEXT, ARROW_PREV, ELLIPSIS_NEXT, ELLIPSIS_PREV } from './constants';

export const defaultPaginationTestId: PaginationProps['testId'] = {
    container: 'pagination_container',
    arrowPrev: 'pagination_arrow-prev',
    arrowNext: 'pagination_arrow-next',
    separator: 'pagination_separator',
    page: (page: number) => `pagination_page-${page}`,
};

export interface PaginationProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'onChange'> {
    /**
     * Размер компонента
     */
    size?: PropsBox['$size'];
    /**
     * Выравнивание по горизонтали
     */
    align?: PropsBox['$align'];
    /**
     * Количество элементов на одной странице
     */
    pageSize: number;
    /**
     * Индекс текущей страницы (начинается с 0)
     */
    initialPageIndex?: number;
    /**
     * Общее количество элементов
     */
    totalItemsCount: number;
    /**
     * Количество кнопок-пэйджеров, которые нужно рендерить по соседству от текущего пэйджера,
     * когда показываются кнопки с эллипсисами (jumpers)
     */
    currentPageNeighboursCount?: number;
    /**
     * Текущий номер страницы
     */
    currentPage?: number;
    /**
     * Показывает, будут ли еще страницы. Если true, стрелка вправо активна
     */
    hasNextPage?: boolean;
    testId?: {
        container?: string;
        arrowPrev?: string;
        arrowNext?: string;
        separator?: string;
        page?: (page: number) => string;
    };
    /**
     * Коллбэк. Вызывается при изменении страницы
     * В этом методе нужно описывать логику показа элементов в зависимости
     * от страницы и размера страницы
     * @param pageIndex - индекс новой страницы
     * @param pageSize - количество элементов на странице
     */
    onChange: (data: { pageIndex: number; pageSize: number }, event: React.FormEvent | null) => void;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    const {
        size = 'm',
        initialPageIndex,
        pageSize,
        totalItemsCount,
        onChange,
        currentPageNeighboursCount = 2,
        currentPage,
        hasNextPage,
        align,
        testId = defaultPaginationTestId,
        ...attrs
    } = props;

    const prevPageSize = useRef(pageSize);
    const lastPageIndex = useMemo(() => {
        return getLastIndex(totalItemsCount, pageSize);
    }, [totalItemsCount, pageSize]);
    const [page, setPage] = useState(initialPageIndex && initialPageIndex <= lastPageIndex ? initialPageIndex : 0);
    const disabled = page >= lastPageIndex || hasNextPage === false;

    const pagersNumbers = useMemo(() => {
        return getPagersNumbers(page, lastPageIndex, currentPageNeighboursCount, ELLIPSIS_PREV, ELLIPSIS_NEXT);
    }, [page, lastPageIndex, currentPageNeighboursCount]);

    const { keyboardNavigationPage, focusedPagerRef, selectedPagerRef, handleFocus, keyDownHandler } =
        useKeyboardPagination(page, lastPageIndex, pagersNumbers);

    const handleSelectPage = useCallback(
        (pageIndex: number, event: React.FormEvent | null) => {
            setPage(pageIndex);
            onChange({ pageIndex, pageSize }, event);
        },
        [onChange, pageSize, setPage, page]
    );
    useEffect(() => {
        if (pageSize !== prevPageSize.current) {
            const newPage = initialPageIndex && initialPageIndex <= lastPageIndex ? initialPageIndex : 0;
            setPage(newPage);
            onChange({ pageIndex: newPage, pageSize }, null);
            prevPageSize.current = pageSize;
        }
    }, [pageSize, onChange]);

    useEffect(() => {
        if (page > lastPageIndex) {
            handleSelectPage(lastPageIndex, null);
        }
    }, [lastPageIndex]);

    useEffect(() => {
        if (currentPage !== undefined) {
            setPage(currentPage);
        }
    }, [currentPage, onChange]);

    const handleSelectNext = useCallback(
        (event: React.FormEvent) => {
            if (disabled) return;
            const newCurrentIndex = page === lastPageIndex ? lastPageIndex : page + 1;
            handleSelectPage(newCurrentIndex, event);

            if (newCurrentIndex === lastPageIndex) {
                setTimeout(() => {
                    selectedPagerRef.current?.focus();
                });
            }
        },
        [page, handleSelectPage, lastPageIndex]
    );

    const handleSelectPrev = useCallback(
        (event: React.FormEvent) => {
            if (page === 0) return;
            const newCurrentIndex = page === 0 ? 0 : page - 1;
            handleSelectPage(newCurrentIndex, event);

            if (newCurrentIndex === 0) {
                setTimeout(() => {
                    selectedPagerRef.current?.focus();
                });
            }
        },
        [handleSelectPage, page]
    );

    const handleEllipsisBack = useCallback(
        (event: React.FormEvent) => {
            const newPageIndex = Math.ceil(page / 2);
            handleSelectPage(newPageIndex, event);
        },
        [page, handleSelectPage]
    );

    const handleEllipsisNext = useCallback(
        (event: React.FormEvent) => {
            const newPageIndex = Math.ceil((lastPageIndex + page) / 2);
            handleSelectPage(newPageIndex, event);
        },
        [page, handleSelectPage, lastPageIndex]
    );

    const renderPagers = useCallback((): React.ReactNode[] => {
        return pagersNumbers.map((index: number): React.ReactNode => {
            if (index === ELLIPSIS_PREV || index === ELLIPSIS_NEXT) {
                const clickHandler = (event: React.MouseEvent) => {
                    if (index === ELLIPSIS_PREV) {
                        handleEllipsisBack(event);
                    } else {
                        handleEllipsisNext(event);
                    }
                };

                return (
                    <Pager
                        key={index.toString()}
                        ref={
                            (index === ELLIPSIS_NEXT && keyboardNavigationPage === ELLIPSIS_NEXT) ||
                            (index === ELLIPSIS_PREV && keyboardNavigationPage === ELLIPSIS_PREV)
                                ? focusedPagerRef
                                : undefined
                        }
                        tabIndex={1}
                        active={false}
                        size={size}
                        data-testid={testId?.separator}
                        onFocus={() => handleFocus(index)}
                        onClick={clickHandler}>
                        ...
                    </Pager>
                );
            }
            const onClick = (event: React.MouseEvent) => {
                handleSelectPage(index, event);
            };

            return (
                <Pager
                    key={index.toString()}
                    ref={
                        index === page
                            ? selectedPagerRef
                            : index === keyboardNavigationPage
                              ? focusedPagerRef
                              : undefined
                    }
                    tabIndex={1}
                    active={index === page}
                    size={size}
                    data-testid={testId?.page?.(index + 1)}
                    onClick={onClick}
                    onFocus={() => handleFocus(index)}>
                    {index + 1}
                </Pager>
            );
        });
    }, [
        focusedPagerRef,
        handleEllipsisBack,
        handleEllipsisNext,
        handleFocus,
        handleSelectPage,
        keyboardNavigationPage,
        page,
        pagersNumbers,
        selectedPagerRef,
        size,
    ]);

    return (
        <Box data-testid={testId?.container} {...attrs} $align={align} $size={size} onKeyDown={keyDownHandler}>
            <Pager
                data-test={'go-left'}
                data-testid={testId?.arrowPrev}
                ref={keyboardNavigationPage === ARROW_PREV ? focusedPagerRef : undefined}
                disabled={page === 0}
                tabIndex={1}
                size={size}
                onFocus={() => handleFocus(ARROW_PREV)}
                onClick={handleSelectPrev}>
                <GoLeftIcon size={size} />
            </Pager>
            {renderPagers()}
            <Pager
                data-test={'go-right'}
                data-testid={testId?.arrowNext}
                ref={keyboardNavigationPage === ARROW_NEXT ? focusedPagerRef : undefined}
                disabled={disabled}
                tabIndex={1}
                size={size}
                onFocus={() => handleFocus(ARROW_NEXT)}
                onClick={handleSelectNext}>
                <GoRightIcon size={size} />
            </Pager>
        </Box>
    );
};

Pagination.displayName = 'Pagination';
