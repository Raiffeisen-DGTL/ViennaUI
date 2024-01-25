import React, { useCallback, forwardRef } from 'react';
import { parse } from 'date-fns';
import { InputMask, InputMaskProps } from '../../InputMask';
import { Box } from './InputDateRange.styles';
import {
    InputDateRangeLocalizationProps,
    InputDateRangeLocalization,
    defaultInputDateRangeLocalization,
} from './localization';
import { DateValue } from '../../../Calendar';
import { useLocalization } from '../../../Localization';

export interface DateType {
    from?: Date | DateValue;
    to?: Date | DateValue | string | number;
}

export interface InputDateRangeProps extends Omit<InputMaskProps, 'min' | 'max' | 'maskOptions'>, InputDateRangeLocalizationProps {
    min?: Date;
    max?: Date;
    valueAsDate?: DateType;
    placeholderMask?: string;
}
type InputDateRangeMaskType = 'from' | 'from - ' | 'from {-} to';

type InputDateRangePlaceholderType = 'date' | 'date.separator' | 'date.range';

const getInputFormattedValueAndMask = (
    value?: string,
    min?: Date,
    max?: Date
): [InputDateRangeMaskType, InputDateRangePlaceholderType, string, any] => {
    const dateArray = value ? value.replace(/\s+/g, '').split('-') : [''];

    let mask: InputDateRangeMaskType;
    let placeholderType: InputDateRangePlaceholderType = 'date';
    let blocks: any;

    if (dateArray.length >= 1 && dateArray[0].length === 10) {
        mask = 'from {-} to';
        // TODO: идея в том что бы минимальный и максимальный диапазоны ставились автоматически, но пока это сбрасывает маску
        blocks = {
            from: { mask: Date, min, max },
            to: { mask: Date, min, max },
        };
        if (dateArray[1]?.length > 0) {
            placeholderType = 'date.range';
        }
    } else {
        mask = 'from';
        blocks = { from: { mask: Date, min, max } };
    }

    return [mask, placeholderType, dateArray[1] ? `${dateArray[0]} - ${dateArray[1]}` : dateArray[0], blocks];
};

const dateRegexp = /\d{2}\.\d{2}\.\d{4}/g;
export const InputDateRange = forwardRef<HTMLInputElement, InputDateRangeProps>((props, ref) => {
    const { name, size, min, max, value, onChange, onFocus, onBlur, localization, ...attrs } = props;

    const l10n = useLocalization(localization, defaultInputDateRangeLocalization);

    const handleFocus = useCallback(
        (e) => {
            if (typeof onFocus === 'function') {
                onFocus(e, { name, value: value as string ?? '' });
            }
        },
        [onFocus, name, value]
    );

    const handleBlur = useCallback(
        (e) => {
            if (typeof onBlur === 'function') {
                onBlur(e, { name, value: value as string ?? '' });
            }
        },
        [onBlur, name, value]
    );

    const [mask, placeholderType, formattedValue, blocks] = getInputFormattedValueAndMask(value as string, min, max);

    const changeHandler = useCallback(
        (eventValue) => {
            if (typeof onChange === 'function') {
                if (eventValue) {
                    const dateArr = eventValue.replace(/ /g, '').match(dateRegexp) || [];
                    const [dateFrom, dateTo] = dateArr;

                    const parsedDateFrom = dateFrom && parse(dateFrom, 'dd.MM.yyyy', new Date());
                    const parsedDateTo = dateTo && parse(dateTo, 'dd.MM.yyyy', new Date());
                    // Если пользователь ввёл дату окончания более раннюю чем дату начала, то меняем их местами
                    if (parsedDateFrom && parsedDateTo && parsedDateFrom > parsedDateTo) {
                        eventValue = `${dateTo} - ${dateFrom}`;
                    }

                    // [1] – так как в компоненте ввода двух дат, можно ввести только две даты
                    if (!dateArr[1] && value && (value as string).length > eventValue.length) {
                        eventValue = eventValue.replace('–', '').trim();
                    }
                }
                onChange(eventValue?.replace('–', '-'));
            }
        },
        [onChange, value]
    );

    let placeholder = l10n(`ds.inputDateRange.placeholder.${placeholderType}` as keyof InputDateRangeLocalization);
    if (formattedValue) {
        placeholder = `${formattedValue}${placeholder.substring(formattedValue.length, placeholder.length + 1)}`;
    }

    return (
        <Box>
            <InputMask
                ref={ref}
                size={size}
                maskOptions={{
                    mask,
                    blocks
                }}
                value={formattedValue}
                smartPlaceholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={changeHandler}
                {...attrs}
            />
        </Box>
    );
});

InputDateRange.displayName = 'InputDateRange';
