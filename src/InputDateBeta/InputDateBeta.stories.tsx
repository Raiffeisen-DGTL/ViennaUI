import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputDateBeta } from '../InputDateBeta';

export default {
    title: 'Development/InputDateBeta',
    component: InputDateBeta,
} as Meta;

export const Overview: Story = (args) => {
    const [value, setValue] = useState();
    const changeHandler = (values, sourceInfo) => {
        setValue(values.formattedValue);
    };
    return <InputDateBeta value={value} onChange={changeHandler} type={'datetime'} {...args} />;
};
