import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputAccount } from './InputAccount';

export default {
    title: 'Development/InputAccount',
    component: InputAccount,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback(({ value: data }) => setValue(data), []);

    return <InputAccount onChange={changeHandler} value={value} />;
};

export const ViewOnly: Story<any> = (args) => {
    return <InputAccount viewOnly value={'12312.312.3.12312313123'} />;
};
