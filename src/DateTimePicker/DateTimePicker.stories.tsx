import React from 'react';
import { Story, Meta } from 'storybook';
import { DateTimePicker } from './DateTimePicker';
import { Select } from '../Select';
import { Datepicker } from '../Datepicker';
import { InputDate } from '../InputMask';
import { Groups } from '../Groups';
import { DateObj, DateTimePickerProps } from './types';

export default {
    title: 'Development/DateTimePicker',
    component: DateTimePicker,
} as Meta;

export const Overview: Story<DateTimePickerProps> = () => {
    const [value, setValue] = React.useState(new Date('2025-07-02T08:59:00Z'));
    const changeHandler = React.useCallback(({ value: data }) => setValue(data), []);

    return (
        <DateTimePicker value={value} onChange={changeHandler}>
            <Select />
        </DateTimePicker>
    );
};

export const WithDateInstance: Story<DateTimePickerProps> = () => {
    const [value, setValue] = React.useState(new Date('2024-01-01'));
    const changeHandler = React.useCallback(({ value: data }) => setValue(data), []);

    return (
        <DateTimePicker value={value} onChange={changeHandler}>
            <Select />
        </DateTimePicker>
    );
};

export const WithDateObjUnset: Story<DateTimePickerProps> = () => {
    const [value, setValue] = React.useState<DateObj>();

    const changeHandler = React.useCallback(({ value }: { value: DateObj }) => setValue(value), []);

    return (
        <DateTimePicker value={value} onChange={changeHandler}>
            <Select />
        </DateTimePicker>
    );
};

export const Invalid: Story<DateTimePickerProps> = () => {
    const [value, setValue] = React.useState({
        date: '01.01.2024',
        time: '09:00',
    });
    const changeHandler = React.useCallback(({ value: data }) => setValue(data), []);

    return (
        <Groups>
            <DateTimePicker invalid onChange={changeHandler} value={value}>
                <Datepicker />
                <InputDate />
            </DateTimePicker>
            <DateTimePicker onChange={changeHandler} value={value}>
                <Datepicker invalid />
                <InputDate />
            </DateTimePicker>
            <DateTimePicker onChange={changeHandler} value={value}>
                <Datepicker invalid />
                <InputDate invalid />
            </DateTimePicker>
            <DateTimePicker onChange={changeHandler} value={value}>
                <Datepicker />
                <InputDate invalid />
            </DateTimePicker>
        </Groups>
    );
};

export const ViewOnly: Story<DateTimePickerProps> = () => {
    return <DateTimePicker viewOnly value={new Date('2024-01-01T12:00')} />;
};
