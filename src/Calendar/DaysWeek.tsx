import React from 'react';
import { WeekDay } from './Calendar.styles';
import { StartingWeekDay } from './types';
import { useCalendarLocalization } from './Context';

export const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

export const DaysWeek: React.FC<{ startingWeekDay: StartingWeekDay }> = ({ startingWeekDay }) => {
    const localize = useCalendarLocalization();
    const days = DAYS.map((day) => localize(`ds.calendar.day.${day}`));

    if (startingWeekDay === 'sunday') {
        const lastDay = days.pop();

        if (lastDay) {
            days.unshift(lastDay);
        }
    }

    return (
        <>
            {days.map((day: string, index: number) => (
                <WeekDay key={index}>{day}</WeekDay>
            ))}
        </>
    );
};
