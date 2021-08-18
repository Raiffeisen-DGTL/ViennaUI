import React from 'react';
import { Box, Icon, Title } from './ColumnTitle.styles';
import { ColumnProps } from '../Column';

export const BasicTitle: any = ({ column }) => {
    return <Title>{column.title}</Title>;
};

export interface ColumnTitileProps {
    title?: ColumnProps['title'];
    icon: React.ReactNode;
    active?: boolean;
    forceIconVisibility?: boolean;
    onClick?: (event: React.FormEvent) => void;
}

export const ColumnTitle: React.FC<ColumnTitileProps> = ({ icon, title, ...attrs }) => (
    <Box {...attrs}>
        <Title>{title}</Title>
        <Icon>{icon}</Icon>
    </Box>
);
