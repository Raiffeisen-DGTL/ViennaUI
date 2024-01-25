import React, { useCallback } from 'react';
import { EmptyState } from '../../../EmptyState';
import { Button } from '../../../Button';
import { useTableLocalization, useTableService } from '../Context';

export const Empty = () => {
    const localize = useTableLocalization();
    const { showAllColumns } = useTableService();
    const onClick = useCallback(() => {
        showAllColumns();
    }, [showAllColumns]);
    return (
        <EmptyState>
            <EmptyState.Title>{localize('ds.table.emptyColumns.title')}</EmptyState.Title>
            <EmptyState.Description>{localize('ds.table.emptyColumns.description')}</EmptyState.Description>
            <EmptyState.Actions>
                <Button design='accent' onClick={onClick}>
                    {localize('ds.table.emptyColumns.showAllColumns')}
                </Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};
