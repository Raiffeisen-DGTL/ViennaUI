import React from 'react';
import { Story, Meta } from 'storybook';
import { InputPassword } from './InputPassword';
import { InputProps } from '../Input';

export default {
    title: 'Development/InputPassword',
    component: InputPassword,
} as Meta;

export const Overview: Story<InputProps> = (args) => {
    return <InputPassword {...args} />;
};
