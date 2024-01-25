import React from 'react';
import { Story, Meta } from 'storybook';
import { Progressbar, ProgressbarProps } from './Progressbar';

export default {
    title: 'Development/Progressbar',
    component: Progressbar,
} as Meta;

export const Overview: Story<ProgressbarProps> = (args) => {
    return <Progressbar {...args} />;
};
