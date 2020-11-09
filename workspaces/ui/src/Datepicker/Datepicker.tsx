import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDrop } from 'vienna.react-use';
import { Calendar as CalendarIcon } from 'vienna.icons';
import { Calendar, dateFunction, DateValue, DisabledDates, eventDateFunction } from '../Calendar';
import { InputDate } from '../InputMask';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils/DateUtils';
import { InputEvent, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './Datepicker.styles';
import { checkIsDisabled } from '../Calendar/Utils';

export interface DatepickerProps extends Omit<InputProps, 'value' | 'type' | 'onChange' | 'onPaste'> {
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
        data: { value?: string; name?: string; isDisabled?: boolean }
    ) => void;

    /**
     * Неактивные для выбора даты
     */
    disabledDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
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
    ...attrs
}: DatepickerProps): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [active, setActive] = useState(false);
    const datepickerEl = useRef<HTMLDivElement>(null);
    const calendarRef = useDrop('vertical', 'start', { x: 0, y: 4 });

    const handleInputFocus = useCallback(
        (event, data) => {
            if (typeof onFocus === 'function') {
                onFocus(event, { value: data.value, name });
            }
            setOpen(true);
        },
        [name, onFocus]
    );

    useEffect(() => {
        if (isOpen) {
            setActive(true);
        }
    }, [isOpen]);

    useEffect(() => {
        setOpen(isCalendarOpen);
    }, [isCalendarOpen]);

    const handleClickDateIcon = () => {
        setOpen(!isOpen);
    };

    const handleChangeInput = useCallback(
        (event, data) => {
            const date = getDateFromString(data.value);
            const nextIsDisabled = !!date && checkIsDisabled({ dates: disabledDates, date });
            if (typeof onChange === 'function') {
                onChange(event, { value: data.value, name, isDisabled: nextIsDisabled });
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
                    onChange(event, { value: clickedDateString, name });
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

            if (typeof onBlur === 'function' && active) {
                onBlur(event, { value: typeof value === 'string' ? value : getStringFromDate(value as Date), name });
            }
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

    const dateValue = useMemo(() => (isDisabled ? undefined : getDateFromString(value as any)), [value, isDisabled]);

    return (
        <Box ref={datepickerEl}>
            <InputBox>
                <InputDate
                    max={maxDate}
                    min={minDate}
                    postfix={
                        postfix ?? <CalendarIcon size={size === 'xxl' ? 'xl' : size} onClick={handleClickDateIcon} />
                    }
                    prefix={prefix}
                    size={size}
                    name={name}
                    value={value}
                    active={active}
                    onChange={handleChangeInput}
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                    {...attrs}
                />
            </InputBox>
            {isOpen && (
                <CalendarBox ref={calendarRef}>
                    <Calendar
                        date={dateValue}
                        eventDates={eventDates}
                        weekendDates={weekendDates}
                        maxDate={maxDate}
                        minDate={minDate}
                        todayButton={todayButton}
                        disabledDates={disabledDates}
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
