import React from 'react';
import { Meta, Story } from 'storybook';
import { Calendar, PropsCalendar } from './Calendar';

export default {
    title: 'Development/Calendar',
    component: Calendar,
} as Meta;

export const Overview: Story<PropsCalendar> = (args) => {
    return <Calendar date={new Date(2024, 3, 6)} {...args} />;
};
export const Months: Story<PropsCalendar> = (args) => {
    return <Calendar defaultViewMode='month_list' />;
};
export const Years: Story<PropsCalendar> = (args) => {
    return <Calendar defaultViewMode='year_list' />;
};
export const WithSelectedDate: Story<PropsCalendar> = (args) => {
    return <Calendar date={new Date(2020, 1, 1)} format='date' />;
};
export const WithDisabledDates: Story<PropsCalendar> = (args) => {
    return <Calendar date={new Date(2024, 3, 6)} disabledDates={[new Date(2024, 3, 6), new Date(2024, 3, 4)]} />;
};

export const WithRangedDates: Story<PropsCalendar> = (args) => {
    return <Calendar ranged={true} minDate={new Date(2024, 3, 6)} maxDate={new Date(2024, 6, 6)} />;
};

export const WithSpecialDates: Story<PropsCalendar> = (args) => {
    return <Calendar date={new Date(2024, 3, 6)} eventDates={[new Date(2024, 3, 6), new Date(2024, 3, 4)]} />;
};
export const WithDateRanges: Story<PropsCalendar> = (args) => {
    return (
        <Calendar
            ranged={true}
            dateStart={new Date(2024, 3, 2)}
            dateEnd={new Date(2024, 3, 15)}
            minDate={new Date(2024, 3, 1)}
            maxDate={new Date(2024, 6, 6)}
        />
    );
};
