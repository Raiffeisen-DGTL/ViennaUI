import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputDigital } from './InputDigital';

export default {
    title: 'Development/InputDigital',
    component: InputDigital,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback(({ value: data }) => setValue(data), []);

    return <InputDigital onChange={changeHandler} value={value} />;
};

export const ViewOnly: Story<any> = (args) => {
    return <InputDigital viewOnly value={'12312312'} />;
};

export const BugWithNullValue: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = ({ value: data }) => {
        setValue(data);
        console.log('value', data);
    };

    return <InputDigital onChange={changeHandler} value={value} />;
};
