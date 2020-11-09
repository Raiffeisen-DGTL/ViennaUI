import React, { useCallback, useState } from 'react';
import { useMask } from 'vienna.react-use';
import InputMask, { InputMaskProps } from '../../InputMask';
import { getClipboardText } from '../../../Utils';

const regexpFirstEight = /(8)(\d{10})/;

export const InputPhone = React.forwardRef((props: InputMaskProps, ref: React.Ref<HTMLInputElement>) => {
    const {
        mask = '+{7} (000) 000-00-00',
        value = '',
        placeholderChar = '_',
        onChange,
        onKeyDown,
        onFocus,
        onBlur,
        ...attrs
    } = props;

    const [active, setActive] = useState(false);

    const [pipe, maskToValue, pipePlaceholder] = useMask({ mask, placeholderChar });

    const formatValue = useCallback(
        (value = '') => {
            const piped: string = pipePlaceholder(value);
            const index = piped.indexOf(placeholderChar);
            const formatedValue = piped.substring(0, index);

            if (!value) {
                return formatedValue;
            }

            if (regexpFirstEight.test(value) && piped.startsWith('+7')) {
                value = value.replace(regexpFirstEight, '+7$2');
            }

            return value;
        },
        [pipePlaceholder, placeholderChar]
    );

    const constructPlaceholder = useCallback(
        (value) => {
            if (active || formatValue(value).length > formatValue().length) {
                return pipePlaceholder(formatValue(value));
            }

            return '';
        },
        [formatValue, active, pipePlaceholder]
    );

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

    const handlePaste = useCallback(
        (e) => {
            e.preventDefault();
            let s = getClipboardText(e);
            if (typeof onChange === 'function' && s) {
                s = s.replace(/\D/g, '');
                s = regexpFirstEight.test(s) && formatValue().startsWith('+7') ? s.replace(regexpFirstEight, '$2') : s;
                onChange(e, { value: pipe(s), originalValue: maskToValue(s) });
            }
        },
        [onChange, pipe, formatValue, maskToValue]
    );

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Backspace' && e.target.value === formatValue()) {
                e.preventDefault();
            }
            if (typeof onKeyDown === 'function') {
                onKeyDown(e);
            }
        },
        [onKeyDown, formatValue]
    );

    return (
        <InputMask
            ref={ref}
            smartPlaceholder={constructPlaceholder(value)}
            mask={mask}
            placeholderChar={placeholderChar}
            value={formatValue(value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
            onPaste={handlePaste}
            onKeyDown={handleKeyDown}
            {...attrs}
        />
    );
});

InputPhone.displayName = 'InputPhone';
export default InputPhone;
