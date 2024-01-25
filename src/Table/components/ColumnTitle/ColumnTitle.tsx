import React, { FC } from 'react';
import { Box, PropsBox, Icon, Title } from './ColumnTitle.styles';
import { ColumnProps } from '../Column';
import { BoxStyled } from '../../../Utils/styled';

interface BasicTitleProps {
    column: ColumnProps;
}
export const BasicTitle: FC<BasicTitleProps> = ({ column }) => {
    return <Title>{column.title}</Title>;
};

export interface ColumnTitleProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'title'> {
    title?: ColumnProps['title'];
    icon: React.ReactNode;
    active?: boolean;
    forceIconVisibility?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

export const ColumnTitle = React.forwardRef<HTMLDivElement, ColumnTitleProps>(
    ({ icon, title, active, forceIconVisibility, ...attrs }, ref) => (
        <Box {...(attrs as {})} ref={ref} $active={active} $forceIconVisibility={forceIconVisibility}>
            <Title>{title}</Title>
            <Icon>{icon}</Icon>
        </Box>
    )
);
