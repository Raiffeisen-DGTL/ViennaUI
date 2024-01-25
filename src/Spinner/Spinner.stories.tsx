import React from 'react';
import { Story, Meta } from 'storybook';
import { Spinner, SpinnerProps } from './Spinner';

export default {
    title: 'Development/Spinner',
    component: Spinner,
} as Meta;

export const Overview: Story<SpinnerProps> = (args) => {
    return <Spinner {...args} />;
};
