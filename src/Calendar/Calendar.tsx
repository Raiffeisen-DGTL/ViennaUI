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
import { Dates, EventDateFunction, FocusActions, RangeDate, StartingWeekDay, ViewMode } from './types';
/**
 * imports of styles
 */
import { Box, DayState } from './Calendar.styles';
import { checkIsDisabled } from './Utils';
import { convertValueToDate } from './Utils/convertValueToDate';
import { useActionsRef } from './hooks';
import { HeaderTestId } from '@/Calendar/Header/Header';
import { BodyTestId } from '@/Calendar/Body/Body';

export const defaultCalendarTestId: CalendarTestId = {
    btnYearPrev: 'calendar_btn-year-prev',
    btnYearNext: 'calendar_btn-year-next',
    btnMonthPrev: 'calendar_btn-month-prev',
    btnMonthNext: 'calendar_btn-month-next',
    btnViewMode: 'calendar_btn-view-mode',
    btnToday: 'calendar_btn-today',
    btnCalendarCell: (date: Date) => `calendar_${date.toISOString()}`,
};

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

export type Format = 'date' | 'object';

export interface CalendarTestId extends HeaderTestId, BodyTestId {}

export interface PropsCalendar extends CalendarLocalizationProps {
    /**
     *  Выбранная дата
     */
    date?: DateValue | Date | Date[];
    format?: Format;
    onChange?: (
        event: React.FormEvent<HTMLInputElement> | Event | null,
        options: DateResponse<DateValue | Date>
    ) => void;
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

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
    onChangeMonth?: (options: { date: Date | Date[]; value: string }) => void;

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
    visible?: boolean;

    /**
     * Рефка содержащая методы для установки фокуса
     */
    actionsRef?: React.MutableRefObject<FocusActions>;

    /**
     * Реф на контейнер календаря
     */
    calendarRef?: React.MutableRefObject<HTMLDivElement | null>;

    /**
     * Изменение режима отображения
     */
    onChangeViewMode?: (viewMode: ViewMode) => void;

    /**
     * Добавление атрибута data-testid
     */
    testId?: CalendarTestId;
}

const CalendarContent: React.FC<PropsCalendar> = ({
    visible = true,
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
    onBlur,
    ranged = false,
    todayButton = true,
    mode,
    onChangeMonth,
    startingWeekDay = 'monday',
    allowMultiple = false,
    locale,
    onChangeDisplayedDate,
    defaultDisplayedDate,
    calendarRef,
    actionsRef,
    onChangeViewMode,
    testId = defaultCalendarTestId,
}) => {
    const firstUpdate = useRef(true);
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);

    const [dateState, setDateState] = useState<Date | Date[] | undefined>(() => {
        const convertedDate = convertValueToDate(date);
        return convertedDate !== null ? convertedDate : undefined;
    });

    const [dateStartState, setDateStartState] = useState<Date | undefined>(() => {
        const convertedDateStart = convertValueToDate(dateStart);
        return convertedDateStart !== null ? convertedDateStart : undefined;
    });

    const [dateEndState, setDateEndState] = useState<Date | undefined>(() => {
        const convertedDateEnd = convertValueToDate(dateEnd);
        return convertedDateEnd !== null ? convertedDateEnd : undefined;
    });

    const [displayedDate, setDisplayedDate] = useState<Date>(defaultDisplayedDate ?? today);
    const isInitialized = useRef<boolean>(false);

    const initializedMode = mode === 'month' ? 'month_list' : (defaultViewMode ?? 'month');
    const [viewMode, setViewMode] = useState<ViewMode>(initializedMode);
    useEffect(() => {
        if (onChangeViewMode) {
            onChangeViewMode(viewMode);
        }
    }, [viewMode]);

    useEffect(() => {
        if (!visible && date) {
            const newDate = convertValueToDate(date);
            newDate && setDisplayedDate(newDate);
        }
    }, [date, visible]);

    useEffect(() => {
        if (isInitialized.current && typeof onChangeDisplayedDate === 'function') {
            onChangeDisplayedDate(displayedDate);
        }
    }, [displayedDate]);

    useEffect(() => {
        isInitialized.current = true;
        return () => {
            isInitialized.current = false;
        };
    }, []);

    useActionsRef({ ref: actionsRef, viewMode });

    const handleOnBlur = useCallback(
        (event: React.FocusEvent<HTMLDivElement>) => {
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        },
        [onBlur]
    );

    const handleGoToMonth = useCallback(
        (year: number, month: number) => () => {
            const nextDate = new Date(year, month, 1);

            if (mode === 'month' && isValid(nextDate) && onChangeMonth) {
                onChangeMonth({
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
            onChangeMonth({
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
        [allowMultiple]
    );

    const parseDateToOption = useCallback((options: { date: Date; formatDate?: Format }): DateValue | Date => {
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
    }, []);

    const changeSingleDate = useCallback(
        (dateValue: Date) => {
            setDateState(dateValue);

            if (typeof onChange === 'function') {
                const nextDate = parseDateToOption({
                    formatDate,
                    date: dateValue,
                });

                onChange(null, { date: nextDate });
            }
        },
        [onChange, dateState]
    );

    const changeRangeDate = (nextDate: RangeDate<Date>) => {
        const { start, end } = nextDate;
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
            });
        }
    };

    const handleChangeDate = useCallback(
        (nextDate: Date | RangeDate<Date> | Date[]) => {
            if (ranged) {
                changeRangeDate(nextDate as RangeDate<Date>);
            } else {
                changeSingleDate(nextDate as Date);
            }
        },
        [onChange, changeSingleDate, changeRangeDate, dateState, dateStartState, dateEndState]
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

        if (isDisabled) return;

        if (!ranged) {
            changeSingleDate(today);
            return;
        }

        if (dateStartState && !dateEndState) {
            changeRangeDate({ start: dateStartState, end: today });
            return;
        }

        changeRangeDate({ start: today });
    }, [ranged, changeSingleDate, changeRangeDate, dateStartState, dateEndState]);

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
        ranged,
        todayButton,
        defaultDisplayedDate,
    ]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    return (
        <Box ref={calendarRef} onBlur={handleOnBlur}>
            <Header
                mode={mode}
                viewMode={viewMode}
                displayedDate={displayedDate}
                hasNavigation={mode !== 'month' || viewMode === 'year_list'}
                testId={testId}
                onChangeViewMode={handleChangeViewMode}
                onChangeDisplayedDate={setDisplayedDate}
            />
            <Body
                viewMode={viewMode}
                displayedDate={displayedDate}
                date={dateState ?? undefined}
                dateStart={dateStartState ?? undefined}
                dateEnd={dateEndState ?? undefined}
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
                testId={testId}
                onGoToMonth={handleGoToMonth}
                onChangeDate={handleChangeDate}
                onGoToToday={handleGoToToday}
                onChangeMonth={handleChangeMonth}
            />
        </Box>
    );
};

export const Calendar: React.FC<PropsCalendar> & { Day: typeof DayState } = ({ localization, locale, ...rest }) => {
    const l10n = useLocalization(localization, defaultCalendarLocalization);
    return (
        <CalendarProvider localization={l10n} locale={locale}>
            <CalendarContent {...rest} />
        </CalendarProvider>
    );
};

Calendar.displayName = 'Calendar';
Calendar.Day = DayState;
