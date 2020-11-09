/**
 * imports of components
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isValid, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Header } from './Header';
import { Body } from './Body';
/**
 * imports of interfaces, types and constants
 */
import { dateFunction, DisabledDates, eventDateFunction, Format, RangeDate, ViewMode } from './types';
/**
 * imports of styles
 */
import { Box, DayState } from './Calendar.styles';

export interface DateValue {
    day: number;
    month: number;
    year: number;
}

export interface DateResponse<T> {
    dateStart?: T;
    dateEnd?: T;
    date?: T;
}

export type CalendarProps = Props & HTMLAttributeProps;

interface Props {
    /**
     *  Выбранная дата
     */
    date?: DateValue | Date;
    format?: Format;
    onChange?: (
        event: React.FormEvent<HTMLInputElement> | Event | null,
        options: DateResponse<DateValue> | DateResponse<Date>
    ) => void;

    /**
     * Тип экрана календаря, отображаемого по умолчанию
     */
    defaultViewMode?: ViewMode;

    /**
     * Неактивные для выбора даты
     */
    disabledDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;

    /**
     * Выходные даты
     */
    weekendDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;

    /**
     * Даты-событие
     */
    eventDates?: Date[] | eventDateFunction;

    /**
     * Возможность выбрать период дат
     */
    ranged?: boolean;

    /**
     * Дата начала периода
     */
    dateStart?: DateValue | Date;

    /**
     * Дата окончания периода
     */
    dateEnd?: DateValue | Date;

    /**
     * Отображение кнопки "Сегодня"
     */
    todayButton?: boolean;

    /**
     * Нижняя граница выбора даты
     */
    minDate?: DateValue | Date;

    /**
     * Верхняя граница выбора даты
     */
    maxDate?: DateValue | Date;

    /**
     * Тип календаря - выбор дня или месяца
     */
    mode?: 'day' | 'month';

    /**
     * Метод вызывается при mode = 'month'
     */
    onChangeMonth?: (
        event: React.FormEvent<HTMLInputElement> | Event | null,
        options: { date: Date; value: string }
    ) => void;
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export const Calendar: React.FC<CalendarProps> & { Day: React.FC } = (props: CalendarProps) => {
    const {
        date,
        dateEnd,
        dateStart,
        defaultViewMode,
        disabledDates,
        weekendDates,
        eventDates,
        format: formatDate,
        maxDate,
        minDate,
        onChange,
        ranged,
        todayButton,
        mode,
        onChangeMonth,
    } = props;
    const today: Date = new Date();
    const [dateState, setDateState] = useState<Date | undefined>();
    const [dateStartState, setDateStartState] = useState<Date | undefined>();
    const [dateEndState, setDateEndState] = useState<Date | undefined>();
    const [displayedDate, setDisplayedDate] = useState<Date>(today);
    const boxEl = useRef<HTMLDivElement>(null);

    const initializedMode = useMemo(() => {
        if (mode === 'month') {
            return ViewMode.MONTH_LIST;
        }

        return defaultViewMode || ViewMode.MONTH;
    }, [mode, defaultViewMode]);
    const [viewMode, setViewMode] = useState<ViewMode>(initializedMode);

    const handleGoToMonth = useCallback(
        (year: number, month: number) => () => {
            const nextDate = new Date(year, month, 1);

            if (mode === 'month' && isValid(nextDate) && onChangeMonth) {
                onChangeMonth(null, { date: nextDate, value: format(nextDate, 'LLLL yyyy', { locale: ru }) });
            } else {
                setViewMode(ViewMode.MONTH);
            }

            setDisplayedDate(nextDate);
        },
        [viewMode, displayedDate, mode]
    );

    const handleChangeMonth = useCallback(
        (year: number, month: number) => () => {
            if (!onChangeMonth) {
                return;
            }

            const nextDate = new Date(year, month, 1);

            setDisplayedDate(nextDate);
            onChangeMonth(null, { date: nextDate, value: format(nextDate, 'LLLL yyyy', { locale: ru }) });
        },
        [viewMode, displayedDate]
    );

    const handleChangeViewMode = useCallback(
        (mode: ViewMode) => () => {
            setViewMode(mode);
        },
        [viewMode]
    );

    const parseOptionToDate = useCallback(
        (options: { date?: DateValue | Date; formatDate?: Format }): Date | undefined => {
            let nextDate: Date | undefined;

            switch (options.formatDate) {
                case Format.OBJECT: {
                    const dateValue: DateValue = options.date as DateValue;
                    if (
                        typeof options.date === 'object' &&
                        isValid(new Date(dateValue.year, dateValue.month - 1, dateValue.day))
                    ) {
                        nextDate = new Date(dateValue.year, dateValue.month - 1, dateValue.day);
                    }
                    break;
                }

                case Format.DATE:
                default: {
                    if (options.date instanceof Date) {
                        nextDate = options.date;
                    }
                    break;
                }
            }

            return nextDate;
        },
        [boxEl]
    );

    const parseDateToOption = useCallback(
        (options: { date: Date; formatDate?: Format }): DateValue | Date | null => {
            let formatedDate: DateValue | Date | null = null;

            switch (options.formatDate) {
                case 'object': {
                    formatedDate = {
                        year: options.date.getFullYear(),
                        month: options.date.getMonth() + 1,
                        day: options.date.getDate(),
                    };
                    break;
                }
                case 'date':
                default: {
                    formatedDate = options.date;
                    break;
                }
            }

            return formatedDate;
        },
        [boxEl]
    );

    const changeSingleDate = useCallback(
        (dateValue: Date) => {
            setDateState(dateValue);

            if (typeof onChange === 'function') {
                const nextDate = parseDateToOption({
                    formatDate,
                    date: dateValue,
                });

                onChange(null, { date: nextDate } as DateResponse<any>);
            }
        },
        [dateState]
    );

    const handleChangeDate = useCallback(
        (nextDate: Date | RangeDate<Date>) => {
            if (ranged) {
                const { start, end } = nextDate as RangeDate<Date>;
                setDateStartState(start);
                setDateEndState(end);

                if (typeof onChange === 'function' && start) {
                    const nextDateStart = parseDateToOption({
                        formatDate,
                        date: start,
                    });
                    const nextDateEnd =
                        end &&
                        parseDateToOption({
                            formatDate,
                            date: end,
                        });

                    onChange(null, {
                        dateStart: nextDateStart,
                        dateEnd: nextDateEnd,
                    } as DateResponse<any>);
                }
            } else {
                changeSingleDate(nextDate as Date);
            }
        },
        [dateState, dateStartState, dateEndState]
    );

    const handleGoToToday = useCallback(() => {
        setDisplayedDate(today);

        if (!ranged) {
            changeSingleDate(today);
        }
    }, [displayedDate]);

    const initDate = useCallback(() => {
        const nextDate = parseOptionToDate({
            date,
            formatDate,
        });
        const nextDateStart = parseOptionToDate({
            date: dateStart,
            formatDate,
        });
        const nextDateEnd = parseOptionToDate({
            date: dateEnd,
            formatDate,
        });
        const displayedDate = ranged ? nextDateStart : nextDate;

        setDateState(nextDate);
        setDisplayedDate(displayedDate || today);
        setDateStartState(nextDateStart);
        setDateEndState(nextDateEnd);
    }, [
        date,
        dateEnd,
        dateStart,
        defaultViewMode,
        disabledDates,
        weekendDates,
        eventDates,
        formatDate,
        maxDate,
        minDate,
        onChange,
        ranged,
        todayButton,
    ]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    return (
        <Box ref={boxEl}>
            <Header
                viewMode={viewMode}
                displayedDate={displayedDate}
                onChangeViewMode={handleChangeViewMode}
                onChangeDisplayedDate={setDisplayedDate}
                hasNavigation={mode !== 'month'}
            />
            <Body
                viewMode={viewMode}
                displayedDate={displayedDate}
                date={dateState}
                dateStart={dateStartState}
                dateEnd={dateEndState}
                maxDate={maxDate && parseOptionToDate({ formatDate, date: maxDate })}
                minDate={minDate && parseOptionToDate({ formatDate, date: minDate })}
                ranged={ranged}
                todayButton={todayButton}
                disabledDates={disabledDates}
                weekendDates={weekendDates}
                eventDates={eventDates}
                onGoToMonth={handleGoToMonth}
                onChangeDate={handleChangeDate}
                onGoToToday={handleGoToToday}
                hasNavigation={mode !== 'month'}
                onChangeMonth={handleChangeMonth}
            />
        </Box>
    );
};

Calendar.displayName = 'Calendar';
Calendar.defaultProps = {
    defaultViewMode: ViewMode.MONTH,
    todayButton: true,
    ranged: false,
};
Calendar.Day = DayState;

export default Calendar;
