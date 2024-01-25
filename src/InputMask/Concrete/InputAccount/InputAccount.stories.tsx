import React, {useCallback, useState} from 'react';
import { Story, Meta } from 'storybook';
import { InputAccount } from './InputAccount';

export default {
    title: 'Development/InputAccount',
    component: InputAccount,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback((value) => setValue(value), []);

    return <InputAccount onChange={changeHandler} value={value} />;
};
