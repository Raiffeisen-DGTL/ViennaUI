import React from 'react';
import { CloseCancelXIcon } from 'vienna.icons';
import { EmptyState } from '../../../EmptyState';
import { Empty } from '../../Table.styles';
import { IconContainer } from '../../../IconContainer';

export const EmptyStateDefault = () => (
    <Empty>
        <EmptyState data-id='table-empty'>
            <IconContainer color='seattle10'>
                <CloseCancelXIcon />
            </IconContainer>
            <EmptyState.Title>Ничего не нашли по вашему запросу</EmptyState.Title>
            <EmptyState.Description>Поменяйте или расширьте параметры фильтров</EmptyState.Description>
        </EmptyState>
    </Empty>
);
