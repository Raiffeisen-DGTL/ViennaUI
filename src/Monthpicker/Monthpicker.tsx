import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useFloating, offset, autoPlacement, shift, FloatingPortal } from '@floating-ui/react';
import { format, Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'vienna.icons';
import { CalendarIconProps as CalendarProps } from 'vienna.icons/dist/CalendarIcon/CalendarIcon';
import { Calendar, PropsCalendar } from '../Calendar';
import { Input, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './Monthpicker.styles';
import { MonthpickerLocalizationProps } from './localization';
import { getStringFromDate } from '../Utils/DateUtils';
import { OnChangeHandler, ComponentWrapper, defer, Pretty, composeRef } from '../Utils';
import { CalendarTestId, defaultCalendarTestId } from '@/Calendar/Calendar';

export const defaultMonthpickerTestId: MonthPickerTestId = {
    postfixIcon: 'monthpicker_postfix-icon',
    calendarBox: 'monthpicker_calendar-box',
    calendar: defaultCalendarTestId,
};

export interface MonthPickerTestId {
    postfixIcon?: string;
    calendarBox?: string;
    calendar?: CalendarTestId;
}

export interface MonthpickerProps
    extends Omit<InputProps, 'value' | 'type' | 'onChange' | 'onPaste' | 'onBlur' | 'testId'>,
        MonthpickerLocalizationProps {
    value?: Date;

    /**
     * Отображение календаря
     */
    isCalendarOpen?: boolean;

    /**
     * Календарь всегда открыт
     */
    isCalendarAlwaysOpen?: boolean;

    /**
     * Ref для calendar
     */
    calendarBoxRef?: React.MutableRefObject<HTMLDivElement | null>;

    onChange?: OnChangeHandler<
        Date | undefined,
        React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | null,
        { month: string; name?: string }
    >;

    onBlur?: (event: React.FocusEvent<HTMLDivElement>, data: { value?: string; date?: Date; name?: string }) => void;
    /**
     * Локаль календаря
     */
    locale?: Locale;
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;
    /** Ref, принимающий функции для внешнего обновления стейта  */
    controlsRef?: React.MutableRefObject<MonthpickerControlRef | null>;
    testId?: MonthPickerTestId;
}
export type MonthpickerControlRef =
    | {
          updateValue: (date: Date) => void;
      }
    | undefined;

interface inputType {
    date: Date;
    value: string;
}

export namespace Monthpicker {
    export type OnChange = Pretty.Func<
        OnChangeHandler<
            Date | undefined,
            React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | null,
            { month: string; name?: string }
        >
    >;
    export type TestId = Pretty.fy<MonthPickerTestId>;
}

export function Monthpicker({
    isCalendarOpen = false,
    isCalendarAlwaysOpen,
    name,
    size,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    localization,
    locale,
    dropdownPortal = document.body,
    controlsRef,
    calendarBoxRef,
    testId = defaultMonthpickerTestId,
    ...attrs
}: MonthpickerProps) {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen || isCalendarAlwaysOpen);
    const datepickerEl = useRef<HTMLDivElement>(null);

    const getValue = (date: Date): inputType => ({ date, value: format(date, 'LLLL yyyy', { locale: ru }) });

    const initializedValue = useMemo(() => (value ? getValue(value) : ''), [value]);
    const [inputValue, setInputValue] = useState<inputType | string | (() => inputType)>(initializedValue);
    const [active, setActive] = useState(false);

    useImperativeHandle(controlsRef, () => ({
        updateValue: (date) => {
            setInputValue(getValue(date));
        },
    }));

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

    const handleInputFocus = useCallback<NonNullable<InputProps['onFocus']>>(
        (event, data) => {
            if (typeof onFocus === 'function') {
                onFocus(event, { value: data.value, name });
            }
            setOpen(true);
        },
        [name, onFocus]
    );

    const handleClickDateIcon = useCallback<React.MouseEventHandler>(
        (e) => {
            e.stopPropagation();
            !isCalendarAlwaysOpen && setOpen(!isOpen);
        },
        [isOpen, isCalendarAlwaysOpen]
    );

    const handleClickInput = useCallback<React.MouseEventHandler>(() => {
        if (active) {
            setOpen(true);
        }
    }, [isOpen, active]);

    const handleClickMonth = useCallback<NonNullable<PropsCalendar['onChangeMonth']>>(
        ({ date, value }) => {
            if (date) {
                setInputValue({ date: date as Date, value });
                if (typeof onChange === 'function') {
                    onChange({ value: date as Date, event: null, options: { month: value, name } });
                }
                !isCalendarAlwaysOpen && setOpen(false);
                setActive(true);
            }
        },
        [name, isOpen, active, onChange]
    );

    const handleChangeInput = useCallback<NonNullable<InputProps['onChange']>>(
        ({ value: val, event, options }) =>
            onChange?.({ value: undefined, event, options: { month: val, ...options } }),
        [name, onChange, value]
    );

    const handleKeyPress = useCallback<NonNullable<InputProps['onKeyPress']>>(
        (event) => {
            if (typeof onKeyPress === 'function') {
                onKeyPress(event);
            }
            if (event.key === 'Enter') {
                !isCalendarAlwaysOpen && setOpen(!isOpen);
            }
            if (event.key === 'Escape') {
                !isCalendarAlwaysOpen && setOpen(false);
            }
        },
        [isOpen, onKeyPress, isCalendarAlwaysOpen]
    );

    const handleKeyDown = useCallback<NonNullable<InputProps['onKeyDown']>>((event) => {
        if (event.keyCode === 8) {
            setInputValue('');
            if (typeof onChange === 'function') {
                onChange({ value: undefined, event, options: { month: '', name } });
            }
        }
    }, []);

    const handleClickDocument = (event: MouseEvent): void => {
        if (
            event.target instanceof Node &&
            datepickerEl &&
            datepickerEl.current &&
            !datepickerEl.current.contains(event.target)
        ) {
            !isCalendarAlwaysOpen && setOpen(false);
            setActive(false);
        }
    };

    const handleBlur = useCallback(
        (event: React.FocusEvent<HTMLDivElement>) => {
            if (typeof onBlur === 'function') {
                onBlur(event, {
                    value: typeof value === 'string' ? value : getStringFromDate(value as Date),
                    name,
                });
            }
            !isCalendarAlwaysOpen && setOpen(false);
            setActive(false);
        },
        [onBlur, value, name, active, isCalendarAlwaysOpen]
    );

    useEffect(() => {
        defer(() => {
            if (isOpen) {
                update();
            }
        });
    }, [isOpen]);

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

    useEffect(() => {
        setOpen(isCalendarOpen || isCalendarAlwaysOpen);
    }, [isCalendarOpen, isCalendarAlwaysOpen]);

    const handleMouseDownCalendar = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
    }, []);

    return (
        <Box ref={refs.setReference} id='monthpicker-box' onBlur={handleBlur} onClick={handleClickInput}>
            <InputBox>
                <Input
                    {...attrs}
                    postfix={
                        <CalendarIcon
                            size={size === 'xxl' ? 'xl' : (size as CalendarProps['size'])}
                            cursor='pointer'
                            data-testid={testId?.postfixIcon}
                            onClick={handleClickDateIcon}
                        />
                    }
                    active={active}
                    size={size}
                    name={name}
                    value={
                        inputValue &&
                        `${(inputValue as inputType).value?.split('')[0]?.toUpperCase()}${(
                            inputValue as inputType
                        ).value?.slice(1)}`
                    }
                    placeholder='Выберите месяц'
                    onChange={handleChangeInput}
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                    onKeyDown={handleKeyDown}
                />
            </InputBox>
            {isOpen && (
                <ComponentWrapper
                    component={dropdownPortal ? FloatingPortal : undefined}
                    props={{ root: dropdownPortal }}>
                    <CalendarBox
                        data-id='calendar'
                        ref={composeRef<HTMLDivElement>(refs.setFloating, calendarBoxRef)}
                        style={floatingStyles}
                        data-testid={testId?.calendarBox}
                        onMouseDown={handleMouseDownCalendar}>
                        <Calendar
                            mode='month'
                            date={(inputValue as inputType)?.date}
                            locale={locale}
                            localization={localization}
                            testId={testId?.calendar}
                            onChangeMonth={handleClickMonth}
                        />
                    </CalendarBox>
                </ComponentWrapper>
            )}
        </Box>
    );
}

Monthpicker.displayName = 'Monthpicker';
