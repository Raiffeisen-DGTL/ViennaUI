import React, { forwardRef, useMemo } from 'react';
import { ReactMaskProps } from 'react-imask';
import { createMask, FactoryOpts, InputElement } from 'imask';
import { Input, InputProps } from '../Input';
import { useMask } from '../Utils/useMask';
import { composeRef, OnChangeHandler, Pretty } from '../Utils';
import { ViewOnly } from '@/ViewOnly';
import { getViewOnlySize } from '@/ViewOnly/utils';

export type InputMaskEventType = InputEvent | undefined;
export interface InputMaskEventOptionsType {
    name?: string;
    isComplete: boolean;
    unmaskedValue?: unknown;
}
export type InputMaskOnChangeType<T = string | number | null> = OnChangeHandler<
    T,
    InputMaskEventType,
    InputMaskEventOptionsType
>;

export interface InputMaskProps<Opts extends FactoryOpts = FactoryOpts>
    extends Omit<InputProps, 'value' | 'onChange'>,
        Partial<Pick<ReactMaskProps<InputElement, Opts>, 'onComplete'>> {
    maskOptions: Opts;
    value?: string | number | Date | null;
    readOnly?: boolean;
    onChange?: InputMaskOnChangeType;
}

export namespace InputMask {
    export type onChange = Pretty.Func<InputMaskOnChangeType>;
}

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
    (
        {
            value: externalValue,
            name,
            size = 'l',
            design = 'outline',
            maskOptions,
            viewOnly,
            viewOnlyText,
            onChange,
            onComplete,
            ...rest
        },
        externalRef
    ) => {
        const { ref } = useMask({
            maskOptions,
            externalValue,
            name,
            onChange,
            onComplete,
            viewOnly,
        });
        const maskValue = useMemo(() => {
            const imask = createMask(maskOptions);

            if (externalValue !== null && externalValue !== undefined) {
                imask.typedValue = externalValue ?? '';
            }
            return imask.value;
        }, [externalValue, maskOptions]);

        if (viewOnly) {
            return <ViewOnly size={getViewOnlySize(size)}>{viewOnlyText ?? maskValue}</ViewOnly>;
        }

        return <Input name={name} size={size} design={design} {...rest} ref={composeRef(ref, externalRef)} />;
    }
);

InputMask.displayName = 'InputMask';
export default InputMask;
