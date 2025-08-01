import React, { forwardRef, RefAttributes } from 'react';
import InputMask, { InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { InputNumberProps } from '../InputNumber/InputNumber';
import { omit } from '../../../Utils';
import { InputProps } from '../../../Input';

export type InputDigitalProps<Value = number | null | string> = {
    value: Value;
    onChange?: InputMaskOnChangeType;
} & Omit<InputNumberProps, 'value' | 'onChange' | 'scale' | 'mask' | 'delimiter' | 'mapToRadix' | 'padFractionalZeros'>;

const formatNumberWithThousandsSeparator = (string: string, separator: string): string => {
    return string.replace(/[^-\d]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

const getRegEx = (separator: string) => {
    const sep = separator.replace(' ', '\\s');
    return new RegExp(`^-?[\\d${sep}]*$`);
};

export const InputDigital = forwardRef<HTMLInputElement, InputDigitalProps>((props, ref) => {
    const { value, onChange, onBlur, thousandsSeparator = '', min, max, ...remainingProps } = props;
    const isStringValue = typeof value === 'string';
    const mask = thousandsSeparator === '' ? /^-?\d*$/ : getRegEx(thousandsSeparator);

    const changeHandler: InputMaskProps['onChange'] = ({ value, event, options }) => {
        if (value === undefined || value === null || value === '') {
            if (onChange) {
                onChange({ value: null, event, options });
            }
            return;
        }
        if (typeof value !== 'string' && typeof value !== 'number') return;
        if (typeof value === 'string' && onChange) {
            onChange({ value: formatNumberWithThousandsSeparator(value, thousandsSeparator), event, options });
        } else if (onChange) {
            onChange({ value, event, options });
        }
    };

    const blurHandler: InputProps['onBlur'] = (event, data) => {
        if (isStringValue && onChange && min && parseInt(value, 10) < min) {
            onChange({
                value: String(min),
                event: undefined,
                options: {
                    name: data.name,
                    unmaskedValue: max,
                    isComplete: true,
                },
            });
        }
        if (isStringValue && onChange && max && parseInt(value, 10) > max) {
            onChange({
                value: String(max),
                event: undefined,
                options: {
                    name: data.name,
                    unmaskedValue: max,
                    isComplete: true,
                },
            });
        }
        if (onBlur) {
            onBlur(event, data);
        }
    };

    return (
        <InputMask
            ref={ref}
            maskOptions={
                isStringValue
                    ? {
                          mask,
                      }
                    : {
                          mask: Number,
                          thousandsSeparator,
                          scale: 0,
                          min,
                          max,
                      }
            }
            value={value ?? ''}
            onChange={changeHandler}
            onBlur={blurHandler}
            {...omit(remainingProps, 'ref')}
        />
    );
}) as unknown as (<ValueType>(
    props: InputDigitalProps<ValueType> & RefAttributes<HTMLDivElement>
) => React.ReactElement) & {
    displayName?: string;
};

InputDigital.displayName = 'InputDigital';
