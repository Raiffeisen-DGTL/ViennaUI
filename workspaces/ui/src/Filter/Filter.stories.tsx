import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Filter, { FilterProps } from './Filter';

export default {
    title: 'Development/Filter',
    component: Filter,
} as Meta;

export const Overview: Story<FilterProps> = (args) => {
    return (
        <Filter {...args}>
            <Filter.Item>Пол</Filter.Item>
            <Filter.Item>Рост</Filter.Item>
            <Filter.Item>Вес</Filter.Item>
        </Filter>
    );
};
