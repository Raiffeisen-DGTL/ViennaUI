import React, { useState, useCallback, useEffect, FC, forwardRef, FocusEvent, useMemo } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';
import { converterStringToNumberOrNull, converterNumberOrNullToString } from '../../../Utils/converter';

export type InputNumberProps = Omit<InputMaskProps, 'value' | 'maxLength' | 'maskOptions' | 'onChange'> &
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
        onChange?: (value: number | null) => void;
    };

export const InputNumber: FC<InputNumberProps> = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
    const {
        onFocus,
        onBlur,
        onChange,
        name,
        delimiter = ',',
        scale = 0,
        thousandsSeparator = ' ',
        padFractionalZeros,
        value,
        ...attrs
    } = props;

    const [dynamicThousandsSeparator, setDynamicThousandsSeparator] = useState(thousandsSeparator);
    const [innerPadFractionalZeros, setPadFractionalZeros] = useState(scale !== 0);
    const [normalizeZeros, setNormalizeZeros] = useState(true);

    useEffect(() => {
        setPadFractionalZeros(scale !== 0);
    }, [scale]);

    useEffect(() => {
        setDynamicThousandsSeparator(thousandsSeparator);
    }, [thousandsSeparator]);

    const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
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
        (event: FocusEvent<HTMLInputElement>) => {
            setDynamicThousandsSeparator('');
            setPadFractionalZeros(false);
            setNormalizeZeros(false);
            if (typeof onFocus === 'function') {
                onFocus(event, { name, value: event.target.value });
            }
        },
        [onFocus, name]
    );

    const maskOptions = {
        // @ts-ignore
        ...getMaskOptionsFromProps(props),
        radix: delimiter,
        thousandsSeparator: dynamicThousandsSeparator,
        padFractionalZeros: padFractionalZeros ?? innerPadFractionalZeros,
    };

    const computedValue: string = useMemo(() => {
        return converterNumberOrNullToString(value);
    }, [value]);

    const changeHandler = (value: string) => {
        if (onChange) {
            onChange(converterStringToNumberOrNull(value));
        }
    };

    return (
        <InputMask
            {...attrs}
            ref={ref}
            name={name}
            value={computedValue}
            // @ts-ignore
            maskOptions={{
                ...maskOptions,
                mask: maskOptions.mask || Number,
                radix: delimiter,
                mapToRadix: maskOptions.mapToRadix || [',', '.'],
                prepare:
                    maskOptions.prepare ||
                    ((value: string): string => {
                        return value.replace(/\.|,/gm, delimiter);
                    }),
                normalizeZeros,
                scale,
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={changeHandler as (value: unknown) => void}
        />
    );
});

InputNumber.displayName = 'InputNumber';
