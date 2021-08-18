import React from 'react';
import { WeekDay } from './Calendar.styles';
import { StartingWeekDay, Day } from './types';
import { useCalendarLocalization } from './Context';
import { CalendarLocalization } from './localization';

export const DaysWeek: React.FC<{ startingWeekDay: StartingWeekDay }> = ({ startingWeekDay }) => {
    const localize = useCalendarLocalization();
    const days = Object.keys(Day).map((day) => localize(`ds.calendar.day.${day}` as keyof CalendarLocalization));

    if (startingWeekDay === StartingWeekDay.Sunday) {
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
