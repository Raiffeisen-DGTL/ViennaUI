import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputCard } from './InputCard';

export default {
    title: 'Development/InputCard',
    component: InputCard,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback(({ value: data }) => setValue(data), []);

    return <InputCard onChange={changeHandler} value={value} />;
};

export const ViewOnly: Story<any> = (args) => {
    return <InputCard viewOnly value={'1231 2312 3123 2132'} />;
};
