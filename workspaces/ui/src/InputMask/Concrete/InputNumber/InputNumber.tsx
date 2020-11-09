import React, { useState, useCallback } from 'react';
import InputMask, { InputMaskProps } from '../../InputMask';

const defaultOptions = (delimeter = '.') =>
    ({
        mask: Number,
        scale: 2,
        signed: false,
        radix: delimeter,
        mapToRadix: [',', '.'],
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
        prepare: (value: string): string => {
            return value.replace(/\.|,/gm, delimeter);
        },
    } as any);

interface InputNumberProps extends Omit<InputMaskProps, 'value'> {
    /** Разделитель разряда */
    delimeter?: '.' | ',';
    value?: number | string;
}

export const InputNumber = React.forwardRef((props: InputNumberProps, ref: React.Ref<HTMLInputElement>) => {
    const { onFocus, onBlur, name, delimeter, value, scale, thousandsSeparator = ' ', ...attrs } = props;

    const [dynamicThousandsSeparator, setDynamicThousandsSeparator] = useState(thousandsSeparator);
    const [padFractionalZeros, setPadFractionalZeros] = useState(scale !== 0);
    const [normalizeZeros, setNormalizeZeros] = useState(true);

    const handleBlur = useCallback(
        (event: React.FocusEvent<HTMLInputElement>) => {
            setDynamicThousandsSeparator(thousandsSeparator);
            setPadFractionalZeros(scale !== 0);
            setNormalizeZeros(true);
            if (typeof onBlur === 'function') {
                onBlur(event, { name, value: event.target.value });
            }
        },
        [onBlur, name, scale, thousandsSeparator]
    );

    const handleFocus = useCallback(
        (event: React.FocusEvent<HTMLInputElement>) => {
            setDynamicThousandsSeparator('');
            setPadFractionalZeros(false);
            setNormalizeZeros(false);
            if (typeof onFocus === 'function') {
                onFocus(event, { name, value: event.target.value });
            }
        },
        [onFocus, name]
    );

    // eslint-disable-next-line no-restricted-globals
    const preparedVlue = String(value);
    return (
        <InputMask
            ref={ref}
            name={name}
            value={preparedVlue}
            thousandsSeparator={dynamicThousandsSeparator}
            padFractionalZeros={padFractionalZeros}
            normalizeZeros={normalizeZeros}
            showMask={false}
            {...defaultOptions(delimeter)}
            scale={scale}
            {...attrs}
            onBlur={handleBlur}
            onFocus={handleFocus}
        />
    );
});

InputNumber.displayName = 'InputNumber';
InputNumber.defaultProps = {
    delimeter: ',',
    scale: 0,
};

export default InputNumber;
