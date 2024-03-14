import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Calendar as CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { useFloating, offset, autoPlacement, FloatingPortal } from '@floating-ui/react';
import { CalendarProps } from 'vienna.icons/dist/Calendar/Calendar';
import { usePortal } from 'vienna.react-use';
import { DatePickerRangeLocalizationProps } from './localization';
import { Calendar, dateFunction, Dates, DateValue } from '../Calendar';
import { InputDateRange, DateType } from '../InputMask';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils';
import { InputEvent, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './DatepickerRange.styles';
import { checkIsDisabled } from '../Calendar/Utils';
import { StartingWeekDay } from '../Calendar/types';

export interface DatepickerRangeProps
    extends Omit<InputProps, 'onChange' | 'onPaste'>,
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
     * Даты-событие
     */
    eventDates?: Date[] | dateFunction;

    /**
     * Нижняя граница выбора даты
     */
    minDate?: Date;

    /**
     * Верхняя граница выбора даты
     */
    maxDate?: Date;

    onChange?: (
        event: InputEvent<React.FormEvent<HTMLInputElement>> | Event | null,
        data: { value?: string; valueAsDate: DateType; name?: string; isDisabled?: boolean }
    ) => void;

    /**
     * Неактивные для выбора даты
     */
    disabledDates?: Dates;

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
}

export const DatepickerRange: React.FC<DatepickerRangeProps> = ({
    eventDates,
    isCalendarOpen = false,
    maxDate,
    minDate,
    name,
    postfix,
    prefix,
    size,
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
    ...attrs
}) => {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
    const [active, setActive] = useState(false);
    const datepickerRangeEl = useRef<HTMLDivElement>(null);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const containerPortal = usePortal('box', 'datepickerrange-box');

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
        if (isOpen) {
            update();
        }
    }, [isOpen]);

    useEffect(() => {
        setOpen(isCalendarOpen);
    }, [isCalendarOpen]);

    const handleInputFocus = useCallback(
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

    const getInputValueArray = useCallback((dateString) => {
        return typeof dateString === 'string' ? dateString.replace(/\s+/g, '').split('-') : [];
    }, []);

    const handleChangeInput = useCallback(
        (value) => {
            const inputValueArray = getInputValueArray(value);
            const startInputDate = getDateFromString(inputValueArray[0]);
            const endInputDate = getDateFromString(inputValueArray[1]);

            const isDisabled =
                (!!startInputDate &&
                    checkIsDisabled({ dates: disabledDates, date: startInputDate, startingWeekDay })) ||
                (!!endInputDate && checkIsDisabled({ dates: disabledDates, date: endInputDate, startingWeekDay }));
            setIsDisabled(isDisabled);

            if (typeof onChange === 'function') {
                onChange(null, {
                    value,
                    valueAsDate: { from: startInputDate, to: endInputDate },
                    name,
                    isDisabled,
                });
            }
        },
        [name, onChange]
    );

    const handleClickDate = useCallback(
        (event, { dateStart, dateEnd }: { dateStart?: DateValue | Date; dateEnd?: DateValue | Date }) => {
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
                isOpen && setOpen(false);
                setActive(true);
            }

            if (typeof onChange === 'function') {
                onChange(event, { value: newInputValue, valueAsDate: { from: dateStart, to: dateEnd }, name });
            }
        },
        [name, onChange, isOpen]
    );

    const handleKeyPress = useCallback(
        (event) => {
            if (typeof onKeyPress === 'function') {
                onKeyPress(event);
            }
            if (event.key === 'Enter') {
                setOpen(!isOpen);
            }
        },
        [isOpen, onKeyPress]
    );

    const handleClickDocument = useCallback((event): void => {
        if (
            event.target instanceof Node &&
            datepickerRangeEl &&
            datepickerRangeEl.current &&
            !datepickerRangeEl.current.contains(event.target)
        ) {
            setOpen(false);
            setActive(false);
        }
    }, []);

    useEffect(() => {
        if (document.body && isOpen) {
            document.body.addEventListener('click', handleClickDocument);
        }

        return () => {
            if (document.body) {
                document.body.removeEventListener('click', handleClickDocument);
            }
        };
    }, [isOpen, handleClickDocument]);

    const dateValue = useMemo(() => {
        const inputValueArray = getInputValueArray(value);
        dateValue?.end?.setSeconds(dateValue?.end?.getSeconds() + 3600 * 23 + 59 * 60 + 59);

        return isDisabled
            ? {}
            : {
                  start: getDateFromString(inputValueArray[0]),
                  end: getDateFromString(inputValueArray[1]),
              };
    }, [value]);

    const handleMouseDownCalendar = useCallback((e) => {
        e.preventDefault();
    }, []);

    const handleBlur = useCallback(
        (event) => {
            if (typeof onBlur === 'function') {
                onBlur(event, {
                    value: `${dateValue.start}-${dateValue.end}`,
                    name,
                });
            }
            setOpen(false);
            setActive(false);
        },
        [onBlur, dateValue, minDate, name]
    );
    return (
        <Box
            ref={refs.setReference}
            onClick={handleClickInput}
            tabIndex={tabIndex}
            onBlur={handleBlur}
            id='datepickerrange-box'>
            <InputBox>
                <InputDateRange
                    {...(attrs as {})}
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
                    active={active}
                    value={value}
                    localization={localization}
                    onChange={handleChangeInput}
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                />
            </InputBox>
            <FloatingPortal root={containerPortal}>
                <CalendarBox
                    data-id='calendar'
                    ref={refs.setFloating}
                    style={floatingStyles}
                    $hidden={!isOpen}
                    onMouseDown={handleMouseDownCalendar}>
                    <Calendar
                        dateStart={dateValue.start}
                        dateEnd={dateValue.end}
                        eventDates={eventDates}
                        maxDate={maxDate}
                        minDate={minDate}
                        todayButton={false}
                        ranged
                        disabledDates={disabledDates}
                        startingWeekDay={startingWeekDay}
                        localization={localization}
                        locale={locale}
                        defaultDisplayedDate={defaultDisplayedDate}
                        onChange={handleClickDate}
                        onChangeDisplayedDate={onChangeDisplayedDate}
                    />
                </CalendarBox>
            </FloatingPortal>
        </Box>
    );
};

DatepickerRange.displayName = 'DatepickerRange';
