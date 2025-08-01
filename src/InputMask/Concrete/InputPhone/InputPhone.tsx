import React, { forwardRef, useState, useEffect } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputPhoneProps = Omit<InputMaskProps, 'value' | 'maskOptions' | 'onChange'> &
    FactoryOpts & {
        value?: string;
        onChange?: InputMaskOnChangeType<string>;
    };

const defaultPlaceholder = '+7 000 000-00-00';

export const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>((props, ref) => {
    const {
        onFocus,
        onBlur,
        onKeyDown,
        placeholder = defaultPlaceholder,
        smartPlaceholder = defaultPlaceholder,
        value: externalValue,
        onChange,
        ...attrs
    } = props;
    const [value, setValue] = useState(externalValue);

    useEffect(() => {
        setValue(externalValue);
    }, [externalValue]);

    const handleFocus: InputMaskProps['onFocus'] = (e, data) => {
        if (typeof onFocus === 'function') {
            onFocus(e, data);
        }
    };

    const handleBlur: InputMaskProps['onBlur'] = (e, data) => {
        if (typeof onBlur === 'function') {
            onBlur(e, data);
        }
    };

    const handleKeyDown: InputMaskProps['onKeyDown'] = (e) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(e);
        }
    };

    const handleChange: InputMaskProps['onChange'] = ({ value: maskedValue, event, options }) => {
        if (typeof maskedValue !== 'string') return;
        setValue(maskedValue);
        if (typeof onChange === 'function') {
            onChange({ value: maskedValue, event, options });
        }
    };

    return (
        <InputMask
            ref={ref}
            value={value || ''}
            maskOptions={{
                mask: '+{7} 000 000-00-00',
                placeholderChar: '',
                prepare: (char, { value }) => {
                    if (!value) {
                        if (char.startsWith('8')) {
                            return `7${char.substring(1)}`;
                        }
                        if (char.startsWith('+7')) {
                            return `7${char.substring(2)}`;
                        }
                    }

                    return char;
                },
                ...getMaskOptionsFromProps(props),
            }}
            placeholder={placeholder}
            smartPlaceholder={smartPlaceholder}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...attrs}
        />
    );
});

InputPhone.displayName = 'InputPhone';
