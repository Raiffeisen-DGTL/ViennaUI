import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputDate } from './InputDate';

export default {
    title: 'Development/InputDate',
    component: InputDate,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState(new Date('2024-05-24'));
    const changeHandler = useCallback(({ value: data }) => setValue(data), []);

    return <InputDate onChange={changeHandler} value={value} type='date' />;
};

export const ViewOnly: Story<any> = (args) => {
    return <InputDate viewOnly value={new Date('2024-05-24')} type='date' />;
};
