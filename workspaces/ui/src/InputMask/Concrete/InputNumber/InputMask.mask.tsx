import React, { useCallback, useEffect, useRef } from 'react';
import IMask from 'imask';
import { IMaskProps } from 'vienna.react-use';
import { Input, InputProps } from '../../../Input/Input';

interface Data {
    name?: string;
    value: string | number | Date;
    originalValue?: any;
    maskedValue?: string;
}
export type InputMaskChangeEventTemp = (event: React.FormEvent<HTMLInputElement> | Event, data: Data) => void;

interface OmitedType extends Omit<InputProps, 'onChange' | 'onPaste'> {
    onChange?: InputMaskChangeEventTemp;
}
export type InputMaskPropsTemp = OmitedType & IMaskProps;
export const InputMaskTemp: React.FC<InputMaskPropsTemp> = React.forwardRef(
    (props: InputMaskPropsTemp, ref: React.Ref<HTMLInputElement>) => {
        const {
            // start mask props
            mask,
            blocks,
            lazy = false,
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

        const inputRef = useRef<any>();
        const maskRef = useRef<any>();

        useEffect(() => {
            if (inputRef.current) {
                if (typeof ref === 'function') {
                    ref(inputRef.current);
                } else if (ref?.current) {
                    (ref as any).current = inputRef.current;
                }
            }

            return () => {
                if (typeof ref === 'function') {
                    ref(null);
                } else if (ref?.current) {
                    (ref as any).current = null;
                }
            };
        }, [ref]);

        const handleChange = useCallback(
            (e) => {
                if (typeof onChange === 'function') {
                    onChange(e, {
                        name: name,
                        value: maskRef.current.value,
                        originalValue: maskRef.current.unmaskedValue,
                    });
                }
            },
            [onChange, name]
        );

        useEffect(() => {
            const inputRefCopy = inputRef;
            if (inputRef.current) {
                maskRef.current = IMask(inputRef.current, maskOptions);
                inputRef.current.addEventListener('input', handleChange);
            }

            return () => {
                maskRef.current.destroy();
                if (inputRefCopy.current) {
                    inputRefCopy.current.removeEventListener('input', handleChange);
                }
            };
        }, [handleChange, maskOptions]);

        useEffect(() => {
            if (maskRef.current) {
                maskRef.current.updateOptions(maskOptions);
                if (
                    value !== maskRef.current.value ||
                    (typeof value !== 'string' && maskRef.current.value === '' && !maskRef.current.el.isActive)
                ) {
                    maskRef.current.value = value === null ? '' : value;
                }
            }
        }, [value, maskOptions]);

        return <Input ref={inputRef} name={name} value={value} maxLength={maxLength} {...attrs} />;
    }
);

InputMaskTemp.displayName = 'InputMask';
InputMaskTemp.defaultProps = {
    size: 'l',
    design: 'outline',
};

export default InputMaskTemp;
