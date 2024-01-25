import React from 'react';
import { Story, Meta } from 'storybook';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';
import { Select } from '../Select/Select';

export default {
    title: 'Development/DateTimePicker',
    component: DateTimePicker,
} as Meta;

export const Overview: Story<DateTimePickerProps> = (args) => {
    const [value, setValue] = React.useState({
        date: '22.02.1988',
        time: '09:00',
    });
    const changeHandler = React.useCallback((e, data) => setValue(data), []);
    return (
        <DateTimePicker {...args} value={value} onChange={changeHandler}>
            <Select />
        </DateTimePicker>
    );
};
