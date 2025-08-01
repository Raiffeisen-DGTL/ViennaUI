import React, { useCallback, forwardRef, FocusEvent } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputAccountProps = Omit<InputMaskProps, 'maskOptions' | 'onChange'> &
    FactoryOpts & {
        onChange?: InputMaskOnChangeType<string>;
    };

export const InputAccount = forwardRef<HTMLInputElement, InputAccountProps>((props, ref) => {
    const { onBlur, onFocus, onChange, ...attrs } = props;
    const handleBlur = useCallback<NonNullable<InputMaskProps['onBlur']>>(
        (event) => {
            if (typeof onBlur === 'function') {
                onBlur(event, { value: (event.target as HTMLInputElement).value });
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

    return (
        <InputMask
            ref={ref}
            placeholder='_____.___._.___________'
            smartPlaceholder='_____.___._.___________'
            maskOptions={{
                mask: '00000{.}000{.}0{.}00000000000',
                ...getMaskOptionsFromProps(props),
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={onChange as InputMaskProps['onChange']}
            {...attrs}
        />
    );
});

InputAccount.displayName = 'InputAccount';
