import React from 'react';
import { Story, Meta } from 'storybook';
import { ViewOnly, ViewOnlyProps } from './ViewOnly';

export default {
    title: 'Development/ViewOnly',
    component: Text,
} as Meta;

export const Overview: Story<ViewOnlyProps> = (args: ViewOnlyProps) => {
    return (
        <ViewOnly size={'s'} {...args}>
            View only text
        </ViewOnly>
    );
};
