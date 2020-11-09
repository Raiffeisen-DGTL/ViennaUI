/**
 * imports of components
 */
import React, { useMemo } from 'react';
import { dateFunction, DisabledDates, eventDateFunction, RangeDate, ViewMode } from '../types';
import { MONTH } from '../constants';
import { MonthRangeDays } from '../MonthRangeDays';
import { MonthSingleDays } from '../MonthSingleDays';
import { Button } from '../../Button';

/**
 * imports of styles
 */
import { Box, CalendarCell, Footer } from './Body.style';

interface Props {
    viewMode: ViewMode;
    displayedDate: Date;
    date?: Date;
    dateStart?: Date;
    dateEnd?: Date;
    maxDate?: Date;
    minDate?: Date;
    ranged?: boolean;
    todayButton?: boolean;
    disabledDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
    weekendDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
    eventDates?: Date[] | eventDateFunction;
    onGoToMonth: (year: number, month: number) => () => void;
    onChangeMonth: (year: number, month: number) => () => void;
    onChangeDate: (nextDate: Date | RangeDate<Date>) => void;
    onGoToToday: () => void;
    hasNavigation: boolean;
}

export const Body: React.FC<Props> = (props: Props): JSX.Element => {
    const {
        viewMode,
        displayedDate,
        date,
        dateStart,
        dateEnd,
        maxDate,
        minDate,
        ranged,
        disabledDates,
        weekendDates,
        eventDates,
        todayButton,
        onGoToMonth,
        onChangeDate,
        onGoToToday,
        onChangeMonth,
        hasNavigation,
    } = props;

    const content = useMemo(() => {
        const displayedYear = displayedDate.getFullYear();
        const displayedMonth = displayedDate.getMonth();

        switch (viewMode) {
            case ViewMode.YEAR_LIST: {
                const startYear = Math.floor(displayedYear / 12) * 12;

                const yearList: JSX.Element[] = [];
                for (let year = startYear; year < startYear + 12; year++) {
                    const isActive = date && date.getFullYear() === year;

                    yearList.push(
                        <CalendarCell key={year} isActive={isActive} onClick={onGoToMonth(year, displayedMonth)}>
                            {year}
                        </CalendarCell>
                    );
                }

                return (
                    <div>
                        <Box>{yearList}</Box>
                    </div>
                );
            }
            case ViewMode.MONTH_LIST: {
                const months = MONTH.map((month: string, index: number) => {
                    const isActive = date && index === date.getMonth();

                    return (
                        <CalendarCell
                            key={month}
                            isActive={isActive}
                            onClick={
                                hasNavigation ? onGoToMonth(displayedYear, index) : onChangeMonth(displayedYear, index)
                            }>
                            {month}
                        </CalendarCell>
                    );
                });

                return (
                    <div>
                        <Box>{months}</Box>
                    </div>
                );
            }
            case ViewMode.MONTH:
            default: {
                const month = ranged ? (
                    <MonthRangeDays
                        date={{ start: dateStart, end: dateEnd }}
                        disabledDates={disabledDates}
                        weekendDates={weekendDates}
                        eventDates={eventDates}
                        onChangeDate={onChangeDate}
                        displayedDate={displayedDate}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                ) : (
                    <MonthSingleDays
                        date={date}
                        disabledDates={disabledDates}
                        weekendDates={weekendDates}
                        eventDates={eventDates}
                        onChangeDate={onChangeDate}
                        displayedDate={displayedDate}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                );

                return (
                    <div>
                        <Box>{month}</Box>
                        {todayButton && (
                            <Footer>
                                <Button type='button' design='ghost' onClick={onGoToToday}>
                                    <b>Сегодня</b>
                                </Button>
                            </Footer>
                        )}
                    </div>
                );
            }
        }
    }, [viewMode, displayedDate, date, dateStart, dateEnd, minDate, maxDate, disabledDates]);

    return <>{content}</>;
};
