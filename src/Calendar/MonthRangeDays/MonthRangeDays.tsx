import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { isAfter, isBefore, isEqual, isSameDay, isSameMonth } from 'date-fns';
import { DateItem, MonthProps, RangeDate } from '../types';
import { Day, DayState, RangeSelectionStart, RangeSelectionEnd } from '../Calendar.styles';
import { DaysWeek } from '../DaysWeek';
import { build } from '../Utils/build';

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
        setUpFocusProps,
        resetSavedNodes,
        testId,
    } = props;

    const checkIsActiveDay = useCallback(
        (value: Date) => {
            if (!date || !date.start) {
                return false;
            }
            return isEqual(value, date.start) || (date.end && isEqual(value, date.end));
        },
        [date]
    );

    const [dateState, setDateState] = useState<RangeDate<Date>>(date || { start: undefined, end: undefined });
    const [days, setDays] = useState<DateItem[]>(
        build({
            inputDate: date?.start ? new Date(date.start) : displayedDate,
            startingWeekDay,
            today: new Date(),
            eventDates,
            weekendDates,
            disabledDates,
            minDate,
            maxDate,
            checkIsActiveDay,
        })
    );
    const [hoveredDay, setHoveredDay] = useState<DateItem>();
    const dayEl = useRef<HTMLButtonElement | null>(null);

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
            let nextDate: RangeDate<Date>;

            if (
                !dateState ||
                (dateState && !dateState.start) ||
                (dateState?.start && dateState.end) ||
                (dateState?.start && isAfter(dateState.start, dateValue))
            ) {
                nextDate = { start: dateValue, end: undefined };
            } else if (
                dateState?.start &&
                !dateState.end &&
                (isAfter(dateValue, dateState.start) || isSameDay(dateValue, dateState.start))
            ) {
                nextDate = { ...dateState, end: dateValue };
            } else {
                nextDate = { start: dateValue, end: undefined };
            }

            setDateState(nextDate);

            if (typeof onChangeDate === 'function') {
                onChangeDate(nextDate);
            }
        },
        [onChangeDate, dateState]
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
    const handleOnBlur = useCallback(() => {
        setHoveredDay(undefined);
    }, []);

    const monthDays = useMemo(() => {
        resetSavedNodes();
        let emptyCells = 0;

        return days.map((day: DateItem, index: number) => {
            const type = day.type;
            const component = day.component;
            const isRanged = defineRangedDate({ date: dateState, day });
            const isActive = type.includes('active') || type.includes('activeDisabled');
            if (isRanged) {
                type.push('range');
            }

            const canChange = !type.some((value) => value === 'disabled' || value === 'not-active');
            emptyCells += canChange ? 0 : 1;
            const rangeSelection =
                (isActive &&
                    dateState &&
                    dateState.start &&
                    isSameDay(day.value, dateState.start) &&
                    (dateState.end || hoveredDay) && <RangeSelectionStart />) ||
                (isActive && dateState && dateState.end && isSameDay(day.value, dateState.end) && (
                    <RangeSelectionEnd />
                ));

            const { forwardedRef, onKeyDown: handleOnKeyDown } = setUpFocusProps(index - emptyCells);

            return (
                <Day
                    key={index}
                    $type={type}
                    type='button'
                    ref={(node: HTMLButtonElement | null) => {
                        dayEl.current = node;
                        if (canChange) {
                            forwardedRef(node);
                        }
                    }}
                    tabIndex={canChange ? 0 : -1}
                    data-testid={testId?.btnCalendarCell?.(day.value)}
                    onKeyDown={canChange ? handleOnKeyDown : undefined}
                    onClick={canChange ? handleChangeDate(day.value) : undefined}
                    onMouseOver={handleMouseOverOnDay(day)}
                    onFocus={handleMouseOverOnDay(day)}
                    onBlur={handleOnBlur}>
                    {rangeSelection}
                    {component ?? <DayState>{day.label}</DayState>}
                </Day>
            );
        });
    }, [handleChangeDate, days, dateState, displayedDate, hoveredDay, testId]);

    useEffect(() => {
        setDateState(date || { start: undefined, end: undefined });
        setDays(
            build({
                inputDate: date?.start ? new Date(date.start) : displayedDate,
                startingWeekDay,
                today: new Date(),
                eventDates,
                weekendDates,
                disabledDates,
                minDate,
                maxDate,
                checkIsActiveDay,
            })
        );
    }, [
        build,
        date,
        displayedDate,
        startingWeekDay,
        eventDates,
        weekendDates,
        disabledDates,
        maxDate,
        minDate,
        checkIsActiveDay,
    ]);

    return (
        <>
            <DaysWeek startingWeekDay={startingWeekDay} />
            {monthDays}
        </>
    );
};
