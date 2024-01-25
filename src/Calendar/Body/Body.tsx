/**
 * imports of components
 */
import React, { useMemo } from 'react';
import { Dates, EventDateFunction, RangeDate, StartingWeekDay, ViewMode } from '../types';
import { MonthRangeDays } from '../MonthRangeDays';
import { MonthSingleDays } from '../MonthSingleDays';
import { Button } from '../../Button';
import { useCalendarLocalization } from '../Context';
import { CalendarLocalization } from '../localization';
/**
 * imports of styles
 */
import { Box, CalendarCell, Footer } from './Body.style';

const MONTHS = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
] as const;

interface Props {
    viewMode: ViewMode;
    displayedDate: Date;
    date?: Date | Date[];
    dateStart?: Date;
    dateEnd?: Date;
    maxDate?: Date;
    minDate?: Date;
    ranged?: boolean;
    todayButton?: boolean;
    disabledDates?: Dates;
    weekendDates?: Dates;
    eventDates?: Date[] | EventDateFunction;
    onGoToMonth: (year: number, month: number) => () => void;
    onChangeMonth: (year: number, month: number) => () => void;
    onChangeDate: (nextDate: Date | RangeDate<Date> | Date[]) => void;
    onGoToToday: () => void;
    hasNavigation: boolean;
    startingWeekDay: StartingWeekDay;
    allowMultiple: boolean;
}

export const Body: React.FC<Props> = (props) => {
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
        startingWeekDay,
        allowMultiple,
    } = props;

    const localize = useCalendarLocalization();

    const content = useMemo(() => {
        const displayedYear = displayedDate?.getFullYear();
        const displayedMonth = displayedDate?.getMonth();

        switch (viewMode) {
            case 'year_list': {
                const startYear = Math.floor(displayedYear / 12) * 12;
                const start = startYear <= 0 ? 0 : startYear;
                const end = startYear + 12 >= 3000 ? 3001 : startYear + 12;
                const yearList: JSX.Element[] = [];
                for (let year = start; year < end; year++) {
                    const isActive = date && !allowMultiple && (date as Date).getFullYear() === year;

                    yearList.push(
                        <CalendarCell key={year} $isActive={isActive} onClick={onGoToMonth(year, displayedMonth)}>
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
            case 'month_list': {
                const months = MONTHS.map((month, index: number) => {
                    const isActive = date && !allowMultiple && index === (date as Date).getMonth();
                    const localizedMonth = localize(`ds.calendar.month.${month}` as keyof CalendarLocalization);
                    return (
                        <CalendarCell
                            key={localizedMonth}
                            $isActive={isActive}
                            onClick={
                                hasNavigation ? onGoToMonth(displayedYear, index) : onChangeMonth(displayedYear, index)
                            }>
                            {localizedMonth}
                        </CalendarCell>
                    );
                });

                return (
                    <div>
                        <Box>{months}</Box>
                    </div>
                );
            }
            case 'month':
            default: {
                const month = ranged ? (
                    <MonthRangeDays
                        date={{ start: dateStart, end: dateEnd }}
                        disabledDates={disabledDates}
                        weekendDates={weekendDates}
                        eventDates={eventDates}
                        displayedDate={displayedDate}
                        maxDate={maxDate}
                        minDate={minDate}
                        startingWeekDay={startingWeekDay}
                        onChangeDate={onChangeDate}
                    />
                ) : (
                    <MonthSingleDays
                        date={date}
                        disabledDates={disabledDates}
                        weekendDates={weekendDates}
                        eventDates={eventDates}
                        displayedDate={displayedDate}
                        maxDate={maxDate}
                        minDate={minDate}
                        startingWeekDay={startingWeekDay}
                        allowMultiple={allowMultiple}
                        onChangeDate={onChangeDate}
                    />
                );

                return (
                    <div>
                        <Box>{month}</Box>
                        {todayButton && (
                            <Footer>
                                <Button type='button' design='ghost' onClick={onGoToToday}>
                                    <b>{localize('ds.calendar.body.today')}</b>
                                </Button>
                            </Footer>
                        )}
                    </div>
                );
            }
        }
    }, [viewMode, displayedDate, date, dateStart, dateEnd, minDate, maxDate, disabledDates, allowMultiple]);

    return <>{content}</>;
};
