import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputMask, InputMaskProps } from './InputMask';

export default {
    title: 'Development/InputMask',
    component: InputMask,
} as Meta;

export const Overview: Story<InputMaskProps> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback(({ value: data }) => setValue(data), []);
    return <InputMask maskOptions={{ mask: '0000' }} value={value} onChange={changeHandler} {...args} />;
};

export const ViewOnly: Story<InputMaskProps> = (args) => {
    return <InputMask viewOnly maskOptions={{ mask: '0000' }} value={'7812'} />;
};
