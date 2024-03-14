import React, { Ref, forwardRef, useEffect } from 'react';
import { ReactMaskProps } from 'react-imask';
import { FactoryOpts, InputElement } from 'imask';
import { Input, InputProps } from '../Input';
import { useMask } from '../Utils/useMask';

export type InputMaskProps<Opts extends FactoryOpts = FactoryOpts> = Omit<InputProps, 'value' | 'onChange'> &
    Partial<Pick<ReactMaskProps<InputElement, Opts>, 'onComplete'>> & {
        maskOptions: Opts;
        value?: unknown;
        onChange?: (value: unknown) => void;
    };

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
    ({ value: externalValue, maskOptions, onChange, onComplete, ...rest }, externalRef) => {
        const { ref, value, setValue, setTypedValue, maskRef } = useMask({
            maskOptions,
            externalValue,
            onChange,
            onComplete,
        });

        useEffect(() => {
            if (typeof externalValue === 'string') {
                setValue(externalValue);
            } else {
                setTypedValue(externalValue);
            }
        }, [externalValue]);

        useEffect(() => {
            if (value === '') {
                maskRef.current?.updateValue();
            }
        }, [value]);

        return <Input value={value} {...rest} ref={composeRef(ref, externalRef)} />;
    }
);

InputMask.displayName = 'InputMask';
InputMask.defaultProps = {
    size: 'l',
    design: 'outline',
};

export default InputMask;

function composeRef<T>(...refs: Ref<T>[]): Ref<T> {
    if (refs.length <= 1) {
        return refs[0];
    }

    return (node: T) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(node);
            } else if (typeof ref === 'object' && ref && 'current' in ref) {
                (ref as unknown as Record<string, T>).current = node;
            }
        });
    };
}
