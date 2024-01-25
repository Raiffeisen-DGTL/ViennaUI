import React from 'react';
import { Story, Meta } from 'storybook';
import { InputSlider, InputSliderProps } from './InputSlider';

export default {
    title: 'Development/InputSlider',
    component: InputSlider,
} as Meta;

export const Overview: Story<InputSliderProps> = (args) => {
    const [value, setValue] = React.useState(50);
    const changeHandler = (e, data) => {
        setValue(parseInt(data.value));
    };
    return (
        <InputSlider
            mask='V $'
            lazy={false}
            min={20}
            max={100}
            blocks={{ V: { mask: Number } }}
            onChange={changeHandler}
            value={value}
            postfix='15%'>
            <InputSlider.Tag val={20}>20 $</InputSlider.Tag>
            <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
            <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
        </InputSlider>
    );
};
