/**
 * imports of components
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { addDays, isEqual, isSameDay, lastDayOfMonth, subDays } from 'date-fns';
import { DateItem, DayType, MonthProps } from '../types';
import { DAYS_OF_WEEK, MONDAY_INDEX, SUNDAY_INDEX, WEEK_LENGTH } from '../constants';
import { Day, DayState, WeekDay } from '../Calendar.styles';
import { checkIsWeekend, getLocalDay } from '../Utils';
import { checkIsDisabled } from '../Utils/checkIsDisabled';

export const MonthSingleDays: React.FC<MonthProps<Date>> = (props: MonthProps<Date>): JSX.Element => {
    const { date, disabledDates, weekendDates, displayedDate, eventDates, maxDate, minDate, onChangeDate } = props;
    const [dateState, setDateState] = useState<Date | undefined>();
    const [days, setDays] = useState<DateItem[]>([]);
    const monthEl = useRef<HTMLDivElement>(null);
    const today: Date = new Date();

    const handleChangeDate = useCallback(
        (nextDate: Date) => () => {
            setDateState(nextDate);

            if (typeof onChangeDate === 'function') {
                onChangeDate(nextDate);
            }
        },
        [dateState]
    );

    const build = useCallback(
        (inputDate: Date = dateState || today) => {
            const monthDays = lastDayOfMonth(inputDate).getDate();

            const firstDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
            const firstDayOfWeek = getLocalDay(firstDay);

            const lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), monthDays);
            const lastDayOfWeek = getLocalDay(lastDay);

            const days: DateItem[] = [];

            if (firstDayOfWeek !== MONDAY_INDEX) {
                for (let i = 1; i < firstDayOfWeek; i++) {
                    const prevDate = subDays(firstDay, firstDayOfWeek - i);
                    days.push({
                        value: prevDate,
                        type: [DayType.NOT_ACTIVE],
                    });
                }
            }

            for (let i = 1; i <= monthDays; i++) {
                let type: DayType[] = [];
                let component;
                const value = new Date(inputDate.getFullYear(), inputDate.getMonth(), i);

                if (isSameDay(value, today)) {
                    type.push(DayType.TODAY);
                }

                if (Array.isArray(eventDates)) {
                    const hasEvent = eventDates.find((date) => isEqual(value, date));
                    if (hasEvent) {
                        type.push(DayType.EVENT);
                    }
                } else if (typeof eventDates === 'function') {
                    const eventComponent = eventDates(value);
                    if (eventComponent) {
                        type.push(DayType.EVENT);
                        component = eventComponent;
                    }
                }

                if (weekendDates && checkIsWeekend({ dates: weekendDates, date: value })) {
                    type = [...type, DayType.WEEKEND];
                }

                if (checkIsDisabled({ dates: disabledDates, maxDate, minDate, date: value })) {
                    type = [DayType.DISABLED];
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
                        type: [DayType.NOT_ACTIVE],
                    });
                }
            }

            setDays(days);
        },
        [date, disabledDates, displayedDate, eventDates, maxDate, minDate, onChangeDate]
    );

    const initDate = useCallback(() => {
        setDateState(date);
        build(displayedDate || date || today);
    }, [build]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    const daysWeek = useMemo(() => {
        return DAYS_OF_WEEK.map((day: string, index: number) => <WeekDay key={index}>{day}</WeekDay>);
    }, [monthEl]);

    const monthDays = useMemo(() => {
        const displayedMonth = displayedDate.getMonth();
        return days.map((day: DateItem, index: number) => {
            const type = day.type;
            const component = day.component;
            const isActive = dateState && isSameDay(day.value, dateState) && displayedMonth === day.value.getMonth();
            if (isActive) {
                type.push(DayType.ACTIVE);
            }
            const canChange = !type.some((value: DayType) => value === DayType.DISABLED);

            return (
                <Day
                    ref={monthEl}
                    key={index}
                    type={type}
                    onClick={canChange ? handleChangeDate(day.value) : undefined}>
                    {component || <DayState>{day.label}</DayState>}
                </Day>
            );
        });
    }, [days, dateState, displayedDate]);

    return (
        <>
            {daysWeek}
            {monthDays}
        </>
    );
};
