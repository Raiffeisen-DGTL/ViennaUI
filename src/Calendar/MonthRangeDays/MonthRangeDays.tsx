/**
 * imports of components
 */
import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { addDays, isAfter, isBefore, isEqual, isSameDay, lastDayOfMonth, subDays, isSameMonth } from 'date-fns';
import { DateItem, DayType, MonthProps, RangeDate } from '../types';
import { MONDAY_INDEX, SUNDAY_INDEX, WEEK_LENGTH } from '../constants';
import { Day, DayState, RangeSelectionStart, RangeSelectionEnd } from '../Calendar.styles';
import { checkIsDisabled, checkIsWeekend, getLocalDay } from '../Utils';
import { DaysWeek } from '../DaysWeek';

export const MonthRangeDays: React.FC<MonthProps<RangeDate<Date>>> = (props) => {
    const {
        displayedDate,
        weekendDates,
        onChangeDate,
        minDate,
        maxDate,
        eventDates,
        disabledDates,
        date,
        startingWeekDay,
    } = props;
    const [dateState, setDateState] = useState<RangeDate<Date> | undefined>();
    const [days, setDays] = useState<DateItem[]>([]);
    const [hoveredDay, setHoveredDay] = useState<DateItem>();
    const dayEl = useRef<HTMLDivElement>(null);
    const today: Date = new Date();

    const defineActiveDate = (options: { date?: RangeDate<Date>; day: Date }) => {
        const displayedMonth = displayedDate.getMonth();

        return (
            options.date &&
            options.date.start &&
            (isEqual(options.day, options.date.start) ||
                (options.date.end && isEqual(options.day, options.date.end))) &&
            displayedMonth === options.day.getMonth()
        );
    };

    const defineRangedDate = (options: { date?: RangeDate<Date>; day: DateItem }) => {
        const dayBetweenStartAndEnd =
            options.date &&
            options.date.end &&
            options.date.start &&
            isAfter(options.day.value, options.date.start) &&
            isBefore(options.day.value, options.date.end) &&
            isSameMonth(options.day.value, displayedDate);

        const dayBetweenStartAndHovered =
            hoveredDay &&
            isAfter(hoveredDay.value, options.day.value) &&
            options.date &&
            options.date.start &&
            isAfter(options.day.value, options.date.start) &&
            isSameMonth(displayedDate, options.day.value);

        return dayBetweenStartAndEnd ?? dayBetweenStartAndHovered;
    };

    const handleChangeDate = useCallback(
        (dateValue: Date) => () => {
            let nextDate = {};

            if (
                !dateState ||
                (dateState && !dateState.start) ||
                (dateState?.start && dateState.end) ||
                (dateState?.start && isAfter(dateState.start, dateValue))
            ) {
                nextDate = { start: dateValue };
            }
            if (
                dateState?.start &&
                !dateState.end &&
                (isAfter(dateValue, dateState.start) || isSameDay(dateValue, dateState.start))
            ) {
                nextDate = { ...dateState, end: dateValue };
            }

            setDateState(nextDate);

            if (typeof onChangeDate === 'function') {
                onChangeDate(nextDate);
            }
        },
        [dateState]
    );

    const handleMouseOverOnDay = useCallback(
        (day: DateItem) => () => {
            if (dateState?.start && !dateState.end && isAfter(day.value, dateState.start)) {
                setHoveredDay(day);
            } else {
                setHoveredDay(undefined);
            }
        },
        [dateState]
    );

    const handleMouseOutOnDay = useCallback(() => {
        setHoveredDay(undefined);
    }, []);

    const monthDays = useMemo(() => {
        return days.map((day: DateItem, index: number) => {
            const type = day.type;
            const component = day.component;
            const isRanged = defineRangedDate({ date, day });
            const isActive = type.includes('active') || type.includes('activeDisabled');
            if (isRanged) {
                type.push('range');
            }

            const canChange = !type.some((value) => value === 'disabled' || value === 'not-active');
            const rangeSelection =
                (isActive &&
                    dateState &&
                    dateState.start &&
                    isSameDay(day.value, dateState.start) &&
                    (dateState.end || hoveredDay) && <RangeSelectionStart />) ||
                (isActive && dateState && dateState.end && isSameDay(day.value, dateState.end) && (
                    <RangeSelectionEnd />
                ));

            return (
                <Day
                    key={index}
                    $type={type}
                    ref={dayEl}
                    onClick={canChange ? handleChangeDate(day.value) : undefined}
                    onMouseOver={handleMouseOverOnDay(day)}
                    onMouseOut={handleMouseOutOnDay}>
                    {rangeSelection}
                    {component ?? <DayState>{day.label}</DayState>}
                </Day>
            );
        });
    }, [days, dateState, displayedDate]);

    const build = useCallback(
        (inputDate: Date = dateState?.start ?? today) => {
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

                const isActive = defineActiveDate({ date, day: value });
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
        [displayedDate, onChangeDate, minDate, maxDate, eventDates, disabledDates, date, hoveredDay, startingWeekDay]
    );

    const initDate = useCallback(() => {
        setDateState(date);
        build(displayedDate || date?.start);
    }, [build, date, displayedDate]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    return (
        <>
            <DaysWeek startingWeekDay={startingWeekDay} />
            {monthDays}
        </>
    );
};
