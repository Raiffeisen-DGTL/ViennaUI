/**
 * imports of components
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { format, isValid, Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useLocalization } from '../Localization';
import { Header } from './Header';
import { Body } from './Body';
import { CalendarProvider } from './Context';
import { CalendarLocalizationProps, defaultCalendarLocalization } from './localization';
/**
 * imports of interfaces, types and constants
 */
import { Dates, EventDateFunction, RangeDate, StartingWeekDay, ViewMode } from './types';
/**
 * imports of styles
 */
import { Box, DayState } from './Calendar.styles';
import { checkIsDisabled } from './Utils';

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

type Format = 'date' | 'object';

export interface PropsCalendar extends CalendarLocalizationProps {
    /**
     *  Выбранная дата
     */
    date?: DateValue | Date | Date[];
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
    disabledDates?: Dates;

    /**
     * Выходные даты
     */
    weekendDates?: Dates;

    /**
     * Даты-событие
     */
    eventDates?: Date[] | EventDateFunction;

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
        options: { date: Date | Date[]; value: string }
    ) => void;

    /**
     * Дни недели отображаются с понедельника (1) или с воскресенья (0)
     */
    startingWeekDay?: StartingWeekDay;

    /**
     * Возможность выбрать несколько дат
     */
    allowMultiple?: boolean;

    /**
     * Локаль календаря
     */
    locale?: Locale;

    /**
     * Изменение отображаемого месяца/года
     */
    onChangeDisplayedDate?: (date: Date) => void;

    /**
     * Дефолтное значение отображаемой даты
     */
    defaultDisplayedDate?: Date;
}

export const Calendar: React.FC<PropsCalendar> & { Day: typeof DayState } = ({
    date,
    dateEnd,
    dateStart,
    defaultViewMode = 'month',
    disabledDates,
    weekendDates,
    eventDates,
    format: formatDate,
    maxDate,
    minDate,
    onChange,
    ranged = false,
    todayButton = true,
    mode,
    onChangeMonth,
    startingWeekDay = 'monday',
    allowMultiple = false,
    locale,
    onChangeDisplayedDate,
    defaultDisplayedDate,
    localization,
}) => {
    const firstUpdate = useRef(true);
    const today: Date = new Date();
    const [dateState, setDateState] = useState<Date | Date[] | undefined>();
    const [dateStartState, setDateStartState] = useState<Date | undefined>();
    const [dateEndState, setDateEndState] = useState<Date | undefined>();
    const [displayedDate, setDisplayedDate] = useState<Date>(defaultDisplayedDate ?? today);
    const boxEl = useRef<HTMLDivElement>(null);
    const l10n = useLocalization(localization, defaultCalendarLocalization);
    const initializedMode = useMemo((): ViewMode => {
        if (mode === 'month') {
            return 'month_list';
        }

        return defaultViewMode ?? 'month';
    }, [mode, defaultViewMode]);
    const [viewMode, setViewMode] = useState<ViewMode>(initializedMode);

    useEffect(() => {
        if (typeof onChangeDisplayedDate === 'function') {
            onChangeDisplayedDate(displayedDate);
        }
    }, [displayedDate]);

    const handleGoToMonth = useCallback(
        (year: number, month: number) => () => {
            const nextDate = new Date(year, month, 1);

            if (mode === 'month' && isValid(nextDate) && onChangeMonth) {
                onChangeMonth(null, {
                    date: nextDate,
                    value: format(nextDate, 'LLLL yyyy', { locale: locale ?? ru }),
                });
            } else {
                setViewMode('month');
            }

            setDisplayedDate(nextDate);
        },
        [viewMode, displayedDate, mode, locale]
    );

    const handleChangeMonth = useCallback(
        (year: number, month: number) => () => {
            if (!onChangeMonth) {
                return;
            }

            const nextDate = new Date(year, month, 1);

            setDisplayedDate(nextDate);
            onChangeMonth(null, {
                date: nextDate,
                value: format(nextDate, 'LLLL yyyy', { locale: locale ?? ru }),
            });
        },
        [viewMode, displayedDate, locale]
    );

    const handleChangeViewMode = useCallback(
        (mode: ViewMode) => () => {
            setViewMode(mode);
        },
        [viewMode]
    );

    const parseOptionToDate = useCallback(
        (options: { date?: DateValue | Date | Date[]; formatDate?: Format }): Date | Date[] | undefined => {
            let nextDate: Date | Date[] | undefined;
            const { date, formatDate } = options;

            if (allowMultiple) {
                if (!date) {
                    return [];
                }

                return Array.isArray(date) ? date : [date as Date];
            }

            switch (formatDate) {
                case 'object': {
                    const dateValue: DateValue = date as DateValue;
                    if (
                        typeof date === 'object' &&
                        isValid(new Date(dateValue.year, dateValue.month - 1, dateValue.day))
                    ) {
                        nextDate = new Date(dateValue.year, dateValue.month - 1, dateValue.day);
                    }
                    break;
                }

                case 'date':
                default: {
                    if (date instanceof Date) {
                        nextDate = date;
                    }
                    break;
                }
            }

            return nextDate;
        },
        [boxEl, allowMultiple]
    );

    const parseDateToOption = useCallback(
        (options: { date: Date; formatDate?: Format }): DateValue | Date | null => {
            let formattedDate: DateValue | Date | null = null;

            switch (options.formatDate) {
                case 'object': {
                    formattedDate = {
                        year: options.date.getFullYear(),
                        month: options.date.getMonth() + 1,
                        day: options.date.getDate(),
                    };
                    break;
                }
                case 'date':
                default: {
                    formattedDate = options.date;
                    break;
                }
            }

            return formattedDate;
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
        (nextDate: Date | RangeDate<Date> | Date[]) => {
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

    const parsedMinDate = useMemo(
        () => minDate && (parseOptionToDate({ formatDate, date: minDate }) as Date | undefined),
        [minDate, formatDate]
    );

    const parsedMaxDate = useMemo(
        () => maxDate && (parseOptionToDate({ formatDate, date: maxDate }) as Date | undefined),
        [maxDate, formatDate]
    );

    const handleGoToToday = useCallback(() => {
        const isDisabled = checkIsDisabled({
            dates: disabledDates,
            maxDate: parsedMaxDate,
            minDate: parsedMinDate,
            date: today,
            startingWeekDay,
        });
        setDisplayedDate(today);

        if (!ranged && !isDisabled) {
            changeSingleDate(today);
        }
    }, [displayedDate]);

    const initDate = useCallback(() => {
        const nextDate = parseOptionToDate({
            date: date,
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

        if (firstUpdate.current) {
            firstUpdate.current = false;

            const displayedDate = ranged ? nextDateStart : Array.isArray(nextDate) ? nextDate[0] : nextDate;

            setDisplayedDate((displayedDate as Date) ?? defaultDisplayedDate ?? today);
        }

        setDateState(nextDate);
        setDateStartState(nextDateStart as Date);
        setDateEndState(nextDateEnd as Date);
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
        defaultDisplayedDate,
    ]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    return (
        <CalendarProvider localization={l10n} locale={locale}>
            <Box ref={boxEl}>
                <Header
                    mode={mode}
                    viewMode={viewMode}
                    displayedDate={displayedDate}
                    hasNavigation={mode !== 'month' || viewMode === 'year_list'}
                    onChangeViewMode={handleChangeViewMode}
                    onChangeDisplayedDate={setDisplayedDate}
                />
                <Body
                    viewMode={viewMode}
                    displayedDate={displayedDate}
                    date={dateState}
                    dateStart={dateStartState}
                    dateEnd={dateEndState}
                    maxDate={parsedMaxDate}
                    minDate={parsedMinDate}
                    ranged={ranged}
                    todayButton={todayButton}
                    disabledDates={disabledDates}
                    weekendDates={weekendDates}
                    eventDates={eventDates}
                    hasNavigation={mode !== 'month'}
                    startingWeekDay={startingWeekDay}
                    allowMultiple={allowMultiple}
                    onGoToMonth={handleGoToMonth}
                    onChangeDate={handleChangeDate}
                    onGoToToday={handleGoToToday}
                    onChangeMonth={handleChangeMonth}
                />
            </Box>
        </CalendarProvider>
    );
};

Calendar.displayName = 'Calendar';
Calendar.Day = DayState;
