import React from 'react';
import { Box } from './Col.styles';

export interface Sizes<T> {
    xs?: T;
    s?: T;
    m?: T;
    l?: T;
    xl?: T;
}

export interface BasedSize<T> extends Sizes<T> {
    base?: T;
}

export type SizeOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
export type ColumnSize = BasedSize<SizeOption> | SizeOption;

export type OffsetOption = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnOffset = Sizes<OffsetOption> | OffsetOption;

export type OrderOption = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnOrder = Sizes<OrderOption> | OrderOption;

interface Props {
    children?: React.ReactNode;
    /** Размер колонки */
    size?: ColumnSize;
    /** Отступ слева */
    offset?: ColumnOffset;
    /** Порядок отрисовки колонки */
    order?: ColumnOrder;
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

export type ColProps = HTMLAttributeProps & Props;

export const Col: React.FC<ColProps> = (props) => {
    return <Box {...props} />;
};

export default Col;

Col.defaultProps = {
    size: 'auto',
    offset: 0,
};
