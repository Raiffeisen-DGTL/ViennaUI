import React from 'react';
import { Box, Icon } from './ColumnTitle.styles';
import { ColumnProps } from '../Column';

export const BasicTitle: any = ({ column }) => {
    return <>{column.title}</>;
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
        {title}
        <Icon>{icon}</Icon>
    </Box>
);
