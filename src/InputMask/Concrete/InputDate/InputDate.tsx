import React, { forwardRef, Ref, useEffect } from 'react';
import { FactoryOpts, MaskedRange } from 'imask';
import { useIMask } from 'react-imask';
import { InputDateLocalizationProps, defaultInputDateLocalization, InputDateLocalization } from './localization';
import { InputMaskProps } from '../../InputMask';
import { useLocalization } from '../../../Localization';
import { Input } from '../../../Input';

export interface InputDateProps
    extends Omit<InputMaskProps, 'type' | 'value' | 'min' | 'max' | 'maskOptions'>,
        InputDateLocalizationProps {
    /** Вариант маски (date по умолчанию) */
    type?: 'date' | 'time' | 'datetime';
    value?: string | Date;
    lazy?: boolean;
    min?: Date;
    max?: Date;
}

const format = (value: any) => (value.toString().length >= 2 ? value : `0${value}`);

const mask = (type, min, max): any => {
    // Включаем сами значения в диапазон
    const normilizeMin = min ? new Date(min.setHours(0, 0, 0, 0)) : new Date(1900, 0, 1);
    const normilizeMax = max ? new Date(max.setHours(23, 59, 59, 999)) : new Date(9999, 0, 1);

    switch (type) {
        case 'time':
            return {
                mask: 'HH:MM',
                blocks: {
                    HH: {
                        mask: MaskedRange,
                        from: 0,
                        to: 23,
                    },
                    MM: {
                        mask: MaskedRange,
                        from: 0,
                        to: 59,
                    },
                },
            };
        case 'datetime':
            return {
                mask: 'DATE HH:MM',
                blocks: {
                    DATE: {
                        mask: Date,
                        min: normilizeMin,
                        max: normilizeMax,
                    },
                    HH: {
                        mask: MaskedRange,
                        from: 0,
                        to: 23,
                    },
                    MM: {
                        mask: MaskedRange,
                        from: 0,
                        to: 59,
                    },
                },
                format: (value: string | Date) => {
                    let result = value || '';
                    if (value instanceof Date) {
                        // методы toIsoString/toGMTString toUTCString - возвращают время и дату без поправки на локальную временную зону
                        // метод toLocalString - возвращает в локальном формате и невозможно применить общую регулярку
                        // оставшиеся методы возвращают number, который необходимо дополнить первым 0 если это необходимо
                        const day = format(value.getDate());
                        const month = format(value.getMonth() + 1);
                        const year = format(value.getFullYear());
                        const hours = format(value.getHours());
                        const minutes = format(value.getMinutes());
                        result = `${day}.${month}.${year} ${hours}:${minutes}`;
                    }

                    return result;
                },
            };
        case 'date':
        default:
            return {
                mask: Date,
                min: normilizeMin,
                max: normilizeMax,
                format: (date: string | Date) => {
                    if (!date || typeof date === 'string') {
                        return date;
                    }

                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();

                    return [day < 10 ? `0${day}` : day, month < 10 ? `0${month}` : month, year].join('.');
                },

                parse: (str) => {
                    const yearMonthDay = str.split('.');
                    const isYearSim = normilizeMin.getFullYear() === normilizeMax.getFullYear();
                    return new Date(
                        isYearSim ? normilizeMin.getFullYear() : yearMonthDay[2],
                        yearMonthDay[1] - 1,
                        yearMonthDay[0]
                    );
                },
            };
    }
};

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>((props, externalRef) => {
    const {
        value: externalValue,
        min,
        max,
        type = 'date',
        lazy = true,
        onChange,
        onComplete,
        localization,
        ...rest
    } = props;
    const l10n = useLocalization(localization, defaultInputDateLocalization);
    const maskProps = mask(type, min, max);
    const placeholderMask = l10n(`ds.inputDate.placeholder.${type}` as keyof InputDateLocalization);
    const onAccept = (maskedValue, maskRef, inputEvent) => {
        // вызываем onChange только на изменение инпута пользователем(в остальных случаях событие не приходит)
        if (inputEvent) {
            onChange?.(maskedValue);
        }
    };

    const { ref, value, setValue, setTypedValue } = useIMask<HTMLInputElement, FactoryOpts>(maskProps, {
        onAccept,
        onComplete,
    });

    useEffect(() => {
        if (externalValue instanceof Date) {
            setTypedValue(externalValue);
        } else if (externalValue !== value) {
            setValue(externalValue || '');
        }
    }, [externalValue]);

    return <Input {...rest} smartPlaceholder={lazy ? placeholderMask : ''} ref={composeRef(ref, externalRef)} />;
});

InputDate.displayName = 'InputDate';

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
