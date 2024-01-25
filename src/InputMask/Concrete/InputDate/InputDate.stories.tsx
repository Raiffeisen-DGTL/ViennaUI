import React, {useCallback, useState} from 'react';
import { Story, Meta } from 'storybook';
import { InputDate } from './InputDate';

export default {
    title: 'Development/InputDate',
    component: InputDate,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState(new Date());
    const changeHandler = useCallback((value) => setValue(value), []);

    return <InputDate onChange={changeHandler} value={value} type='date' />;
};
