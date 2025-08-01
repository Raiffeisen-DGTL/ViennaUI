import React from 'react';
import { EmptyState } from '../../../EmptyState';
import { Empty } from '../../Table.styles';

export const LoadingState = () => (
    <Empty>
        <EmptyState loading data-id='table-loading'>
            <EmptyState.Title>Загружаем данные</EmptyState.Title>
            <EmptyState.Description>Мы загружаем данные таблицы, очень скоро они будут готовы.</EmptyState.Description>
        </EmptyState>
    </Empty>
);
