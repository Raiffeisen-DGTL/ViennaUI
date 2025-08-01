import React, { forwardRef } from 'react';
import { parse } from 'date-fns';
import { InputMask, InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { Box } from './InputDateRange.styles';
import {
    InputDateRangeLocalizationProps,
    InputDateRangeLocalization,
    defaultInputDateRangeLocalization,
} from './localization';
import { CalendarDateValue } from '../../../Calendar';
import { useLocalization } from '../../../Localization';
import { dateFormat } from '../../utils';
import { BlockExtraOptions } from 'imask/esm/masked/pattern';
import { ExtendFactoryArgOptions } from 'imask/esm/masked/factory';

export interface DateType {
    from?: Date | CalendarDateValue;
    to?: Date | CalendarDateValue | string | number;
}

export interface InputDateRangeProps
    extends Omit<InputMaskProps, 'min' | 'max' | 'maskOptions' | 'onChange'>,
        InputDateRangeLocalizationProps {
    min?: Date;
    max?: Date;
    valueAsDate?: DateType;
    placeholderMask?: string;
    onChange?: InputMaskOnChangeType<string | null>;
}
type InputDateRangeMaskType = 'from' | 'from - ' | 'from {-} to';

type InputDateRangePlaceholderType = 'date' | 'date.separator' | 'date.range';

interface MaskBlockType {
    mask: DateConstructor;
    format: (value: string | Date) => string;
    parse: (str: string) => Date;
}

interface MaskBlocksType {
    from: MaskBlockType;
    to: MaskBlockType;
}

const getInputFormattedValueAndMask = (
    value?: string,
    min?: Date,
    max?: Date
): [InputDateRangeMaskType, InputDateRangePlaceholderType, string, MaskBlocksType] => {
    const dateArray = value ? value.replace(/\s+/g, '').split('-') : [''];

    let mask: InputDateRangeMaskType;
    let placeholderType: InputDateRangePlaceholderType = 'date';
    const block = {
        mask: Date,
        format: (value: string | Date) => {
            return dateFormat(value);
        },
        parse: (str: string) => {
            const parsedDate = parse(str, 'dd.MM.yyyy', new Date());
            if (min && parsedDate.valueOf() < min.valueOf()) {
                return min;
            } else if (max && parsedDate.valueOf() > max.valueOf()) {
                return max;
            }
            return parsedDate;
        },
    };
    let blocks: MaskBlocksType;

    mask = 'from {-} to';
    // TODO: идея в том что бы минимальный и максимальный диапазоны ставились автоматически, но пока это сбрасывает маску
    blocks = {
        from: block,
        to: block,
    };
    if (dateArray[1]?.length > 0) {
        placeholderType = 'date.range';
    }

    return [mask, placeholderType, dateArray[1] ? `${dateArray[0]} - ${dateArray[1]}` : dateArray[0], blocks];
};

const dateRegexp = /\d{2}\.\d{2}\.\d{4}/g;
export const InputDateRange = forwardRef<HTMLInputElement, InputDateRangeProps>((props, ref) => {
    const { name, size, min, max, value, onChange, onFocus, onBlur, localization, ...attrs } = props;

    const l10n = useLocalization(localization, defaultInputDateRangeLocalization);

    const handleFocus: InputMaskProps['onFocus'] = (e) => {
        if (typeof onFocus === 'function') {
            onFocus(e, { name, value: (value as string) ?? '' });
        }
    };

    const handleBlur: InputMaskProps['onBlur'] = (e) => {
        if (typeof onBlur === 'function') {
            onBlur(e, { name, value: (value as string) ?? '' });
        }
    };

    const [mask, placeholderType, formattedValue, blocks] = getInputFormattedValueAndMask(value as string, min, max);

    const changeHandler: InputMaskProps['onChange'] = ({ value: eventValue, event, options }) => {
        if (typeof onChange === 'function' && (typeof eventValue === 'string' || eventValue === null)) {
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
            onChange({ value: eventValue?.replace('–', '-') || null, event, options });
        }
    };

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
                    blocks: blocks as unknown as { [key: string]: ExtendFactoryArgOptions<BlockExtraOptions> },
                }}
                value={formattedValue}
                placeholder={placeholder}
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
