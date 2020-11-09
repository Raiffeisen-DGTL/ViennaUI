import React from 'react';
import { MaskedRange } from 'imask';
import InputMask, { InputMaskProps } from '../../InputMask';

interface Props extends Omit<InputMaskProps, 'type' | 'value' | 'min' | 'max'> {
    /** Вариант маски (date по умолчанию) */
    type?: 'date' | 'time' | 'datetime';
    value?: string | Date;
    min?: Date;
    max?: Date;
}

const mask = (type, min, max): any => {
    // Включаем сами значения в диапазон
    const normilizeMin = min ? new Date(min.setHours(0, 0, 0, 0)) : new Date(1900, 0, 1);
    const normilizeMax = max ? new Date(max.setHours(23, 59, 59, 999)) : new Date(9999, 0, 1);

    switch (type) {
        case 'time':
            return {
                placeholderMask: 'ЧЧ:ММ',
                mask: 'HH:MM',
                blocks: {
                    HH: {
                        mask: MaskedRange,
                        from: 0,
                        to: 23,
                    },
                    MM: {
                        mask: MaskedRange,
                        from: 0,
                        to: 59,
                    },
                },
            };
        case 'datetime':
            return {
                placeholderMask: 'ДД.ММ.ГГГГ ЧЧ:ММ',
                mask: 'DATE HH:MM',
                blocks: {
                    DATE: {
                        mask: Date,
                        min: normilizeMin,
                        max: normilizeMax,
                    },
                    HH: {
                        mask: MaskedRange,
                        from: 0,
                        to: 23,
                    },
                    MM: {
                        mask: MaskedRange,
                        from: 0,
                        to: 59,
                    },
                },
            };
        case 'date':
        default:
            return {
                placeholderMask: 'ДД.ММ.ГГГГ',
                mask: 'DATE',
                blocks: {
                    DATE: {
                        mask: Date,
                        min: normilizeMin,
                        max: normilizeMax,
                    },
                },
                format: (date) => {
                    let day = date.getDate();
                    let month = date.getMonth() + 1;
                    const year = date.getFullYear();

                    if (day < 10) day = `0${day}`;
                    if (month < 10) month = `0${month}`;

                    return [day, month, year].join('.');
                },
                parse: (str) => {
                    const yearMonthDay = str.split('.');
                    const isYearSim = normilizeMin.getFullYear() === normilizeMax.getFullYear();
                    const date = new Date(
                        isYearSim ? normilizeMin.getFullYear() : yearMonthDay[2],
                        yearMonthDay[1] - 1,
                        yearMonthDay[0]
                    );
                    return date;
                },
            };
    }
};

const format = (value: any) => (value.toString().length >= 2 ? value : `0${value}`);

const formatValue = (value?: string | Date, type?: 'date' | 'time' | 'datetime') => {
    if (value instanceof Date) {
        // методы toIsoString/toGMTString toUTCString - возвращают время и дату без поправки на локальную временную зону
        // метод toLocalString - возвращает в локальном формате и невозможно применить общую регулярку
        // оставшиеся методы возвращают number, который необходимо дополнить первым 0 если это необходимо
        const day = format(value.getDate());
        const month = format(value.getMonth() + 1);
        const year = format(value.getFullYear());
        const hours = format(value.getHours());
        const minutes = format(value.getMinutes());
        value = `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    const result = value ?? '';

    switch (type) {
        case 'date':
            return result.split(' ')[0];
        case 'time':
            return result.split(' ')[1] || result;
        case 'datetime':
        default:
            return result;
    }
};

export const InputDate = React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const { min, max, type = 'date', value, lazy = true, ...attrs } = props;
    const { placeholderMask, ...maskProps } = mask(type, min, max);

    const formatted = (value && formatValue(value, type)) || '';
    const placeholder = `${formatted}${placeholderMask.substring(formatted.length, placeholderMask.length + 1)}`;

    return (
        <InputMask
            smartPlaceholder={lazy ? placeholder : ''}
            ref={ref}
            value={formatted}
            lazy={lazy}
            {...maskProps}
            {...attrs}
        />
    );
});

InputDate.displayName = 'InputDate';
export default InputDate;
