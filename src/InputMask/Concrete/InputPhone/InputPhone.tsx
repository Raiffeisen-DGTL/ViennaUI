import React, { forwardRef, useCallback } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputPhoneProps = Omit<InputMaskProps, 'maskOptions'> & FactoryOpts & {};

export const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>((props, ref) => {
    // @ts-ignore
    const maskOptions = getMaskOptionsFromProps(props);

    const { onFocus, onBlur, onKeyDown, placeholder, smartPlaceholder, value, ...attrs } = props;

    const handleFocus = useCallback(
        (e, data) => {
            if (typeof onFocus === 'function') {
                onFocus(e, data);
            }
        },
        [onFocus]
    );

    const handleBlur = useCallback(
        (e, data) => {
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

    const isDefaultPlaceholder = !smartPlaceholder && !placeholder;
    const correctPlaceholder = isDefaultPlaceholder ? '+7 (___) ___-__-__' : (smartPlaceholder as any) || placeholder;

    const mask = (maskOptions.mask as string) || '+{7} (000) 000-00-00';

    return (
        <InputMask
            ref={ref}
            value={value || ''}
            // @ts-ignore
            maskOptions={{
                ...maskOptions,
                mask,
                lazy: true,
                placeholderChar: maskOptions.placeholderChar || '',
                prepare:
                    maskOptions.prepare ||
                    ((char, masked) => {
                        if (char === undefined) {
                            return ' ';
                        }

                        if (isDefaultPlaceholder && char === '8' && !masked.value) {
                            return ' ';
                        }

                        return char;
                    }),
            }}
            placeholder={correctPlaceholder}
            smartPlaceholder={correctPlaceholder}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...attrs}
        />
    );
});

InputPhone.displayName = 'InputPhone';
