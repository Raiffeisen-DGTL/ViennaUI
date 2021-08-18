import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputSlider, InputSliderProps } from './InputSlider';

export default {
    title: 'Development/InputSlider',
    component: InputSlider,
} as Meta;

export const Overview: Story<InputSliderProps> = (args) => {
    return <InputSlider {...args} />;
};
