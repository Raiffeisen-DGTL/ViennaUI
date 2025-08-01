import React from 'react';
import { Story, Meta } from 'storybook';
import { InputSlider, InputSliderProps } from './InputSlider';

export default {
    title: 'Development/InputSlider',
    component: InputSlider,
} as Meta;

export const Overview: Story<InputSliderProps> = (args) => {
    const [value, setValue] = React.useState(50);
    const changeHandler = (e) => {
        setValue(parseInt(e));
    };
    return (
        <InputSlider min={20} max={100} onChange={changeHandler} value={value} postfix='15%'>
            <InputSlider.Tag val={20}>20 $</InputSlider.Tag>
            <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
            <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
        </InputSlider>
    );
};

export const ViewOnly: Story<InputSliderProps> = (args) => {
    return (
        <InputSlider min={20} max={100} value={50} viewOnly postfix='15%'>
            <InputSlider.Tag val={20}>20 $</InputSlider.Tag>
            <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
            <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
        </InputSlider>
    );
};
