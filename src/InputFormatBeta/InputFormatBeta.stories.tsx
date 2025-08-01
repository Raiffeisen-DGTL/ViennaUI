import React, { useRef, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputFormatBeta } from './InputFormatBeta';
import { InputDateBeta } from '../InputDateBeta';
import { DatePickerBeta, DatePickerBetaProps } from '../DatePickerBeta';

export default {
    title: 'Development/InputFormatBeta',
    component: InputFormatBeta,
} as Meta;

export const Overview: Story = (args) => {
    const [value, setValue] = useState();
    const changeHandler = (values, sourceInfo) => {
        setValue(values.formattedValue);
    };
    return (
        <InputFormatBeta
            value={value}
            onValueChange={changeHandler}
            format='#### #### #### ####'
            mask={'_'}
            {...args}
        />
    );
};

export const InputDate: Story = (args) => {
    const [value, setValue] = useState();
    const changeHandler = (values, sourceInfo) => {
        setValue(values.formattedValue);
    };
    return <InputDateBeta value={value} onChange={changeHandler} type={'datetime'} {...args} />;
};

InputDate.storyName = 'InputDateBeta';

export const DatePicker: Story<DatePickerBetaProps> = (args) => {
    const [value, setValue] = React.useState('09.04.2024');
    const ref = useRef();

    const handleChange = (e, data) => {
        setValue(data.value);
    };
    return <DatePickerBeta ref={ref} value={value} onChange={handleChange} {...args} />;
};

DatePicker.storyName = 'DatePickerBeta';
