import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDrop } from 'vienna.react-use';
import { Calendar as CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { DatePickerRangeLocalizationProps } from './localization';
import { Calendar, dateFunction, DateValue, DisabledDates } from '../Calendar';
import { InputDateRange, DateType } from '../InputMask';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils';
import { InputEvent, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './DatepickerRange.styles';
import { checkIsDisabled } from '../Calendar/Utils';

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
    disabledDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;

    /**
     * Дни недели отображаются с понедельника (1) или с воскресенья (0)
     */
    startingWeekDay?: 0 | 1;
    /**
     * Локаль календаря
     */
    locale?: Locale;
}

export const DatepickerRange: React.FC<DatepickerRangeProps> = ({
    eventDates,
    isCalendarOpen,
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
    startingWeekDay = 1,
    onBlur,
    tabIndex,
    localization,
    locale,
    ...attrs
}: DatepickerRangeProps): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
    const datepickerRangeEl = useRef<HTMLDivElement>(null);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const calendarRef = useDrop({ align: 'vertical', float: 'start', margins: { x: 0, y: 4 } });

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

    const handleClickDateIcon = () => {
        setOpen(!isOpen);
    };

    const getInputValueArray = useCallback((dateString) => {
        return typeof dateString === 'string' ? dateString.replace(/\s+/g, '').split('-') : [];
    }, []);

    const handleChangeInput = useCallback(
        (event, data) => {
            const inputValueArray = getInputValueArray(data.value);
            const startInputDate = getDateFromString(inputValueArray[0]);
            const endInputDate = getDateFromString(inputValueArray[1]);
            const isDisabled =
                (!!startInputDate &&
                    checkIsDisabled({ dates: disabledDates, date: startInputDate, startingWeekDay })) ||
                (!!endInputDate && checkIsDisabled({ dates: disabledDates, date: endInputDate, startingWeekDay }));
            setIsDisabled(isDisabled);

            if (typeof onChange === 'function') {
                onChange(event, { value: data.value, valueAsDate: data.valueAsDate, name, isDisabled });
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
                const formattedEndDate = getStringFromDate(dateEnd as Date);
                newInputValue = `${formattedStartDate} - ${formattedEndDate}`;
                setOpen(false);
            }

            if (typeof onChange === 'function') {
                onChange(event, { value: newInputValue, valueAsDate: { from: dateStart, to: dateEnd }, name });
            }
        },
        [name, onChange]
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
        },
        [onBlur, dateValue, minDate, name]
    );

    return (
        <Box ref={datepickerRangeEl} tabIndex={tabIndex} onBlur={handleBlur}>
            <InputBox>
                <InputDateRange
                    postfix={
                        postfix ?? <CalendarIcon size={size === 'xxl' ? 'xl' : size} onClick={handleClickDateIcon} />
                    }
                    prefix={prefix ?? null}
                    size={size}
                    name={name}
                    value={value}
                    localization={localization}
                    onChange={handleChangeInput}
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                    {...attrs}
                />
            </InputBox>
            {isOpen && (
                <CalendarBox ref={calendarRef} onMouseDown={handleMouseDownCalendar}>
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
                        onChange={handleClickDate}
                    />
                </CalendarBox>
            )}
        </Box>
    );
};

DatepickerRange.displayName = 'DatepickerRange';
DatepickerRange.defaultProps = {
    isCalendarOpen: false,
};

export default DatepickerRange;
