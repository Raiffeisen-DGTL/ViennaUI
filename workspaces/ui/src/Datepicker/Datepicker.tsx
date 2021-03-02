import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDrop } from 'vienna.react-use';
import { Calendar as CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { DatePickerLocalizationProps } from './localization';
import { Calendar, dateFunction, DateValue, DisabledDates, eventDateFunction } from '../Calendar';
import { InputDate } from '../InputMask';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils/DateUtils';
import { InputEvent, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './Datepicker.styles';
import { checkIsDisabled } from '../Calendar/Utils';

export interface DatepickerProps
    extends Omit<InputProps, 'value' | 'type' | 'onChange' | 'onPaste'>,
        DatePickerLocalizationProps {
    /**
     * дата передается строкой вида 01.01.2021
     */
    value?: string | Date;

    /**
     * Отображение календаря
     */
    isCalendarOpen?: boolean;

    /**
     * Даты-событие
     */
    eventDates?: Date[] | eventDateFunction;

    /**
     * Выходные даты
     */
    weekendDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;

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

    onChange?: (
        event: InputEvent<React.FormEvent<HTMLInputElement>> | Event | null,
        data: { value?: string; name?: string; isDisabled?: boolean; date?: Date }
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

export const Datepicker: React.FC<DatepickerProps> = ({
    eventDates,
    isCalendarOpen,
    maxDate,
    minDate,
    name,
    postfix,
    prefix,
    size,
    todayButton,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    weekendDates,
    disabledDates,
    tabIndex,
    startingWeekDay = 1,
    localization,
    locale,
    ...attrs
}: DatepickerProps): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [active, setActive] = useState(false);
    const datepickerEl = useRef<HTMLDivElement>(null);
    const calendarRef = useDrop({ align: 'vertical', float: 'start', margins: { x: 0, y: 4 } });

    const handleInputFocus = useCallback(
        (event, data) => {
            if (typeof onFocus === 'function') {
                onFocus(event, { value: data.value, name });
            }
            setOpen(true);
        },
        [name, onFocus]
    );

    const handleBlur = useCallback(
        (event) => {
            if (typeof onBlur === 'function') {
                onBlur(event, { value: typeof value === 'string' ? value : getStringFromDate(value as Date), name });
            }
            setOpen(false);
            setActive(false);
        },
        [onBlur, value, name]
    );

    useEffect(() => {
        if (isOpen) {
            setActive(true);
        }
    }, [isOpen]);

    useEffect(() => {
        setOpen(isCalendarOpen);
    }, [isCalendarOpen]);

    const handleClickInput = useCallback(() => {
        if (active) {
            setOpen(true);
        }
    }, [isOpen, active]);

    const handleClickDateIcon = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    const handleChangeInput = useCallback(
        (event, data) => {
            const date = getDateFromString(data.value);
            const nextIsDisabled =
                !!date && checkIsDisabled({ dates: disabledDates, date, startingWeekDay, minDate, maxDate });
            if (typeof onChange === 'function') {
                onChange(event, { value: data.value, name, isDisabled: nextIsDisabled, date });
            }

            setIsDisabled(nextIsDisabled);
        },
        [name, onChange]
    );

    const handleClickDate = useCallback(
        (event, { date }: { date?: DateValue | Date }) => {
            if (date) {
                const clickedDateString = getStringFromDate(date as Date);

                if (typeof onChange === 'function') {
                    onChange(event, { value: clickedDateString, name, date: date as Date });
                }
                setOpen(false);
                setActive(true);
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

    const handleClickDocument = (event): void => {
        if (
            event.target instanceof Node &&
            datepickerEl &&
            datepickerEl.current &&
            !datepickerEl.current.contains(event.target)
        ) {
            setOpen(false);
            setActive(false);
        }
    };

    useEffect(() => {
        if (document.body) {
            document.body.addEventListener('click', handleClickDocument);
        }

        return () => {
            if (document.body) {
                document.body.removeEventListener('click', handleClickDocument);
            }
        };
    });

    const dateValue = useMemo(() => getDateFromString(value as any), [value, isDisabled]);

    const handleMouseDownCalendar = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <Box ref={datepickerEl} tabIndex={tabIndex} onBlur={handleBlur}>
            <InputBox onClick={handleClickInput}>
                <InputDate
                    postfix={
                        postfix ?? <CalendarIcon size={size === 'xxl' ? 'xl' : size} onClick={handleClickDateIcon} />
                    }
                    prefix={prefix}
                    size={size}
                    name={name}
                    value={value}
                    active={active}
                    localization={localization}
                    onChange={handleChangeInput}
                    onKeyPress={handleKeyPress}
                    onFocus={handleInputFocus}
                    {...attrs}
                />
            </InputBox>
            {isOpen && (
                <CalendarBox ref={calendarRef} onMouseDown={handleMouseDownCalendar}>
                    <Calendar
                        date={dateValue}
                        eventDates={eventDates}
                        weekendDates={weekendDates}
                        maxDate={maxDate}
                        minDate={minDate}
                        todayButton={todayButton}
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

Datepicker.displayName = 'Datepicker';
Datepicker.defaultProps = {
    isCalendarOpen: false,
    todayButton: true,
};

export default Datepicker;
