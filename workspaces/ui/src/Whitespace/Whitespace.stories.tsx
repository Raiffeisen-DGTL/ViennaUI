import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Whitespace, WhitespaceProps } from './Whitespace';

export default {
    title: 'Development/Whitespace',
    component: Whitespace,
} as Meta;

export const Overview: Story<WhitespaceProps> = (args) => {
    return <Whitespace {...args}>Whitespace box</Whitespace>;
};
