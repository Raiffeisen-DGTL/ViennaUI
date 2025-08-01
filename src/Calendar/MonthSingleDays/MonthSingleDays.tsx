import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isSameDay } from 'date-fns';
import { DateItem, MonthProps } from '../types';
import { Day, DayState } from '../Calendar.styles';
import { DaysWeek } from '../DaysWeek';
import { build } from '../Utils/build';

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
        setUpFocusProps,
        resetSavedNodes,
        testId,
    } = props;
    const initialDateState = allowMultiple ? (date ?? []) : (date ?? new Date());

    const [dateState, setDateState] = useState<Date | Date[]>(initialDateState);
    const isInitialMount = useRef(true);
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

    const today = useMemo(() => new Date(), []);

    const [days, setDays] = useState<DateItem[]>(
        build({
            inputDate: displayedDate || today,
            startingWeekDay,
            today,
            eventDates,
            weekendDates,
            disabledDates,
            minDate,
            maxDate,
            checkIsActiveDay,
        })
    );

    const monthEl = useRef<HTMLButtonElement | null>(null);

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
        [onChangeDate, dateState, allowMultiple]
    );

    const monthDays = useMemo(() => {
        resetSavedNodes();
        let emptyCells = 0;

        return days.map((day: DateItem, index: number) => {
            const type = day.type;
            const component = day.component;
            const canChange = !type.some((value) => value === 'disabled' || value === 'not-active');
            emptyCells += canChange ? 0 : 1;

            const { forwardedRef, onKeyDown: handleOnKeyDown } = setUpFocusProps(index - emptyCells);

            return (
                <Day
                    key={index}
                    ref={(node: HTMLButtonElement | null) => {
                        monthEl.current = node;

                        if (canChange) {
                            forwardedRef(node);
                        }
                    }}
                    $type={type}
                    type='button'
                    data-type={type}
                    tabIndex={canChange ? 0 : -1}
                    data-testid={testId?.btnCalendarCell?.(day.value)}
                    onClick={canChange ? handleChangeDate(day.value) : undefined}
                    onKeyDown={canChange ? handleOnKeyDown : undefined}>
                    {component ?? <DayState>{day.label}</DayState>}
                </Day>
            );
        });
    }, [handleChangeDate, days, dateState, displayedDate]);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            setDateState(initialDateState);
            setDays(
                build({
                    inputDate: displayedDate || today,
                    startingWeekDay,
                    today,
                    eventDates,
                    weekendDates,
                    disabledDates,
                    minDate,
                    maxDate,
                    checkIsActiveDay,
                })
            );
        } else {
            // Only update days if displayedDate changes
            if (displayedDate) {
                setDays(
                    build({
                        inputDate: displayedDate,
                        startingWeekDay,
                        today,
                        eventDates,
                        weekendDates,
                        disabledDates,
                        minDate,
                        maxDate,
                        checkIsActiveDay,
                    })
                );
            }
        }
    }, [
        displayedDate, // Only re-run the effect if displayedDate changes
        startingWeekDay,
        today,
        eventDates,
        weekendDates,
        disabledDates,
        minDate,
        maxDate,
        checkIsActiveDay,
        allowMultiple,
    ]);

    return (
        <>
            <DaysWeek startingWeekDay={startingWeekDay} />
            {monthDays}
        </>
    );
};
