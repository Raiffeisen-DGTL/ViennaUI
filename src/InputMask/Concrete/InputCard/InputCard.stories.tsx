import React, {useCallback, useState} from 'react';
import { Story, Meta } from 'storybook';
import { InputCard } from './InputCard';

export default {
    title: 'Development/InputCard',
    component: InputCard,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = useState();
    const changeHandler = useCallback((value) => setValue(value), []);

    return <InputCard onChange={changeHandler} value={value} />;
};
