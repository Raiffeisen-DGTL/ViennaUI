import { CloseCancelXIcon } from 'vienna.icons';
import React from 'react';
import { EmptyState } from '../../../EmptyState';
import { Empty } from '../../Table.styles';
import { IconContainer } from '../../../IconContainer';

export const ErrorState = () => (
    <Empty>
        <EmptyState data-id='table-error'>
            <IconContainer color='nice10'>
                <CloseCancelXIcon />
            </IconContainer>
            <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
            <EmptyState.Description>Что-то пошло не так, и мы уже работаем над этим.</EmptyState.Description>
        </EmptyState>
    </Empty>
);
