import { addDays, isEqual, isSameDay, lastDayOfMonth, subDays } from 'date-fns';
import { DateItem, Dates, DayType, EventDateFunction, StartingWeekDay } from '../types';
import { MONDAY_INDEX, SUNDAY_INDEX, WEEK_LENGTH } from '../constants';
import { checkIsDisabled, checkIsWeekend, getLocalDay } from '../Utils';

interface BuildParams {
    inputDate: Date;
    startingWeekDay: StartingWeekDay;
    today: Date;
    eventDates?: Date[] | EventDateFunction;
    weekendDates?: Dates;
    disabledDates?: Dates;
    maxDate?: Date;
    minDate?: Date;
    checkIsActiveDay?: (value: Date) => boolean | undefined;
}

export const build = ({
    inputDate,
    startingWeekDay,
    today,
    eventDates,
    weekendDates,
    disabledDates,
    minDate,
    maxDate,
    checkIsActiveDay,
}: BuildParams): DateItem[] => {
    const monthDays = lastDayOfMonth(inputDate).getDate();

    const firstDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    const firstDayOfWeek = getLocalDay(firstDay, startingWeekDay);

    const lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), monthDays);
    const lastDayOfWeek = getLocalDay(lastDay, startingWeekDay);

    const days: DateItem[] = [];

    if (firstDayOfWeek !== MONDAY_INDEX) {
        for (let i = 1; i < firstDayOfWeek; i++) {
            const prevDate = subDays(firstDay, firstDayOfWeek - i);
            days.push({
                value: prevDate,
                type: ['not-active'],
            });
        }
    }

    for (let i = 1; i <= monthDays; i++) {
        let type: DayType[] = [];
        let component: React.ReactNode;
        const value = new Date(inputDate.getFullYear(), inputDate.getMonth(), i);

        if (isSameDay(value, today)) {
            type.push('today');
        }

        if (Array.isArray(eventDates)) {
            const hasEvent = eventDates.find((date) => isEqual(value, date));
            if (hasEvent) {
                type.push('event');
            }
        } else if (typeof eventDates === 'function') {
            const eventComponent = eventDates(value);
            if (eventComponent) {
                type.push('event');
                component = eventComponent;
            }
        }

        if (weekendDates && checkIsWeekend({ dates: weekendDates, date: value, startingWeekDay })) {
            type = [...type, 'weekend'];
        }

        const isActive = checkIsActiveDay?.(value);

        const isDisabled = checkIsDisabled({
            dates: disabledDates,
            maxDate,
            minDate,
            date: value,
            startingWeekDay,
        });
        if (isDisabled && isActive) {
            type = ['activeDisabled'];
        } else if (isDisabled) {
            type = ['disabled'];
        } else if (isActive) {
            type = ['active'];
        }

        days.push({
            type,
            value,
            component,
            label: i,
        });
    }

    if (lastDayOfWeek !== SUNDAY_INDEX) {
        for (let i = 1; i < WEEK_LENGTH - lastDayOfWeek; i++) {
            const nextDate = addDays(lastDay, i);
            days.push({
                value: nextDate,
                type: ['not-active'],
            });
        }
    }

    return days;
};
