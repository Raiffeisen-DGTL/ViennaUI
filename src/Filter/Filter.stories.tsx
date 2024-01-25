import React from 'react';
import { Story, Meta } from 'storybook';
import { Filter, FilterProps } from './Filter';

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

export const Playwright: Story<FilterProps> = (args) => {
    return (
        <Filter align='vertical' design='ghost'>
            <Filter.Item design='primary'>Пол</Filter.Item>
            <Filter.Item>Рост</Filter.Item>
            <Filter.Item>Вес</Filter.Item>
        </Filter>
    );
};
