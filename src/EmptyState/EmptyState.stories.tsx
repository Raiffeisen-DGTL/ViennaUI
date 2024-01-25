import React from 'react';
import { Story, Meta } from 'storybook';
import { EmptyState, EmptyStateProps } from './EmptyState';
import { Button } from '../Button';

export default {
    title: 'Development/EmptyState',
    component: EmptyState,
} as Meta;

export const Overview: Story<EmptyStateProps> = (args) => {
    return (
        <EmptyState {...args}>
            <EmptyState.Title>Оформите карту</EmptyState.Title>
            <EmptyState.Description>
                Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
                другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
            </EmptyState.Description>
            <EmptyState.Actions>
                <Button design='accent'>Оформить</Button>
                <Button design='ghost'>Позвонить</Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};
