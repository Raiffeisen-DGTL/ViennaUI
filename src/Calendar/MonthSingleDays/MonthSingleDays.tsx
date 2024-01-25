/**
 * imports of components
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { addDays, isEqual, isSameDay, lastDayOfMonth, subDays } from 'date-fns';
import { DateItem, DayType, MonthProps } from '../types';
import { MONDAY_INDEX, SUNDAY_INDEX, WEEK_LENGTH } from '../constants';
import { Day, DayState } from '../Calendar.styles';
import { checkIsWeekend, getLocalDay } from '../Utils';
import { checkIsDisabled } from '../Utils/checkIsDisabled';
import { DaysWeek } from '../DaysWeek';

interface MonthSingleProps<T> extends MonthProps<T> {
    allowMultiple?: boolean;
}

export const MonthSingleDays: React.FC<MonthSingleProps<Date | Date[]>> = (props) => {
    const {
        date,
        disabledDates,
        weekendDates,
        displayedDate,
        eventDates,
        maxDate,
        minDate,
        onChangeDate,
        startingWeekDay,
        allowMultiple,
    } = props;
    const [dateState, setDateState] = useState<Date | Date[] | undefined>();
    const [days, setDays] = useState<DateItem[]>([]);
    const monthEl = useRef<HTMLDivElement>(null);
    const today: Date = new Date();

    const handleChangeDate = useCallback(
        (nextDate: Date) => () => {
            let nextDateState: Date | Date[];
            if (allowMultiple) {
                const index = (dateState as Date[]).findIndex((day) => isSameDay(day, nextDate));
                if (index > -1) {
                    nextDateState = [...(dateState as Date[])];
                    nextDateState.splice(index, 1);
                } else {
                    nextDateState = [...(dateState as Date[]), nextDate];
                }
            } else {
                nextDateState = nextDate;
            }

            setDateState(nextDateState);

            if (typeof onChangeDate === 'function') {
                onChangeDate(nextDateState);
            }
        },
        [dateState, allowMultiple]
    );

    const checkIsActiveDay = useCallback(
        (value: Date) => {
            if (!dateState) {
                return false;
            }

            if (allowMultiple) {
                return (dateState as Date[]).some((day) => isSameDay(day, value));
            }

            return isSameDay(value, dateState as Date);
        },
        [dateState, allowMultiple]
    );

    const build = useCallback(
        (inputDate: Date = today) => {
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
                let component;
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

                const isActive = checkIsActiveDay(value);
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

            setDays(days);
        },
        [
            date,
            disabledDates,
            displayedDate,
            eventDates,
            maxDate,
            minDate,
            onChangeDate,
            dateState,
            startingWeekDay,
            allowMultiple,
        ]
    );

    const initDate = useCallback(() => {
        setDateState(date);
        build(displayedDate);
    }, [build, date, displayedDate]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    const monthDays = useMemo(() => {
        return days.map((day: DateItem, index: number) => {
            const type = day.type;
            const component = day.component;
            const canChange = !type.some((value) => value === 'disabled' || value === 'not-active');

            return (
                <Day
                    key={index}
                    ref={monthEl}
                    $type={type}
                    onClick={canChange ? handleChangeDate(day.value) : undefined}>
                    {component ?? <DayState>{day.label}</DayState>}
                </Day>
            );
        });
    }, [days, dateState, displayedDate]);

    return (
        <>
            <DaysWeek startingWeekDay={startingWeekDay} />
            {monthDays}
        </>
    );
};
