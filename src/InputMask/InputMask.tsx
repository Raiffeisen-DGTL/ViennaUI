import React, { Ref, forwardRef, useEffect } from 'react';
import { useIMask, ReactMaskProps } from 'react-imask';
import { FactoryOpts, InputElement } from 'imask';
import { Input, InputProps } from '../Input';

export type InputMaskProps<Opts extends FactoryOpts = FactoryOpts> = Omit<InputProps, 'value' | 'onChange'> &
    Partial<Pick<ReactMaskProps<InputElement, Opts>, 'onComplete'>> & {
        maskOptions: Opts;
        value?: unknown;
        onChange?: (value: unknown) => void;
    };

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
    ({ value: externalValue, maskOptions, onChange, onComplete, ...rest }, externalRef) => {
        const onAccept = (maskedValue, maskRef, inputEvent) => {
            // вызываем onChange только на изменение инпута пользователем(в остальных случаях событие не приходит)
            if (inputEvent) {
                onChange?.(maskedValue);
            }
        };

        const { ref, value, setValue, setTypedValue, maskRef } = useIMask<HTMLInputElement, FactoryOpts>(maskOptions, {
            onAccept,
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
            maskRef.current?.updateValue();
            if (externalValue === '') {
                setValue('');
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
