import React, { useState, useCallback } from 'react';
import InputMask, { InputMaskProps, Data } from '../../InputMask';
import { Box } from './InputDateRange.styles';
import { getDateFromString } from '../../../Utils/DateUtils';
import { DateValue } from '../../../Calendar';

export interface DateType {
    from?: Date | DateValue;
    to?: Date | DateValue;
}
export type InputDateRangeChangeEvent = (
    event: React.FormEvent<HTMLInputElement> | Event,
    data: Data & { valueAsDate: DateType }
) => void;

interface Props extends Omit<InputMaskProps, 'min' | 'max' | 'onChange'> {
    min?: Date;
    max?: Date;
    valueAsDate?: DateType;
    placeholderMask?: string;
    onChange?: InputDateRangeChangeEvent;
}
type InputDateRangeMaskType = 'ДД.ММ.ГГГГ' | 'ДД.ММ.ГГГГ -' | 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ';

const getInputFormattedValueAndMask = (
    value?: string,
    min?: Date,
    max?: Date,
    active?: boolean
): [InputDateRangeMaskType, string, string, any] => {
    const dateArray = value ? value.replace(/\s+/g, '').split('-') : [''];
    const isStartDate = getDateFromString(dateArray[0]);

    let mask: any;
    let placeholderMask: any;
    let blocks: any;

    if (dateArray.length === 1 && isStartDate && active) {
        mask = 'from - ';
        placeholderMask = 'ДД.ММ.ГГГГ - ';
        blocks = { from: { mask: Date, min, max } };
    } else if (dateArray.length === 2) {
        mask = 'from - to';
        placeholderMask = 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ';
        // TODO: идея в том что бы минимальный и максимальный диапазоны ставились автоматически, но пока это сбрасывает маску
        blocks = {
            from: { mask: Date, min, max },
            to: { mask: Date, min, max },
        };
    } else {
        mask = 'from';
        placeholderMask = 'ДД.ММ.ГГГГ';
        blocks = { from: { mask: Date, min, max } };
    }

    return [mask, placeholderMask, dateArray[1] ? `${dateArray[0]} - ${dateArray[1]}` : dateArray[0], blocks];
};

const dateRegexp = /(..)\.(..)\.(....)/g;
export const InputDateRange = React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const { name, size, min, max, value, onChange, onFocus, onBlur, ...attrs } = props;

    const [active, setActive] = useState(false);

    const handleFocus = useCallback(
        (e) => {
            setActive(true);
            if (typeof onFocus === 'function') {
                onFocus(e, { name, value });
            }
        },
        [onFocus, name, value]
    );

    const handleBlur = useCallback(
        (e) => {
            setActive(false);
            if (typeof onBlur === 'function') {
                onBlur(e, { name, value });
            }
        },
        [onBlur, name, value]
    );

    const [mask, placeholderMask, formatedValue, blocks] = getInputFormattedValueAndMask(value, min, max, active);

    const changeHandler = useCallback(
        (e, data) => {
            const dateObj: DateType = { from: undefined, to: undefined };
            if (typeof onChange === 'function') {
                if (data.value) {
                    const dateArr = data.value.replace(/ /g, '').split('-');
                    dateObj.from = new Date(dateArr[0]?.replace(dateRegexp, '$2-$1-$3'));
                    dateObj.to = new Date(dateArr[1]?.replace(dateRegexp, '$2-$1-$3'));
                }
                onChange(e, { valueAsDate: dateObj, ...data });
            }
        },
        [onChange]
    );

    let placeholder = placeholderMask;
    if (formatedValue) {
        placeholder = `${formatedValue}${placeholderMask.substring(formatedValue.length, placeholderMask.length + 1)}`;
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
