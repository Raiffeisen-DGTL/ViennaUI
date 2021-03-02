import React, { useState, useCallback } from 'react';
import InputMask, { InputMaskProps, Data } from '../../InputMask';
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
    to?: Date | DateValue;
}
export type InputDateRangeChangeEvent = (
    event: React.FormEvent<HTMLInputElement> | Event,
    data: Data & { valueAsDate: DateType }
) => void;

interface Props extends Omit<InputMaskProps, 'min' | 'max' | 'onChange'>, InputDateRangeLocalizationProps {
    min?: Date;
    max?: Date;
    valueAsDate?: DateType;
    placeholderMask?: string;
    onChange?: InputDateRangeChangeEvent;
}
type InputDateRangeMaskType = 'from' | 'from - ' | 'from - to';

type InputDateRangePlaceholderType = 'date' | 'date.separator' | 'date.range';

const getInputFormattedValueAndMask = (
    value?: string,
    min?: Date,
    max?: Date,
    active?: boolean
): [InputDateRangeMaskType, InputDateRangePlaceholderType, string, any] => {
    const dateArray = value ? value.replace(/\s+/g, '').split('-') : [''];

    let mask: InputDateRangeMaskType;
    let placeholderType: InputDateRangePlaceholderType;
    let blocks: any;

    // 10 так как в дате 10 символов (ДД.ММ.ГГГГ)
    if (dateArray.length === 1 && dateArray[0].length === 10 && active) {
        mask = 'from - ';
        placeholderType = 'date.separator';
        blocks = { from: { mask: Date, min, max } };
    } else if (dateArray.length === 2 && dateArray[0].length >= 10) {
        mask = 'from - to';
        placeholderType = 'date.range';
        // TODO: идея в том что бы минимальный и максимальный диапазоны ставились автоматически, но пока это сбрасывает маску
        blocks = {
            from: { mask: Date, min, max },
            to: { mask: Date, min, max },
        };
    } else {
        mask = 'from';
        placeholderType = 'date';
        blocks = { from: { mask: Date, min, max } };
    }

    return [mask, placeholderType, dateArray[1] ? `${dateArray[0]} - ${dateArray[1]}` : dateArray[0], blocks];
};

const dateRegexp = /(..)\.(..)\.(....)/g;
export const InputDateRange = React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const { name, size, min, max, value, onChange, onFocus, onBlur, ...attrs } = props;

    const localize = useLocalization(props, defaultInputDateRangeLocalization);

    const [active, setActive] = useState(false);

    const handleFocus = useCallback(
        (e) => {
            setActive(true);
            if (typeof onFocus === 'function') {
                onFocus(e, { name, value: value ?? '' });
            }
        },
        [onFocus, name, value]
    );

    const handleBlur = useCallback(
        (e) => {
            setActive(false);
            if (typeof onBlur === 'function') {
                onBlur(e, { name, value: value ?? '' });
            }
        },
        [onBlur, name, value]
    );

    const [mask, placeholderType, formatedValue, blocks] = getInputFormattedValueAndMask(value, min, max, active);

    const changeHandler = useCallback(
        (e, data) => {
            const dateObj: DateType = { from: undefined, to: undefined };
            if (typeof onChange === 'function') {
                if (data.value) {
                    const dateArr = data.value.replace(/ /g, '').split('–');
                    dateObj.from = new Date(dateArr[0]?.replace(dateRegexp, '$2-$1-$3'));
                    dateObj.to = new Date(dateArr[1]?.replace(dateRegexp, '$2-$1-$3'));
                    // [1] – так как в компоненте ввода двух дат, можно ввести только две даты
                    if (!dateArr[1] && value && value.length > data.value.length) {
                        data.value = data.value.replace('–', '').trim();
                    }
                }
                onChange(e, { valueAsDate: dateObj, ...data, value: data?.value?.replace('–', '-') });
            }
        },
        [onChange, value]
    );

    let placeholder = localize(`ds.inputDateRange.placeholder.${placeholderType}` as keyof InputDateRangeLocalization);
    if (formatedValue) {
        placeholder = `${formatedValue}${placeholder.substring(formatedValue.length, placeholder.length + 1)}`;
    }

    return (
        <Box>
            <InputMask
                ref={ref}
                size={size}
                mask={mask}
                value={formatedValue}
                smartPlaceholder={placeholder}
                blocks={blocks}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={changeHandler}
                {...attrs}
            />
        </Box>
    );
});

InputDateRange.displayName = 'InputDateRange';
export default InputDateRange;
