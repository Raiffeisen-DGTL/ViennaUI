import React, { ComponentProps, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { useFloating, offset, autoPlacement, FloatingPortal } from '@floating-ui/react';
import { CalendarIconProps as CalendarProps } from 'vienna.icons/dist/CalendarIcon/CalendarIcon';
import { usePortal } from 'vienna.react-use';
import { DatePickerBetaLocalizationProps } from './localization';
import { Calendar, CalendarDates, eventDateFunction, PropsCalendar } from '../Calendar';
import { InputDateBeta } from '../InputDateBeta';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils';
import { Box, InputBox, CalendarBox } from './DatePickerBeta.styles';
import { checkIsDisabled } from '../Calendar/Utils';
import { StartingWeekDay } from '../Calendar/types';
import { DatePickerObject } from '../Datepicker/Datepicker';
import { ComponentWrapper } from '../Utils';

export interface DatePickerBetaProps
    extends Omit<ComponentProps<typeof InputDateBeta>, 'value' | 'type' | 'onChange' | 'onPaste' | 'localization'>,
        DatePickerBetaLocalizationProps {
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
    weekendDates?: CalendarDates;

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
        event: React.FormEvent<HTMLInputElement> | React.FocusEvent | Event | null,
        data: { value?: string; name?: string; isDisabled?: boolean; date?: Date }
    ) => void;

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
}

export const DatePickerBeta = forwardRef<HTMLInputElement, DatePickerBetaProps>(
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
            ...attrs
        },
        ref
    ) => {
        const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
        const [isDisabled, setIsDisabled] = useState<boolean>(false);
        const [active, setActive] = useState(false);
        const datepickerEl = useRef<HTMLDivElement | null>(null);
        const containerPortal = usePortal('box', 'datepickerbeta-box');

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

        const handleInputFocus = useCallback(
            (event: React.FocusEvent<HTMLInputElement>, data: DatePickerObject) => {
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
        }, [active]);

        const handleChangeInput = useCallback(
            (values: { formattedValue: string }, sourceInfo: { event: Event | React.FocusEvent }) => {
                const date = getDateFromString(values.formattedValue);
                const nextIsDisabled =
                    !!date && checkIsDisabled({ dates: disabledDates, date, startingWeekDay, minDate, maxDate });
                if (typeof onChange === 'function') {
                    onChange(sourceInfo.event, {
                        name,
                        date,
                        isDisabled: nextIsDisabled,
                        value: values.formattedValue,
                    });
                }

                setIsDisabled(nextIsDisabled);
            },
            [name, onChange]
        );

        const handleBlur = useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                if (typeof onBlur === 'function') {
                    onBlur(event, {
                        value: typeof value === 'string' ? value : getStringFromDate(value as Date),
                        name,
                    });
                }
                handleChangeInput({ formattedValue: event.target.value }, { event });
                setOpen(false);
                setActive(false);
            },
            [onBlur, value, name, handleChangeInput]
        );

        const handleClickDate = useCallback<NonNullable<PropsCalendar['onChange']>>(
            (event, { date }) => {
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
            (event: React.KeyboardEvent<HTMLInputElement>) => {
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

        const handleClickDocument = (event: MouseEvent): void => {
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

        const dateValue = useMemo(() => getDateFromString(value as Date | string), [value, isDisabled]);
        const handleMouseDownCalendar = useCallback((e: React.MouseEvent) => {
            e.preventDefault();
        }, []);

        return (
            <Box ref={refs.setReference} tabIndex={tabIndex} id='datepickerbeta-box' onBlur={handleBlur}>
                <InputBox onClick={handleClickInput}>
                    <InputDateBeta
                        ref={ref}
                        postfix={
                            postfix ?? (
                                <CalendarIcon
                                    size={size === 'xxl' ? 'xl' : (size as CalendarProps['size'])}
                                    cursor='pointer'
                                />
                            )
                        }
                        prefix={prefix}
                        size={size}
                        name={name}
                        value={value}
                        active={active}
                        localization={localization}
                        onKeyDown={handleKeyPress}
                        onFocus={handleInputFocus}
                        {...attrs}
                    />
                </InputBox>
                <ComponentWrapper
                    component={containerPortal ? FloatingPortal : undefined}
                    props={{ root: containerPortal }}>
                    <CalendarBox
                        ref={refs.setFloating}
                        data-id='calendar'
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
                </ComponentWrapper>
            </Box>
        );
    }
);

DatePickerBeta.displayName = 'DatePickerBeta';
