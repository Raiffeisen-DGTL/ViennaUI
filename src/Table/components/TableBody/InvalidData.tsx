import React from 'react';
import { CloseCancelXIcon } from 'vienna.icons';
import { EmptyState } from '../../../EmptyState';
import { useTableLocalization } from '../Context';
import { Empty } from '../../Table.styles';
import { IconContainer } from '../../../IconContainer';

export const InvalidData = () => {
    const localize = useTableLocalization();

    return (
        <Empty>
            <EmptyState>
                <IconContainer color='nice10'>
                    <CloseCancelXIcon />
                </IconContainer>
                <EmptyState.Title>{localize('ds.table.invalidData.title')}</EmptyState.Title>
                <EmptyState.Description>{localize('ds.table.invalidData.description')}</EmptyState.Description>
            </EmptyState>
        </Empty>
    );
};
