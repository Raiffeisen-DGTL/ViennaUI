import React, { useCallback } from 'react';
import { EmptyState } from '../../../EmptyState';
import { Button } from '../../../Button';
import { useTableService } from '../Context';

export const Empty = () => {
    const { showAllColumns } = useTableService();
    const onClick = useCallback(() => {
        showAllColumns();
    }, [showAllColumns]);
    return (
        <EmptyState>
            <EmptyState.Title>Нет колонок для отображения</EmptyState.Title>
            <EmptyState.Description>
                В таблице отключены все колонки. Выберите колонки для отображения в настройках таблицы или включите все
                доступные.
            </EmptyState.Description>
            <EmptyState.Actions>
                <Button design='accent' onClick={onClick}>
                    Включить все колонки
                </Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};
