import React, { useRef } from 'react';
import { Story, Meta } from 'storybook';
import { Datepicker, DatepickerProps } from './Datepicker';
import { Button } from '@/Button';

export default {
    title: 'Development/Datepicker',
    component: Datepicker,
} as Meta;

export const Overview: Story<DatepickerProps> = (args) => {
    const [value, setValue] = React.useState();
    const ref = useRef<any>();

    const handleChange = React.useCallback(({ value: data }) => setValue(data), []);
    return <Datepicker ref={ref} value={value} onChange={handleChange} />;
};

export const ViewOnly: Story<DatepickerProps> = (args) => {
    return <Datepicker viewOnly value={new Date('2020-10-10')} />;
};

export const Year5000Bug: Story<DatepickerProps> = () => {
    const [date, setDate] = React.useState<any>();

    return (
        <Datepicker
            autoComplete='off'
            min={undefined}
            max={undefined}
            value={date}
            onChange={({ value, event, options }) => {
                setDate(options.date);
            }}
        />
    );
};

export const TestDatepicker = () => {
    const initialDate = new Date();
    const [date, setDate] = React.useState<Date | undefined>(initialDate);
    const handleDatepickerChange: DatepickerProps['onChange'] = ({ options: { date } }) => {
        console.log('date change', date);
        setDate(date);
    };

    return (
        <div>
            <Datepicker value={date} onChange={handleDatepickerChange} />
        </div>
    );
};

export const DatepickerBugWithViewOnly: Story<DatepickerProps> = (args) => {
    const [value, setValue] = React.useState();
    const [viewOnly, setViewOnly] = React.useState(false);
    const handleChange = React.useCallback(({ value }) => setValue(value), []);
    return (
        <>
            <Button onClick={() => setViewOnly((p) => !p)} size='m'>
                Change viewOnly
            </Button>
            <Datepicker value={value} onChange={handleChange} viewOnly={viewOnly} />
        </>
    );
};
