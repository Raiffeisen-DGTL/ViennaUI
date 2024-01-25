import React, { useCallback, forwardRef, FocusEvent } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputAccountProps = Omit<InputMaskProps, 'maskOptions'> & FactoryOpts;

export const InputAccount = forwardRef<HTMLInputElement, InputAccountProps>((props, ref) => {
    const { onBlur, onFocus, ...attrs } = props;
    const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (typeof onBlur === 'function') {
                onBlur(event, { value: event.target.value });
            }
        },
        [onBlur]
    );

    const handleFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (typeof onFocus === 'function') {
                onFocus(event, { value: event.target.value });
            }
        },
        [onFocus]
    );

    // @ts-ignore
    const maskOptions = getMaskOptionsFromProps(props);
    return (
        <InputMask
            ref={ref}
            smartPlaceholder='_____.___._.___________'
            // @ts-ignore
            maskOptions={{
                ...maskOptions,
                mask: maskOptions.mask || '00000{.}000{.}0{.}00000000000',
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...attrs}
        />
    );
});

InputAccount.displayName = 'InputAccount';
