/**
 * imports of components
 */
import React, { useMemo } from 'react';
import { useGridFocus, useFooterFocus } from '../hooks';
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

export interface BodyTestId {
    btnToday?: string;
    btnCalendarCell?: (date: Date) => string;
}

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
    testId?: BodyTestId;
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
        testId,
    } = props;

    const localize = useCalendarLocalization();

    const { setUpFocusProps, resetSavedNodes } = useGridFocus(viewMode);
    const { setUpFocusProps: setUpFocusPropsFooter } = useFooterFocus(viewMode);

    const content = useMemo(() => {
        resetSavedNodes();

        const displayedYear = displayedDate?.getFullYear();
        const displayedMonth = displayedDate?.getMonth();
        const testIdDate = new Date(displayedDate);

        switch (viewMode) {
            case 'year_list': {
                const startYear = displayedYear - (displayedYear % 12);
                const start = Math.max(startYear, 1900);
                const end = Math.min(start + 11, 3000);
                const yearList: JSX.Element[] = [];
                for (let year = start; year <= end; year++) {
                    const isActive = date && !allowMultiple && (date as Date).getFullYear() === year;
                    const index = yearList.length;
                    const { forwardedRef, onKeyDown } = setUpFocusProps(index);
                    testIdDate.setFullYear(year);
                    yearList.push(
                        <CalendarCell
                            key={year}
                            type='button'
                            $isActive={isActive}
                            ref={forwardedRef}
                            onKeyDown={onKeyDown}
                            data-testid={testId?.btnCalendarCell?.(testIdDate)}
                            onClick={onGoToMonth(year, displayedMonth)}>
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
                    testIdDate.setMonth(index);

                    const { forwardedRef, onKeyDown } = setUpFocusProps(index);

                    return (
                        <CalendarCell
                            key={localizedMonth}
                            type='button'
                            $isActive={isActive}
                            ref={forwardedRef}
                            data-testid={testId?.btnCalendarCell?.(testIdDate)}
                            onKeyDown={onKeyDown}
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
                        setUpFocusProps={setUpFocusProps}
                        resetSavedNodes={resetSavedNodes}
                        testId={testId}
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
                        setUpFocusProps={setUpFocusProps}
                        resetSavedNodes={resetSavedNodes}
                        testId={testId}
                        onChangeDate={onChangeDate}
                    />
                );

                return (
                    <div>
                        <Box>{month}</Box>
                        {todayButton && (
                            <Footer>
                                <Button
                                    type='button'
                                    design='ghost'
                                    data-testid={testId?.btnToday}
                                    onClick={onGoToToday}
                                    {...setUpFocusPropsFooter('todayButton')}>
                                    <b>{localize('ds.calendar.body.today')}</b>
                                </Button>
                            </Footer>
                        )}
                    </div>
                );
            }
        }
    }, [
        onChangeDate,
        onChangeMonth,
        onGoToMonth,
        onGoToToday,
        viewMode,
        displayedDate,
        date,
        dateStart,
        dateEnd,
        minDate,
        maxDate,
        disabledDates,
        allowMultiple,
    ]);

    return <>{content}</>;
};
