import React, {useCallback, useState} from 'react';
import { Story, Meta } from 'storybook';
import { InputDigital } from './InputDigital';

export default {
    title: 'Development/InputDigital',
    component: InputDigital,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback((value) => setValue(value), []);

    return <InputDigital onChange={changeHandler} value={value} />;
};
