import React, { useRef } from 'react';
import { Story, Meta } from 'storybook';
import { DatePickerBeta, DatePickerBetaProps } from './DatePickerBeta';

export default {
    title: 'Development/DatePickerBeta',
    component: DatePickerBeta,
} as Meta;

export const Overview: Story<DatePickerBetaProps> = (args) => {
    const [value, setValue] = React.useState();
    const ref = useRef();

    const handleChange = React.useCallback((e, data) => setValue(data.value), []);
    return <DatePickerBeta ref={ref} value={value} onChange={handleChange} {...args} />;
};
