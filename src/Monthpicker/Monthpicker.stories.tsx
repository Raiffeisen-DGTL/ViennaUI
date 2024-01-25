import React from 'react';
import { Story, Meta } from 'storybook';
import { Monthpicker, MonthpickerProps } from './Monthpicker';

export default {
    title: 'Development/Monthpicker',
    component: Monthpicker,
} as Meta;

export const Overview: Story<MonthpickerProps> = (args) => {
    return <Monthpicker {...args} />;
};
