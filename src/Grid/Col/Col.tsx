import React, { FC } from 'react';
import { Box, PropsBox } from './Col.styles';
import { BoxStyled } from '../../Utils/styled';

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

export interface ColProps extends BoxStyled<typeof Box, PropsBox> {
    /** Размер колонки */
    size?: PropsBox['$size'];
    /** Отступ слева */
    offset?: PropsBox['$offset'];
    /** Порядок отрисовки колонки */
    order?: PropsBox['$order'];
}

export const Col: FC<ColProps> = ({ children, size = 'auto', offset = 0, order, ...attrs }) => {
    return (
        <Box {...attrs} $size={size} $offset={offset} $order={order}>
            {children}
        </Box>
    );
};
