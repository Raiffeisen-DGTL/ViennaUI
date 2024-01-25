import React, { forwardRef, useCallback, useState } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputPhoneProps = Omit<InputMaskProps, 'maskOptions'> & FactoryOpts & {};

const regexpFirstEight = /(8)(\d{10})/;

export const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>((props, ref) => {
    const [active, setActive] = useState(false);
    // @ts-ignore
    const maskOptions = getMaskOptionsFromProps(props);

    const { onFocus, onBlur, onKeyDown, ...attrs } = props;

    const handleFocus = useCallback(
        (e, data) => {
            setActive(true);
            if (typeof onFocus === 'function') {
                onFocus(e, data);
            }
        },
        [onFocus]
    );

    const handleBlur = useCallback(
        (e, data) => {
            setActive(false);
            if (typeof onBlur === 'function') {
                onBlur(e, data);
            }
        },
        [onBlur]
    );

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Backspace' && e.target.value === '+7') {
                e.preventDefault();
            }
            if (typeof onKeyDown === 'function') {
                onKeyDown(e);
            }
        },
        [onKeyDown]
    );

    return (
        <InputMask
            ref={ref}
            // @ts-ignore
            maskOptions={{
                ...maskOptions,
                mask: (maskOptions.mask as string) || '+{7} (000) 000-00-00',
                lazy: true,
                placeholderChar: maskOptions.placeholderChar || '',
                prepare:
                    maskOptions.prepare ||
                    ((value: string): string => {
                        if (!value) {
                            return ' ';
                        }
                        return value.replace(regexpFirstEight, '+7$2');
                    }),
            }}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            smartPlaceholder={active ? props.smartPlaceholder || '+7 (___) ___-__-__' : ''}
            {...attrs}
        />
    );
});

InputPhone.displayName = 'InputPhone';
