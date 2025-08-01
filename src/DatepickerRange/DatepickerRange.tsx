import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { useFloating, offset, autoPlacement, FloatingPortal } from '@floating-ui/react';
import { CalendarIconProps as CalendarProps } from 'vienna.icons/dist/CalendarIcon/CalendarIcon';
import { DatePickerRangeLocalizationProps } from './localization';
import { Calendar, dateFunction, CalendarDates, PropsCalendar } from '../Calendar';
import { InputDateRange, DateType } from '../InputMask';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils';
import { InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './DatepickerRange.styles';
import { checkIsDisabled } from '../Calendar/Utils';
import { FocusActions, StartingWeekDay, ViewMode } from '../Calendar/types';
import { composeRef, OnChangeHandler, ComponentWrapper, defer, Pretty } from '../Utils';
import { InputDateRangeProps } from '../InputMask/Concrete/InputDateRange/InputDateRange';
import { WithViewOnly } from '@/ViewOnly';
import { defaultCalendarTestId } from '@/Calendar/Calendar';

export const defaultDatepickerRangeTestId: DatepickerRangeProps['testId'] = {
    container: 'datepicker-range_container',
    calendarBox: 'datepicker-range_calendar-box',
    calendar: defaultCalendarTestId,
};

export interface DatepickerRangeProps
    extends Omit<InputProps, 'onChange' | 'onBlur' | 'onPaste' | 'testId'>,
        WithViewOnly,
        DatePickerRangeLocalizationProps {
    /**
     * дата передается строкой вида 01.01.2021-12.01.2021
     */
    value?: string;

    /**
     * Отображение календаря
     */
    isCalendarOpen?: boolean;

    /**
     * Календарь всегда открыт
     */
    isCalendarAlwaysOpen?: boolean;

    /**
     * Даты-событие
     */
    eventDates?: Date[] | dateFunction;

    /**
     * Отображение кнопки "Сегодня"
     */
    todayButton?: boolean;

    /**
     * Нижняя граница выбора даты
     */
    minDate?: Date;

    /**
     * Верхняя граница выбора даты
     */
    maxDate?: Date;

    onChange?: OnChangeHandler<
        string,
        React.FormEvent<HTMLInputElement> | Event | null,
        { valueAsDate: DateType; name?: string; isDisabled?: boolean }
    >;

    onBlur?: (event: React.FocusEvent, data: { value: string; name?: string }) => void;

    /**
     * Неактивные для выбора даты
     */
    disabledDates?: CalendarDates;

    /**
     * Дни недели отображаются с понедельника (1) или с воскресенья (0)
     */
    startingWeekDay?: StartingWeekDay;
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
    /**
     * Выбор режима отображения "месяцы" и "года"
     */
    view?: ViewMode;
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;

    /**
     * Реф на контейнер календаря
     */
    calendarBoxRef?: React.MutableRefObject<HTMLDivElement | null>;

    testId?: {
        container?: string;
        calendarBox?: string;
        calendar?: PropsCalendar['testId'];
    };
}

export namespace DatepickerRange {
    export type OnChange = Pretty.Func<
        OnChangeHandler<
            string,
            React.FormEvent<HTMLInputElement> | Event | null,
            { valueAsDate: DateType; name?: string; isDisabled?: boolean }
        >
    >;
    export type EventDates = Pretty.fy<Date[] | dateFunction>;
    export type DisabledDates = Pretty.fy<CalendarDates>;
}

export function DatepickerRange({
    eventDates,
    isCalendarOpen = false,
    isCalendarAlwaysOpen,
    maxDate,
    minDate,
    name,
    postfix,
    prefix,
    size,
    todayButton = false,
    value,
    onChange,
    onFocus,
    onKeyPress,
    disabledDates,
    startingWeekDay = 'monday',
    onBlur,
    tabIndex,
    localization,
    locale,
    onChangeDisplayedDate,
    defaultDisplayedDate,
    view,
    dropdownPortal = document.body,
    calendarBoxRef,
    testId = defaultDatepickerRangeTestId,
    ...attrs
}: DatepickerRangeProps) {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen || isCalendarAlwaysOpen);
    const [active, setActive] = useState(false);
    const datepickerRangeEl = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<FocusActions>({} as FocusActions);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const { refs, floatingStyles, update } = useFloating({
        placement: 'bottom-start',
        middleware: [
            offset({
                mainAxis: 4,
                crossAxis: 0,
                alignmentAxis: 0,
            }),
            autoPlacement({
                alignment: 'start',
                allowedPlacements: ['top-start', 'bottom-start'],
                crossAxis: false,
            }),
        ],
    });

    useEffect(() => {
        defer(() => {
            if (isOpen) {
                update();
            }
        });
    }, [isOpen]);

    useEffect(() => {
        setOpen(isCalendarOpen || isCalendarAlwaysOpen);
    }, [isCalendarOpen, isCalendarAlwaysOpen]);

    const handleInputFocus = useCallback<NonNullable<InputDateRangeProps['onFocus']>>(
        (event, data) => {
            if (typeof onFocus === 'function') {
                onFocus(event, { value: data.value, name });
            }
            setOpen(true);
        },
        [name, onFocus]
    );

    const handleClickInput = useCallback(() => {
        if (active) {
            setOpen(true);
        }
    }, [isOpen, active]);

    const getInputValueArray = useCallback((dateString?: string | null) => {
        return typeof dateString === 'string' ? dateString.replace(/\s+/g, '').split('-') : [];
    }, []);

    const handleChangeInput = useCallback<NonNullable<InputDateRangeProps['onChange']>>(
        ({ value }) => {
            const inputValueArray = getInputValueArray(value);
            const startInputDate = getDateFromString(inputValueArray[0]);
            const endInputDate = getDateFromString(inputValueArray[1]);

            const isDisabled =
                (!!startInputDate &&
                    checkIsDisabled({ dates: disabledDates, date: startInputDate, startingWeekDay })) ||
                (!!endInputDate && checkIsDisabled({ dates: disabledDates, date: endInputDate, startingWeekDay }));
            setIsDisabled(isDisabled);

            onChange?.({
                value: value ?? '',
                event: null,
                options: {
                    valueAsDate: { from: startInputDate, to: endInputDate },
                    name,
                    isDisabled,
                },
            });
        },
        [name, onChange]
    );

    const handleClickDate = useCallback<NonNullable<PropsCalendar['onChange']>>(
        (event, { dateStart, dateEnd }) => {
            let newInputValue = '';
            if (dateStart) {
                newInputValue = getStringFromDate(dateStart as Date);
            }
            if (dateEnd) {
                const formattedStartDate = getStringFromDate(dateStart as Date);

                dateEnd = new Date(dateEnd as Date);
                dateEnd = new Date(dateEnd.setHours(dateEnd.getHours() + 23));
                dateEnd = new Date(dateEnd.setMinutes(dateEnd.getMinutes() + 59));
                dateEnd = new Date(dateEnd.setSeconds(dateEnd.getSeconds() + 59));

                const formattedEndDate = getStringFromDate(dateEnd);

                newInputValue = `${formattedStartDate} - ${formattedEndDate}`;
                Boolean(isOpen) && !isCalendarAlwaysOpen && setOpen(false);
                setActive(true);
            }

            onChange?.({
                value: newInputValue,
                event,
                options: { valueAsDate: { from: dateStart, to: dateEnd }, name },
            });
        },
        [name, onChange, isOpen, isCalendarAlwaysOpen]
    );

    const handleKeyPress = useCallback<NonNullable<InputDateRangeProps['onKeyPress']>>(
        (event) => {
            if (typeof onKeyPress === 'function') {
                onKeyPress(event);
            }
            if (event.key === 'Enter') {
                !isCalendarAlwaysOpen && setOpen(!isOpen);
            }
            if (event.key === 'ArrowDown') {
                actionsRef.current?.setFocusGrid();
            }
        },
        [isOpen, onKeyPress]
    );

    const dateValue = useMemo(() => {
        const inputValueArray = getInputValueArray(value);

        return isDisabled
            ? {}
            : {
                  start: getDateFromString(inputValueArray[0]),
                  end: getDateFromString(inputValueArray[1]),
              };
    }, [value]);

    const handleMouseDownCalendar = useCallback<React.MouseEventHandler<HTMLDivElement>>((e) => {
        e.preventDefault();
    }, []);

    const isFocusedOutside = useCallback(
        (event: React.FocusEvent) => !datepickerRangeEl?.current?.contains(event.relatedTarget),
        []
    );

    const handleBlur = useCallback(
        (event: React.FocusEvent) => {
            if (typeof onBlur === 'function') {
                onBlur(event, {
                    value: `${dateValue.start}-${dateValue.end}`,
                    name,
                });
            }
            !isCalendarAlwaysOpen && setOpen(false);
            setActive(false);
        },
        [onBlur, dateValue, minDate, name, isCalendarAlwaysOpen]
    );

    const handleInputBlur = useCallback<NonNullable<InputDateRangeProps['onBlur']>>(
        (event) => {
            if (isFocusedOutside(event)) {
                const value = event.target.value;
                const completeLength = 23;
                handleBlur(event);
                handleChangeInput({
                    value,
                    event: undefined,
                    options: {
                        name,
                        isComplete: value.length === completeLength,
                        unmaskedValue: value,
                    },
                });
            }
        },
        [handleBlur, handleChangeInput, isFocusedOutside, name]
    );

    const handleCalendarBlur = useCallback<NonNullable<PropsCalendar['onBlur']>>(
        (event) => {
            if (isFocusedOutside(event)) {
                handleBlur(event);
            }
        },
        [handleBlur, isFocusedOutside]
    );

    return (
        <Box
            ref={refs.setReference}
            tabIndex={tabIndex}
            id='datepickerrange-box'
            data-testid={testId?.container}
            onClick={handleClickInput}>
            <InputBox>
                <InputDateRange
                    {...attrs}
                    postfix={
                        postfix ?? (
                            <CalendarIcon
                                size={size === 'xxl' ? 'xl' : (size as CalendarProps['size'])}
                                cursor='pointer'
                            />
                        )
                    }
                    prefix={prefix ?? null}
                    size={size}
                    name={name}
                    min={minDate}
                    max={maxDate}
                    active={active}
                    value={value}
                    localization={localization}
                    onChange={handleChangeInput}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyPress}
                />
            </InputBox>
            {isOpen && (
                <ComponentWrapper
                    component={dropdownPortal ? FloatingPortal : undefined}
                    props={{ root: dropdownPortal }}>
                    <CalendarBox
                        data-id='calendar'
                        data-testid={testId?.calendarBox}
                        ref={composeRef<HTMLDivElement>(refs.setFloating, calendarBoxRef, datepickerRangeEl)}
                        style={floatingStyles}
                        $hidden={!isOpen}
                        onMouseDown={handleMouseDownCalendar}>
                        <Calendar
                            dateStart={dateValue.start}
                            dateEnd={dateValue.end}
                            eventDates={eventDates}
                            maxDate={maxDate}
                            minDate={minDate}
                            todayButton={todayButton}
                            ranged
                            disabledDates={disabledDates}
                            startingWeekDay={startingWeekDay}
                            localization={localization}
                            locale={locale}
                            defaultDisplayedDate={defaultDisplayedDate}
                            defaultViewMode={view}
                            actionsRef={actionsRef}
                            testId={testId?.calendar}
                            onChange={handleClickDate}
                            onChangeDisplayedDate={onChangeDisplayedDate}
                            onBlur={handleCalendarBlur}
                        />
                    </CalendarBox>
                </ComponentWrapper>
            )}
        </Box>
    );
}

DatepickerRange.displayName = 'DatepickerRange';
