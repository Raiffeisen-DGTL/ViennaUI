import React, { type FC, useCallback } from 'react';
import { EmptyState } from '../../../EmptyState';
import { Button } from '../../../Button';
import { useTableLocalization, useTableService } from '../Context';
import { Empty } from '../../Table.styles';

export interface EmptyColumnsPropsType {
    onClickShowAllColumns?: () => void;
}

export const EmptyColumns: FC<EmptyColumnsPropsType> = ({ onClickShowAllColumns }) => {
    const localize = useTableLocalization();
    const { showAllColumns } = useTableService();
    const onClick = useCallback(() => {
        showAllColumns();
        if (onClickShowAllColumns) onClickShowAllColumns();
    }, [showAllColumns]);
    return (
        <Empty>
            <EmptyState>
                <EmptyState.Title>{localize('ds.table.emptyColumns.title')}</EmptyState.Title>
                <EmptyState.Description>{localize('ds.table.emptyColumns.description')}</EmptyState.Description>
                <EmptyState.Actions>
                    <Button design='accent' onClick={onClick}>
                        {localize('ds.table.emptyColumns.showAllColumns')}
                    </Button>
                </EmptyState.Actions>
            </EmptyState>
        </Empty>
    );
};
