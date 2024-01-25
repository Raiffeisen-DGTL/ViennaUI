import React, { FC, FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { format, Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from '@fcc/icons';
import { CalendarProps } from '@fcc/icons/dist/Calendar/Calendar';
import { usePortal } from '@fcc/react-use';
import { Calendar } from '../Calendar';
import { Input, InputEvent, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './Monthpicker.styles';
import { MonthpickerLocalizationProps } from './localization';
import { getStringFromDate } from '../Utils/DateUtils';

export interface MonthpickerProps
    extends Omit<InputProps, 'value' | 'type' | 'onChange' | 'onPaste'>,
        MonthpickerLocalizationProps {
    value?: Date;

    /**
     * Отображение календаря
     */
    isCalendarOpen?: boolean;

    onChange?: (
        event: InputEvent<FormEvent<HTMLInputElement>> | Event | null,
        data: { value?: string; date?: Date; name?: string }
    ) => void;
    /**
     * Локаль календаря
     */
    locale?: Locale;
}

export const Monthpicker: FC<MonthpickerProps> = ({
    isCalendarOpen = false,
    name,
    size,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    localization,
    locale,
    ...attrs
}) => {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
    const datepickerEl = useRef<HTMLDivElement>(null);
    const [popperElement, setPopperElement] = useState(null);
    const [referenceElement, setReferenceElement] = useState(null);
    const containerPortal = usePortal('box', 'monthpicker-box');
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-start',
        modifiers: [{ name: 'offset', options: { offset: [0, 4] } }],
    });
    interface inputType {
        date: Date;
        value: string;
    }

    const initializedValue = useMemo(() => {
        return value ? { date: value, value: format(value, 'LLLL yyyy', { locale: ru }) } : '';
    }, [value]);

    const [inputValue, setInputValue] = useState<inputType | string | (() => inputType)>(initializedValue);
    const [active, setActive] = useState(false);

    const handleInputFocus = useCallback(
        (event, data) => {
            if (typeof onFocus === 'function') {
                onFocus(event, { value: data.value, name });
            }
            setOpen(true);
        },
        [name, onFocus]
    );

    const handleClickDateIcon = useCallback(
        (e) => {
            e.stopPropagation();
            setOpen(!isOpen);
        },
        [isOpen]
    );

    const handleClickInput = useCallback(() => {
        if (active) {
            setOpen(true);
        }
    }, [isOpen, active]);

    const handleClickMonth = useCallback(
        (event, { date, value }) => {
            if (date) {
                setInputValue({ date, value });
                if (typeof onChange === 'function') {
                    onChange(event, { value: value, date, name });
                }
                setOpen(false);
                setActive(true);
            }
        },
        [name, isOpen, active, onChange]
    );

    const handleChangeInput = useCallback(
        (event, value) => {
            if (typeof onChange === 'function') {
                onChange(event, value);
            }
        },
        [name, onChange, value]
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

    const handleBlur = useCallback(
        (event) => {
            if (typeof onBlur === 'function') {
                onBlur(event, {
                    value: typeof value === 'string' ? value : getStringFromDate(value as Date),
                    name,
                });
            }
            setOpen(false);
            setActive(false);
        },
        [onBlur, value, name, active]
    );

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

    const handleMouseDownCalendar = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <Box ref={setReferenceElement as any} id='monthpicker-box' onBlur={handleBlur} onClick={handleClickInput}>
            <InputBox>
                <Input
                    {...(attrs as {})}
                    postfix={
                        <CalendarIcon
                            size={size === 'xxl' ? 'xl' : (size as CalendarProps['size'])}
                            cursor='pointer'
                            onClick={handleClickDateIcon}
                        />
                    }
                    active={active}
                    size={size}
                    name={name}
                    value={
                        inputValue &&
                        `${(inputValue as any).value?.split('')[0]?.toUpperCase()}${(inputValue as any).value?.slice(
                            1
                        )}`
                    }
                    placeholder='Выберите месяц'
                    onChange={handleChangeInput}
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                />
            </InputBox>
            {isOpen &&
                ReactDOM.createPortal(
                    <CalendarBox
                        ref={setPopperElement as any}
                        style={styles.popper}
                        onMouseDown={handleMouseDownCalendar}
                        {...attributes.popper}>
                        <Calendar
                            mode='month'
                            date={(inputValue as any)?.date}
                            locale={locale}
                            localization={localization}
                            onChangeMonth={handleClickMonth}
                        />
                    </CalendarBox>,
                    containerPortal ?? document.body
                )}
        </Box>
    );
};

Monthpicker.displayName = 'Monthpicker';
