import React from 'react';
import { Story, Meta } from 'storybook';
import { Counter, CounterProps } from './Counter';
import { Groups } from '../Groups';

export default {
    title: 'Development/Counter',
    component: Counter,
} as Meta;

export const Overview: Story<CounterProps> = (args) => {
    return (
        <Groups>
            <Counter>8</Counter>
            <Counter>99</Counter>
            <Counter>99+</Counter>
        </Groups>
    );
};

export const CounterStyles: Story<CounterProps> = (args) => {
    return (
        <Groups>
            <Counter design='critical'>9</Counter>
            <Counter design='warning'>12</Counter>
            <Counter design='success'>25</Counter>
            <Counter design='accent'>99+</Counter>
            <Counter design='neutral'>178</Counter>
            <Counter design='disabled'>256</Counter>
        </Groups>
    );
};
