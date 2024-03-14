import React, { ComponentProps, FormEvent, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Calendar as CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { useFloating, offset, autoPlacement, shift, FloatingPortal } from '@floating-ui/react';
import { CalendarProps } from 'vienna.icons/dist/Calendar/Calendar';
import { DatePickerLocalizationProps } from './localization';
import { Calendar, Dates, DateValue, eventDateFunction } from '../Calendar';
import { InputDate } from '../InputMask';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils';
import { InputEvent } from '../Input';
import { Box, InputBox, CalendarBox } from './Datepicker.styles';
import { checkIsDisabled } from '../Calendar/Utils';
import { StartingWeekDay } from '../Calendar/types';
import { defer } from '../Utils/defer';

export interface DatepickerProps
    extends Omit<ComponentProps<typeof InputDate>, 'value' | 'type' | 'onChange' | 'onPaste' | 'localization'>,
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
    weekendDates?: Dates;

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
        event: InputEvent<FormEvent<HTMLInputElement>> | Event | null,
        data: { value?: string; name?: string; isDisabled?: boolean; date?: Date }
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

    /**
     * Портал для dropdown
     */
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;
}

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
    (
        {
            eventDates,
            isCalendarOpen = false,
            maxDate,
            minDate,
            name,
            postfix,
            prefix,
            size,
            todayButton = true,
            value,
            onChange,
            onFocus,
            onBlur,
            onKeyPress,
            weekendDates,
            disabledDates,
            tabIndex,
            startingWeekDay = 'monday',
            localization,
            locale,
            onChangeDisplayedDate,
            defaultDisplayedDate,
            dropdownPortal = null,
            ...attrs
        },
        ref
    ) => {
        const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
        const [isDisabled, setIsDisabled] = useState<boolean>(false);
        const [active, setActive] = useState(false);
        const datepickerEl = useRef<HTMLDivElement>(null);

        const { refs, floatingStyles, update } = useFloating({
            middleware: [
                offset({
                    mainAxis: 4,
                    crossAxis: 0,
                    alignmentAxis: 0,
                }),
                shift(),
                autoPlacement({
                    alignment: 'start',
                    allowedPlacements: ['top-start', 'bottom-start'],
                    crossAxis: true,
                }),
            ],
        });

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
                update();
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

        const handleChangeInput = useCallback(
            (value) => {
                const date = getDateFromString(value);
                const nextIsDisabled =
                    !!date && checkIsDisabled({ dates: disabledDates, date, startingWeekDay, minDate, maxDate });
                if (typeof onChange === 'function') {
                    onChange(null, { value: value, name, isDisabled: nextIsDisabled, date });
                }

                setIsDisabled(nextIsDisabled);
            },
            [name, onChange]
        );

        const handleBlur = useCallback(
            (event) => {
                if (typeof onBlur === 'function') {
                    onBlur(event, {
                        value: typeof value === 'string' ? value : getStringFromDate(value as Date),
                        name,
                    });
                }
                handleChangeInput(event.target.value);
                setOpen(false);
                setActive(false);
            },
            [onBlur, value, name, handleChangeInput]
        );

        const handleClickDate = useCallback(
            (event, { date }: { date?: DateValue | Date }) => {
                if (date) {
                    const clickedDateString = getStringFromDate(date as Date);

                    if (typeof onChange === 'function') {
                        onChange(event, { value: clickedDateString, name, date: date as Date });
                    }
                    defer(() => setOpen(false));
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
                if (event.key === 'Escape') {
                    setOpen(false);
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


        const dateValue = useMemo(() => getDateFromString(value as Date | string), [value, isDisabled]);


        useEffect(() => {
            if (document.body) {
                document.body.addEventListener('click', handleClickDocument);
            }

            return () => {
                if (document.body) {
                    document.body.removeEventListener('click', handleClickDocument);
                }
            };
        }, []);

        useEffect(() => {
            if (value === null) {
                handleChangeInput('');
            }
        }, [value, handleChangeInput]);

        const handleMouseDownCalendar = useCallback((e) => {
            e.preventDefault();
        }, []);

        return (
            <Box
                ref={refs.setReference}
                tabIndex={tabIndex}
                id='datepicker-box'
                onClick={handleClickInput}
                onBlur={handleBlur}>
                <InputBox>
                    <InputDate
                        {...(attrs as {})}
                        ref={ref}
                        postfix={
                            postfix ?? (
                                <CalendarIcon
                                    size={size === 'xxl' ? 'xl' : (size as CalendarProps['size'])}
                                    cursor='pointer'
                                    onMouseDown={handleClickInput}
                                />
                            )
                        }
                        prefix={prefix}
                        size={size}
                        name={name}
                        value={value}
                        active={active}
                        localization={localization}
                        onChange={handleChangeInput}
                        onKeyDown={handleKeyPress}
                        onFocus={handleInputFocus}
                    />
                </InputBox>
                <FloatingPortal root={dropdownPortal}>
                    <CalendarBox
                        data-id='calendar'
                        ref={refs.setFloating}
                        style={floatingStyles}
                        $hidden={!isOpen}
                        onMouseDown={handleMouseDownCalendar}>
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
                            defaultDisplayedDate={defaultDisplayedDate}
                            onChange={handleClickDate}
                            onChangeDisplayedDate={onChangeDisplayedDate}
                        />
                    </CalendarBox>
                </FloatingPortal>
            </Box>
        );
    }
);

Datepicker.displayName = 'Datepicker';
