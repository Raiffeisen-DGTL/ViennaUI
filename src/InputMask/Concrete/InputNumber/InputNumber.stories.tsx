import React, {useCallback, useState} from 'react';
import { Story, Meta } from 'storybook';
import { InputNumber } from './InputNumber';

export default {
    title: 'Development/InputNumber',
    component: InputNumber,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback((value) => setValue(value), []);

    return <InputNumber onChange={changeHandler} value={value} scale={10} max={500} />;
};
