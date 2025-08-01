import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { MaskedRange } from 'imask';
import { endOfDay, format, parse, startOfDay } from 'date-fns';
import { InputDateLocalizationProps, defaultInputDateLocalization } from './localization';
import InputMask, { InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { useLocalization } from '../../../Localization';
import { dateFormat } from '../../utils';
import { isFalsy } from '@/Utils/isFalsy/isFalsy';

export interface InputDateProps
    extends Omit<InputMaskProps, 'type' | 'value' | 'min' | 'max' | 'maskOptions' | 'onChange'>,
        InputDateLocalizationProps {
    /** Вариант маски (date по умолчанию) */
    type?: 'date' | 'time' | 'datetime';
    value?: string | Date;
    lazy?: boolean;
    min?: Date;
    max?: Date;
    onChange?: InputMaskOnChangeType<string | Date>;
}

const mask = ({ type, min, max }: Pick<InputDateProps, 'type' | 'min' | 'max'>) => {
    // Включаем сами значения в диапазон
    const normalizeMin = min ? startOfDay(min) : new Date(1900, 0, 1);
    const normalizeMax = max ? endOfDay(max) : new Date(9999, 11, 31);

    switch (type) {
        case 'time':
            return {
                mask: 'HH:mm',
                blocks: {
                    HH: {
                        mask: MaskedRange,
                        from: 0,
                        to: 23,
                    },
                    mm: {
                        mask: MaskedRange,
                        from: 0,
                        to: 59,
                    },
                },
                format: (value: string | Date) => {
                    return (value instanceof Date ? format(value, 'HH:mm') : value) || '';
                },
            };
        case 'datetime':
            return {
                mask: 'DATE HH:mm',
                blocks: {
                    DATE: {
                        mask: Date,
                        min: normalizeMin,
                        max: normalizeMax,
                    },
                    HH: {
                        mask: MaskedRange,
                        from: 0,
                        to: 23,
                    },
                    mm: {
                        mask: MaskedRange,
                        from: 0,
                        to: 59,
                    },
                },
                format: (value: string | Date) => {
                    return (value instanceof Date ? format(value, 'dd.MM.yyyy HH:mm') : value) || '';
                },
            };
        case 'date':
        default:
            return {
                mask: Date,
                format: (value: string | Date) => {
                    return dateFormat(value);
                },
                parse: (str: string) => {
                    const parsedDate = parse(str, 'dd.MM.yyyy', new Date());
                    if (normalizeMin && parsedDate.valueOf() < normalizeMin.valueOf()) {
                        return normalizeMin;
                    }
                    if (normalizeMax && parsedDate.valueOf() > normalizeMax.valueOf()) {
                        return normalizeMax;
                    }
                    return parsedDate;
                },
            };
    }
};

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>((props, ref) => {
    const {
        value,
        type = 'date',
        placeholder,
        name,
        min,
        max,
        lazy = true,
        onChange,
        onComplete,
        onBlur,
        localization,
        ...rest
    } = props;
    const l10n = useLocalization(localization, defaultInputDateLocalization);
    const placeholderMask = l10n(`ds.inputDate.placeholder.${type}`);
    const innerValue = useRef<InputDateProps['value']>(value);
    const innerIsComplete = useRef<boolean>(false);
    const [hasMinMax, setHasMinMax] = useState<boolean>(false);

    // Необходимо, так как значение может обновиться извне.
    // Например, при выставлении даты через календарь в компоненте Datepicker.
    innerValue.current = value;
    const maskOptions = mask({
        type,
        min: hasMinMax ? min : undefined,
        max: hasMinMax ? max : undefined,
    });

    const maskedValue = maskOptions.format?.(value ?? '');

    const handleChange = useCallback<NonNullable<InputMaskProps['onChange']>>(
        ({ value, event, options }) => {
            setHasMinMax(true);
            if (isFalsy(value)) {
                if (onChange && typeof onChange === 'function') {
                    onChange({ value: '', event, options });
                }
                return;
            }
            if (typeof onChange !== 'function' || typeof value !== 'string') {
                return;
            }
            innerValue.current = value;
            innerIsComplete.current = options.isComplete;
            if (options.isComplete) {
                onChange({ value, event, options });
            }
        },
        [maskedValue, onChange]
    );

    const handleBlur: InputMaskProps['onBlur'] = (e) => {
        setHasMinMax(false);
        if (typeof onBlur === 'function') {
            onBlur(e, {
                value: innerValue.current instanceof Date ? innerValue.current.toString() : innerValue.current || '',
            });
        }
        if (typeof onChange !== 'function' || maskedValue === innerValue.current) {
            return;
        }

        onChange({
            value: innerValue.current || '',
            event: undefined,
            options: {
                name,
                isComplete: innerIsComplete.current,
                unmaskedValue: value,
            },
        });
    };

    return (
        <InputMask
            ref={ref}
            maskOptions={maskOptions as InputMaskProps['maskOptions']}
            value={value}
            name={name}
            placeholder={placeholder ?? placeholderMask}
            smartPlaceholder={lazy ? placeholderMask : ''}
            onChange={handleChange}
            onComplete={onComplete}
            onBlur={handleBlur}
            {...rest}
        />
    );
});

InputDate.displayName = 'InputDate';
