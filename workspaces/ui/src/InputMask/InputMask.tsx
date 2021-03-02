import React, { useCallback, useEffect, useRef, useState, Ref } from 'react';
import IMask from 'imask';
import { IMaskProps, useMask } from 'vienna.react-use';
import { Input, InputProps } from '../Input/Input';

export interface Data {
    name?: string;
    value: string | number | Date;
    originalValue?: any;
    isComplete?: boolean;
}
export type InputMaskChangeEvent = (event: React.FormEvent<HTMLInputElement> | Event, data: Data) => void;

interface OmitedType extends Omit<InputProps, 'onChange'> {
    onChange?: InputMaskChangeEvent;
    showMask?: boolean;
    pipeRef?: Ref<{
        valueToMask: (string) => string;
        maskToValue: (string) => string;
        placeholder: (string) => string;
    }>;
}
export type InputMaskProps = OmitedType & IMaskProps;
export const InputMask: React.FC<InputMaskProps> = React.forwardRef(
    (props: InputMaskProps, ref: React.Ref<HTMLInputElement>) => {
        const {
            // start mask props
            mask,
            pipeRef,
            blocks,
            showMask = true,
            lazy = true,
            placeholderChar = '_',
            radix,
            thousandsSeparator,
            mapToRadix,
            min,
            max,
            scale,
            signed,
            normalizeZeros,
            padFractionalZeros,
            maxLength,
            from,
            to,
            prepare,
            format,
            parse,
            validate,
            autofix,
            overwrite,
            // end mask props
            value = '',
            name,
            onChange,
            ...attrs
        } = props;

        const maskOptions = {
            mask,
            blocks,
            lazy,
            autofix,
            overwrite,
            placeholderChar,
            radix,
            thousandsSeparator,
            mapToRadix,
            min,
            max,
            scale,
            signed,
            normalizeZeros,
            padFractionalZeros,
            maxLength,
            from,
            to,
            validate,
            prepare,
            format,
            parse,
        };

        // Если в маску передать значаения функций с undefined, то она возьмет это значение вместо правильного по умолчанию
        Object.keys(maskOptions).forEach((key) => {
            if (maskOptions[key] === undefined) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete maskOptions[key];
            }
        });

        const inputRef = useRef<any>();
        const maskRef = useRef<any>();
        const [realValue, setRealValue] = useState(value);
        const [valueToMask, maskToValue, placeholder] = useMask(maskOptions);

        useEffect(() => {
            if (inputRef.current) {
                if (typeof ref === 'function') {
                    ref(inputRef.current);
                } else if (ref && 'current' in ref) {
                    (ref as any).current = inputRef.current;
                }
            }

            return () => {
                if (typeof ref === 'function') {
                    ref(null);
                } else if (ref && 'current' in ref) {
                    (ref as any).current = null;
                }
            };
        }, [ref]);

        if (typeof pipeRef === 'function') {
            pipeRef({ valueToMask, maskToValue, placeholder });
        } else if (pipeRef && 'current' in pipeRef) {
            // eslint-disable-next-line
            (pipeRef as any).current = { valueToMask, maskToValue, placeholder };
        }

        const handleChange = useCallback(
            (e) => {
                if (typeof onChange === 'function') {
                    onChange(e, {
                        name: name,
                        value: maskRef.current.value,
                        originalValue: maskRef.current.unmaskedValue,
                        isComplete: maskRef.current.masked.isComplete,
                    });
                }
            },
            [onChange, name]
        );

        useEffect(() => {
            if (inputRef.current) {
                maskRef.current = IMask(inputRef.current, maskOptions);
            }

            return () => {
                maskRef.current.destroy();
            };
        }, []);

        useEffect(() => {
            const inputRefCopy = inputRef;
            if (inputRef.current) {
                inputRef.current.addEventListener('input', handleChange);
            }

            return () => {
                if (inputRefCopy.current) {
                    inputRefCopy.current.removeEventListener('input', handleChange);
                }
            };
        }, [handleChange]);

        useEffect(() => {
            if (maskRef.current) {
                maskRef.current.updateOptions(maskOptions);
            }
        }, [maskOptions]);

        const syncMask = useCallback(() => {
            if (maskRef.current) {
                maskRef.current.el.value = value;
                maskRef.current.unmaskedValue = value;
                maskRef.current.value = value;
                maskRef.current.updateValue();
                setRealValue(maskRef.current.value);
            }
        }, [value]);

        useEffect(syncMask, [syncMask]);

        return (
            <Input
                ref={inputRef}
                smartPlaceholder={showMask && value && placeholder(value)}
                value={realValue}
                name={name}
                maxLength={maxLength}
                onChange={syncMask}
                onUpdated={syncMask}
                {...attrs}
            />
        );
    }
);

InputMask.displayName = 'InputMask';
InputMask.defaultProps = {
    size: 'l',
    design: 'outline',
};

export default InputMask;
