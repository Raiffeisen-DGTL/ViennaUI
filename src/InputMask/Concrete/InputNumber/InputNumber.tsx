import React, { useState, useCallback, FC, forwardRef, FocusEvent } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputNumberProps = Omit<InputMaskProps, 'value' | 'maskOptions' | 'onChange'> &
    FactoryOpts & {
        /** Разделитель разряда */
        delimiter?: '.' | ',';
        value?: number | null;
        /** Число значение в дробной части после запятой */
        scale?: number;
        /** Разделитель тысячных */
        thousandsSeparator?: string;
        /** По умолчанию true: дополняет нули в конце до длины scaleMutator */
        padFractionalZeros?: boolean;
        min?: number;
        max?: number;
        /** По умолчанию false: если true, то при вводе значения (при фокусе) сохраняется маска */
        isFocusAllowMask?: boolean;
        onChange?: InputMaskOnChangeType<number | null>;
        mapToRadix?: string[];
    };

export const InputNumber: FC<InputNumberProps> = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
    const {
        onFocus,
        onBlur,
        onChange,
        name,
        mapToRadix = [',', '.'],
        delimiter = ',',
        scale = 0,
        thousandsSeparator: externalThousandsSeparator = ' ',
        padFractionalZeros: externalPadFractionalZeros,
        value,
        isFocusAllowMask,
        ...attrs
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const thousandsSeparator = isFocused ? '' : externalThousandsSeparator;
    const internalPadFractionalZeros = isFocused ? false : scale !== 0;
    const padFractionalZeros = externalPadFractionalZeros ?? internalPadFractionalZeros;

    const handleBlur = useCallback<NonNullable<InputMaskProps['onBlur']>>(
        (event) => {
            setIsFocused(false);

            onBlur?.(event, { name, value: (event.target as HTMLInputElement).value });
        },
        [onBlur, name]
    );

    const handleFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (!isFocusAllowMask) setIsFocused(true);

            onFocus?.(event, { name, value: event.target.value });
        },
        [onFocus, name, isFocusAllowMask]
    );

    const handleChange: InputMaskProps['onChange'] = ({ value, event, options }) => {
        if (typeof value === 'string' || !onChange) return;
        onChange({ value, event, options });
    };

    return (
        <InputMask
            {...attrs}
            ref={ref}
            name={name}
            value={value ?? ''}
            maskOptions={{
                mask: Number,
                mapToRadix,
                prepare: (value) => value.replace(/\.|,/gm, delimiter),
                ...getMaskOptionsFromProps(props),
                radix: delimiter,
                thousandsSeparator,
                padFractionalZeros,
                normalizeZeros: !isFocused,
                scale,
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
        />
    );
});

InputNumber.displayName = 'InputNumber';
