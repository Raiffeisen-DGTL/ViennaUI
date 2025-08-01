import React, { ComponentProps, forwardRef } from 'react';
import { InputDateBetaLocalizationProps, defaultInputDateBetaLocalization } from './localization';
import { InputFormatBeta } from '../InputFormatBeta';
import { useLocalization } from '../Localization';

type TypeProp = 'date' | 'time' | 'datetime';

interface Props
    extends Omit<ComponentProps<typeof InputFormatBeta>, 'type' | 'value' | 'min' | 'max'>,
        InputDateBetaLocalizationProps {
    /** Вариант маски (date по умолчанию) */
    type?: TypeProp;
    value?: string | Date;
    lazy?: boolean;
}

const format = (value: number) => (value.toString().length >= 2 ? value : `0${value}`);

const formatValue = (value?: string | Date, type?: TypeProp) => {
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

const getFormat = (type: TypeProp) => {
    switch (type) {
        case 'datetime':
            return '##.##.#### ##:##';
        case 'time':
            return '##:##';
        case 'date':
        default:
            return '##.##.####';
    }
};

const getMask = (type: TypeProp) => {
    return defaultInputDateBetaLocalization[`ds.inputDate.placeholder.${type}`]
        ?.split('')
        .filter((i) => ![' ', ':', '.'].includes(i));
};

export const InputDateBeta = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { type = 'date', value, lazy = true, onChange, localization, ...attrs } = props;
    const l10n = useLocalization(localization, defaultInputDateBetaLocalization);
    const format = getFormat(type);
    const mask = getMask(type);

    const formatted = (value && formatValue(value, type)) || '';
    const placeholderMask: string = l10n(`ds.inputDate.placeholder.${type}`);
    const placeholder = `${formatted}${placeholderMask.substring(formatted.length, placeholderMask.length + 1)}`;

    return (
        <InputFormatBeta
            {...attrs}
            smartPlaceholder={lazy ? placeholder : ''}
            getInputRef={ref}
            value={formatted}
            format={format}
            mask={mask}
            onChange={onChange}
        />
    );
});

InputDateBeta.displayName = 'InputDateBeta';
