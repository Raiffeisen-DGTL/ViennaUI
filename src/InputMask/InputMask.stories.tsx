import React, {useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputMask, InputMaskProps } from './InputMask';

export default {
    title: 'Development/InputMask',
    component: InputMask,
} as Meta;

export const Overview: Story<InputMaskProps> = (args) => {
    const [value, setValue] = useState('');
    const changeHandler = useCallback((value) => setValue(value), []);
    return <InputMask maskOptions={{mask: Date}} value={value} onChange={changeHandler} {...args} />;
};
