import React from 'react';
import { Meta, Story } from 'storybook';
import { Calendar, CalendarProps } from './Calendar';

export default {
    title: 'Development/Calendar',
    component: Calendar,
} as Meta;

export const Overview: Story<CalendarProps> = (args) => {
    return <Calendar {...args} />;
};
export const Months: Story<CalendarProps> = (args) => {
    return <Calendar defaultViewMode='month_list' />;
};
export const Years: Story<CalendarProps> = (args) => {
    return <Calendar defaultViewMode='year_list' />;
};
export const WithSelectedDate: Story<CalendarProps> = (args) => {
    return <Calendar date={new Date(2020, 1, 1)} format='date' />;
};
export const WithDisabledDates: Story<CalendarProps> = (args) => {
    return (
        <Calendar
            date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
            disabledDates={[
                new Date(new Date().getFullYear(), new Date().getMonth(), 6),
                new Date(new Date().getFullYear(), new Date().getMonth(), 4),
            ]}
        />
    );
};

export const WithSpecialDates: Story<CalendarProps> = (args) => {
    return (
        <Calendar
            date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
            eventDates={[
                new Date(new Date().getFullYear(), new Date().getMonth(), 6),
                new Date(new Date().getFullYear(), new Date().getMonth(), 4),
            ]}
        />
    );
};
export const WithDateRanges: Story<CalendarProps> = (args) => {
    return (
        <Calendar
            ranged={true}
            dateStart={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
            dateEnd={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
        />
    );
};
