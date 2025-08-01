import React from 'react';
import { Box, PropsBox, Icon, Title } from './ColumnTitle.styles';
import { ColumnProps } from '../Column';
import { BoxStyled } from '../../../Utils/styled';
import { TableData } from '../../types';

interface BasicTitleProps<T> {
    column: ColumnProps<T>;
}
export const BasicTitle = <T,>({ column }: BasicTitleProps<T>) => {
    return (
        <Box $align={column.align}>
            <Title>{column.title}</Title>
        </Box>
    );
};

export interface ColumnTitleProps<T> extends Omit<BoxStyled<typeof Box, PropsBox>, 'title'> {
    title?: ColumnProps<T>['title'];
    align?: ColumnProps<T>['align'];
    icon: React.ReactNode;
    active?: boolean;
    forceIconVisibility?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

export const ColumnTitle = React.forwardRef<HTMLDivElement, ColumnTitleProps<TableData>>(
    ({ icon, title, active, forceIconVisibility, align, ...attrs }, ref) => (
        <Box {...attrs} ref={ref} $isIcon $align={align} $active={active} $forceIconVisibility={forceIconVisibility}>
            <Title>{title}</Title>
            <Icon>{icon}</Icon>
        </Box>
    )
);
