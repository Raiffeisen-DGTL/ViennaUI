import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDrop } from 'vienna.react-use';
import { format, Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'vienna.icons';
import { Calendar } from '../Calendar';
import { Input, InputEvent, InputProps } from '../Input';
import { Box, InputBox, CalendarBox } from './Monthpicker.styles';
import { MonthpickerLocalizationProps } from './localization';

export interface MonthpickerProps
    extends Omit<InputProps, 'value' | 'type' | 'onChange' | 'onPaste'>,
        MonthpickerLocalizationProps {
    value?: Date;

    /**
     * Отображение календаря
     */
    isCalendarOpen?: boolean;

    onChange?: (
        event: InputEvent<React.FormEvent<HTMLInputElement>> | Event | null,
        data: { value?: string; date?: Date; name?: string }
    ) => void;
    /**
     * Локаль календаря
     */
    locale?: Locale;
}

export const Monthpicker: React.FC<MonthpickerProps> = ({
    isCalendarOpen,
    name,
    size,
    value,
    onChange,
    onFocus,
    onKeyPress,
    localization,
    locale,
    ...attrs
}: MonthpickerProps): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean | undefined>(isCalendarOpen);
    const datepickerEl = useRef<HTMLDivElement>(null);
    const calendarRef = useDrop({ align: 'vertical', float: 'start', margins: { x: 0, y: 4 } });

    const initializedValue = useMemo(() => {
        return value ? { date: value, value: format(value, 'LLLL yyyy', { locale: ru }) } : '';
    }, [value]);
    const [inputValue, setInputValue] = useState<any>(initializedValue);

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

    const handleClickMonth = useCallback(
        (event, { date, value }) => {
            if (date) {
                setInputValue({ date, value });
                if (typeof onChange === 'function') {
                    onChange(event, { value: value, date, name });
                }
                setOpen(false);
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

    return (
        <Box ref={datepickerEl}>
            <InputBox>
                <Input
                    postfix={<CalendarIcon size={size === 'xxl' ? 'xl' : size} onClick={handleClickDateIcon} />}
                    size={size}
                    name={name}
                    value={
                        inputValue && `${inputValue.value?.split('')[0]?.toUpperCase()}${inputValue.value?.slice(1)}`
                    }
                    placeholder='Выберите месяц'
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                    {...attrs}
                />
            </InputBox>
            {isOpen && (
                <CalendarBox ref={calendarRef}>
                    <Calendar
                        mode='month'
                        date={inputValue?.date}
                        locale={locale}
                        localization={localization}
                        onChangeMonth={handleClickMonth}
                    />
                </CalendarBox>
            )}
        </Box>
    );
};

Monthpicker.displayName = 'Monthpicker';
Monthpicker.defaultProps = {
    isCalendarOpen: false,
};

export default Monthpicker;
