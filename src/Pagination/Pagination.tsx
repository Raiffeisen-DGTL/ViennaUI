import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { GoLeft, GoRight } from 'vienna.icons';
import { getLastIndex, getPagersNumbers } from './utils';
import { Pager } from './Pager';
import { Box, PropsBox } from './Pagination.styles';
import { BoxStyled } from '../Utils/styled';

const ELLIPSIS_PREV = -1;
const ELLIPSIS_NEXT = -2;

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
    /**
     * Коллбэк. Вызывается при изменении страницы
     * В этом методе нужно описывать логику показа элементов в зависимости
     * от страницы и размера страницы
     * @param pageIndex - индекс новой страницы
     * @param pageSize - количество элементов на странице
     */
    onChange: (event: React.FormEvent | null, data: { pageIndex: number; pageSize: number }) => void;
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
        ...attrs
    } = props;

    const prevPageSize = useRef(pageSize);
    const lastPageIndex = useMemo(() => {
        return getLastIndex(totalItemsCount, pageSize);
    }, [totalItemsCount, pageSize]);
    const [page, setPage] = useState(initialPageIndex && initialPageIndex <= lastPageIndex ? initialPageIndex : 0);
    const disabled = page >= lastPageIndex || hasNextPage === false;

    const handleSelectPage = useCallback(
        (event: React.FormEvent | null, pageIndex: number) => {
            setPage(pageIndex);
            onChange(event, { pageIndex, pageSize });
        },
        [onChange, pageSize, setPage, page]
    );
    useEffect(() => {
        if (pageSize !== prevPageSize.current) {
            setPage(page);
            onChange(null, { pageIndex: page, pageSize });
            prevPageSize.current = pageSize;
        }
    }, [pageSize, onChange]);

    useEffect(() => {
        if (page > lastPageIndex) {
            handleSelectPage(null, lastPageIndex);
        }
    }, [lastPageIndex]);

    useEffect(() => {
        if (currentPage !== undefined) {
            setPage(currentPage);
        }
    }, [currentPage, onChange]);

    const pagersNumbers = useMemo(() => {
        return getPagersNumbers(page, lastPageIndex, currentPageNeighboursCount, ELLIPSIS_PREV, ELLIPSIS_NEXT);
    }, [currentPageNeighboursCount, page, lastPageIndex]);

    const handleSelectNext = useCallback(
        (event: React.FormEvent) => {
            if (disabled) return;
            const newCurrentIndex = page === lastPageIndex ? lastPageIndex : page + 1;
            handleSelectPage(event, newCurrentIndex);
        },
        [page, handleSelectPage, lastPageIndex]
    );

    const handleSelectPrev = useCallback(
        (event: React.FormEvent) => {
            const newCurrentIndex = page === 0 ? 0 : page - 1;
            handleSelectPage(event, newCurrentIndex);
        },
        [handleSelectPage, page]
    );

    const handleEllipsisBack = useCallback(
        (event: React.FormEvent) => {
            const newPageIndex = Math.ceil(page / 2);
            handleSelectPage(event, newPageIndex);
        },
        [page, handleSelectPage]
    );

    const handleEllipsisNext = useCallback(
        (event: React.FormEvent) => {
            const newPageIndex = Math.ceil((lastPageIndex + page) / 2);
            handleSelectPage(event, newPageIndex);
        },
        [page, handleSelectPage, lastPageIndex]
    );

    const renderPagers = useCallback((): React.ReactNode[] => {
        return pagersNumbers.map((index: number): React.ReactNode => {
            if (index === ELLIPSIS_PREV || index === ELLIPSIS_NEXT) {
                const clickHandler = index === ELLIPSIS_PREV ? handleEllipsisBack : handleEllipsisNext;
                return (
                    <Pager key={index.toString()} tabIndex={1} active={false} size={size} onClick={clickHandler}>
                        ...
                    </Pager>
                );
            }
            const onClick = (event: React.MouseEvent) => handleSelectPage(event, index);
            return (
                <Pager key={index.toString()} tabIndex={1} active={index === page} size={size} onClick={onClick}>
                    {index + 1}
                </Pager>
            );
        });
    }, [page, size, pagersNumbers, handleEllipsisNext, handleEllipsisBack, handleSelectPage]);

    return (
        <Box {...(attrs as {})} $align={align} $size={size}>
            <Pager disabled={page === 0} tabIndex={1} size={size} onClick={handleSelectPrev}>
                <GoLeft size={size} />
            </Pager>
            {renderPagers()}
            <Pager disabled={disabled} tabIndex={1} size={size} onClick={handleSelectNext}>
                <GoRight size={size} />
            </Pager>
        </Box>
    );
};

Pagination.displayName = 'Pagination';
