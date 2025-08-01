import React, { forwardRef, useCallback, useEffect, useMemo, useRef, MouseEvent, FocusEvent, useState } from 'react';
import { CalendarIcon } from 'vienna.icons';
import { Locale } from 'date-fns';
import { useFloating, offset, autoPlacement, shift, FloatingPortal } from '@floating-ui/react';
import { CalendarIconProps as CalendarProps } from 'vienna.icons/dist/CalendarIcon/CalendarIcon';
import { DatePickerLocalizationProps } from './localization';
import { Calendar, CalendarDates, eventDateFunction, PropsCalendar } from '../Calendar';
import { InputDate } from '../InputMask';
import { InputEvent } from '../Input';
import { getDateFromString, getStringFromDate } from '../Utils/DateUtils';
import { Box, InputBox, CalendarBox } from './Datepicker.styles';
import { checkIsDisabled } from '../Calendar/Utils';
import { FocusActions, StartingWeekDay, ViewMode } from '../Calendar/types';
import { composeRef, OnChangeHandler, ComponentWrapper, Pretty } from '../Utils';
import { InputDateProps } from '../InputMask/Concrete/InputDate/InputDate';
import { defaultCalendarTestId } from '@/Calendar/Calendar';

export const defaultDatepickerTestId: DatepickerProps['testId'] = {
    container: 'datepicker_container',
    calendarBox: 'datepicker_calendar-box', // 'Datepicker.CalendarBox'
    calendar: defaultCalendarTestId,
};

export interface DatePickerObject {
    value: string;
    name?: string;
}
export interface DatepickerProps
    extends Omit<InputDateProps, 'value' | 'type' | 'onChange' | 'onBlur' | 'onPaste' | 'localization' | 'testId'>,
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

    onChange?: OnChangeHandler<
        string,
        React.FormEvent<HTMLInputElement> | Event | null,
        { name?: string; isDisabled?: boolean; date?: Date }
    >;

    onBlur?: InputEvent<React.FocusEvent<HTMLInputElement | HTMLDivElement>>;

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
     * Портал для dropdown
     */
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;

    /**
     * Ref для calendar
     */
    calendarBoxRef?: React.MutableRefObject<HTMLDivElement | null>;

    /**
     * Выбор режима отображения "месяцы" и "года"
     */
    view?: ViewMode;
    testId?: {
        container?: string;
        calendarBox?: string;
        calendar?: PropsCalendar['testId'];
    };
}

export namespace Datepicker {
    export type OnChange = Pretty.Func<
        OnChangeHandler<
            string,
            React.FormEvent<HTMLInputElement> | Event | null,
            { name?: string; isDisabled?: boolean; date?: Date }
        >
    >;
    export type OnBlur = Pretty.Func<InputEvent<React.FocusEvent<HTMLInputElement | HTMLDivElement>>>;
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
            weekendDates = (date) => [0, 6].includes(date.getDay()),
            disabledDates,
            tabIndex,
            startingWeekDay = 'monday',
            localization,
            locale,
            onChangeDisplayedDate,
            defaultDisplayedDate,
            dropdownPortal = document.body,
            calendarBoxRef,
            view,
            testId = defaultDatepickerTestId,
            ...attrs
        },
        ref
    ) => {
        const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
        const [active, setActive] = useState(false);
        const datepickerEl = useRef<HTMLDivElement>(null);
        const actionsRef = useRef<FocusActions>({} as FocusActions);
        const isClickedOnDate = useRef<boolean>(false);

        const { refs, floatingStyles } = useFloating({
            placement: 'bottom-start',
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
            (event: FocusEvent<HTMLInputElement>, data: DatePickerObject) => {
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

        const handleClickInput = useCallback(() => {
            if (active && !isClickedOnDate.current) {
                setOpen(true);
            }
            isClickedOnDate.current = false;
        }, [isOpen, active]);

        const handleChangeInput = useCallback(
            ({ value: newValue }: { value: string | Date }) => {
                if (typeof onChange !== 'function') {
                    return;
                }

                if (
                    (value instanceof Date && getStringFromDate(value) !== newValue) ||
                    (typeof value === 'string' && value !== newValue) ||
                    (!value && newValue)
                ) {
                    const date = getDateFromString(newValue);

                    const nextIsDisabled =
                        !!date && checkIsDisabled({ dates: disabledDates, date, startingWeekDay, minDate, maxDate });
                    onChange({
                        value: newValue as string,
                        event: null,
                        options: { name, isDisabled: nextIsDisabled, date },
                    });
                }
            },
            [name, value, onChange]
        );

        const handleBlur = useCallback(
            (event: FocusEvent<HTMLInputElement | HTMLDivElement>) => {
                if (typeof onBlur === 'function') {
                    onBlur(event, {
                        value: typeof value === 'string' ? value : getStringFromDate(value as Date),
                        name,
                    });
                }
                setOpen(false);
                setActive(false);
            },
            [onBlur, value, name]
        );

        const isFocusedOutside = useCallback(
            (event: FocusEvent<HTMLDivElement | HTMLInputElement>) =>
                !datepickerEl?.current?.contains(event.relatedTarget),
            []
        );

        const handleInputBlur = useCallback<NonNullable<InputDateProps['onBlur']>>(
            (event) => {
                if (isFocusedOutside(event)) {
                    handleBlur(event);
                    handleChangeInput({ value: (event.target as HTMLInputElement).value });
                }
            },
            [handleBlur, handleChangeInput, isFocusedOutside]
        );

        const handleCalendarBlur = useCallback<NonNullable<PropsCalendar['onBlur']>>(
            (event) => {
                if (isFocusedOutside(event)) {
                    handleBlur(event);
                }
            },
            [handleBlur, isFocusedOutside]
        );

        const handleClickDate = useCallback<NonNullable<PropsCalendar['onChange']>>(
            (event, { date }) => {
                if (date) {
                    const clickedDateString = getStringFromDate(date as Date);
                    isClickedOnDate.current = true;
                    if (typeof onChange === 'function') {
                        onChange({ value: clickedDateString, event, options: { name, date: date as Date } });
                    }

                    setOpen(false);
                    setActive(true);
                }
            },
            [name, onChange]
        );

        const handleKeyPress = useCallback<NonNullable<InputDateProps['onKeyDown']>>(
            (event) => {
                if (typeof onKeyPress === 'function') {
                    onKeyPress(event);
                }
                if (event.key === 'Enter') {
                    setOpen((prev) => !prev);
                }
                if (event.key === 'Escape') {
                    setOpen(false);
                }
                if (event.key === 'ArrowDown') {
                    actionsRef.current?.setFocusGrid();
                }
            },
            [isOpen, onKeyPress]
        );

        const dateValue = useMemo(() => getDateFromString(value), [value]);
        const handleMouseDownCalendar = useCallback((e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
        }, []);

        const formattedValue = useMemo(() => (value instanceof Date ? getStringFromDate(value) : value), [value]);

        return (
            <Box
                ref={refs.setReference}
                tabIndex={tabIndex}
                id='datepicker-box'
                data-testid={testId?.container}
                onClick={handleClickInput}>
                <InputBox>
                    <InputDate
                        {...attrs}
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
                        value={formattedValue ?? ''}
                        active={active}
                        localization={localization}
                        max={maxDate}
                        min={minDate}
                        onChange={handleChangeInput}
                        onKeyDown={handleKeyPress}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </InputBox>
                {isOpen && (
                    <ComponentWrapper
                        component={dropdownPortal ? FloatingPortal : undefined}
                        props={{ root: dropdownPortal }}>
                        <CalendarBox
                            data-id='calendar'
                            data-testid={testId?.calendarBox}
                            ref={composeRef<HTMLDivElement>(refs.setFloating, calendarBoxRef, datepickerEl)}
                            style={floatingStyles}
                            $hidden={!isOpen}
                            onMouseDown={handleMouseDownCalendar}>
                            <Calendar
                                visible={isOpen}
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
);

Datepicker.displayName = 'Datepicker';
