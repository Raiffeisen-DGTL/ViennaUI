import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { GoLeft, GoRight } from 'vienna.icons';
import { getLastIndex, getPagersNumbers } from './utils';
import { Pager } from './Pager';
import { Box } from './Pagination.styles';

const ELLIPSIS_PREV = -1;
const ELLIPSIS_NEXT = -2;

interface Props {
    /**
     * Размер компонента
     */
    size?: 'm' | 'l' | 's';
    /**
     * Выравнивание по горизонтали
     */
    align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
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
     * Коллбэк. Вызывается при изменении страницы
     * В этом методе нужно описывать логику показа элементов в зависимости
     * от страницы и размера страницы
     * @param pageIndex - индекс новой страницы
     * @param pageSize - количество элементов на странице
     */
    onChange: (event: React.FormEvent | null, data: { pageIndex: number; pageSize: number }) => void;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    title?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type PaginationProps = Props & HTMLAttributeProps;

export const Pagination: React.FC<PaginationProps> = (props): JSX.Element => {
    const {
        size = 'm',
        initialPageIndex,
        pageSize,
        totalItemsCount,
        onChange,
        currentPageNeighboursCount = 2,
        ...attrs
    } = props;

    const lastPageIndex = useMemo(() => {
        return getLastIndex(totalItemsCount, pageSize);
    }, [totalItemsCount, pageSize]);
    const [page, setPage] = useState(initialPageIndex && initialPageIndex <= lastPageIndex ? initialPageIndex : 0);

    const handleSelectPage = useCallback(
        (event: React.FormEvent | null, pageIndex: number) => {
            setPage(pageIndex);
            onChange(event, { pageIndex, pageSize });
        },
        [onChange, pageSize, setPage]
    );

    useEffect(() => {
        setPage(page);
        onChange(null, { pageIndex: page, pageSize });
    }, [pageSize]);

    useEffect(() => {
        if (page > lastPageIndex) {
            handleSelectPage(null, lastPageIndex);
        }
    }, [lastPageIndex]);

    const pagersNumbers = useMemo(() => {
        return getPagersNumbers(page, lastPageIndex, currentPageNeighboursCount, ELLIPSIS_PREV, ELLIPSIS_NEXT);
    }, [currentPageNeighboursCount, page, lastPageIndex]);

    const handleSelectNext = useCallback(
        (event: React.FormEvent) => {
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
        return pagersNumbers.map(
            (index: number): React.ReactNode => {
                if (index === ELLIPSIS_PREV || index === ELLIPSIS_NEXT) {
                    const clickHandler = index === ELLIPSIS_PREV ? handleEllipsisBack : handleEllipsisNext;
                    return (
                        <Pager key={index.toString()} tabIndex={1} active={false} size={size} onClick={clickHandler}>
                            ...
                        </Pager>
                    );
                }
                const onClick = (event: React.FormEvent) => handleSelectPage(event, index);
                return (
                    <Pager key={index.toString()} tabIndex={1} active={index === page} size={size} onClick={onClick}>
                        {index + 1}
                    </Pager>
                );
            }
        );
    }, [page, size, pagersNumbers, handleEllipsisNext, handleEllipsisBack, handleSelectPage]);

    return (
        <Box {...attrs}>
            <Pager disabled={page === 0} tabIndex={1} size={size} onClick={handleSelectPrev}>
                <GoLeft size={size} />
            </Pager>
            {renderPagers()}
            <Pager disabled={page >= lastPageIndex} tabIndex={1} size={size} onClick={handleSelectNext}>
                <GoRight size={size} />
            </Pager>
        </Box>
    );
};

Pagination.displayName = 'Pagination';
export default Pagination;
