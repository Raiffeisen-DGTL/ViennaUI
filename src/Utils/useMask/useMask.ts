import { ReactMaskProps, useIMask } from 'react-imask';
import { FactoryOpts, InputMask } from 'imask';
import { useEffect, useRef } from 'react';
import { isEqual } from 'date-fns';
import { InputMaskEventListener } from 'imask/esm/controls/input';
import { getDateFromString } from '../DateUtils';
import { InputMaskProps } from '../../InputMask';

export function useMask({
    maskOptions,
    externalValue,
    name,
    onChange,
    onComplete,
    viewOnly,
}: {
    maskOptions: FactoryOpts;
    externalValue: string | number | Date | null | undefined;
    name?: string;
    onChange?: InputMaskProps['onChange'];
    onComplete?: ReactMaskProps<HTMLInputElement, FactoryOpts>['onComplete'];
    viewOnly?: boolean;
}) {
    const mask = useIMask<HTMLInputElement, FactoryOpts>(maskOptions, { onComplete });

    const { ref, maskRef, setTypedValue, setValue } = mask;

    useEffect(() => {
        const maskData: InputMask<FactoryOpts> | null = maskRef?.current;
        const input = ref.current;

        if (!maskData || !input) {
            return;
        }

        const { value } = maskData;
        const typedValue = (maskData as { typedValue: string | number | Date }).typedValue;

        if (
            (typeof typedValue === 'number' && externalValue === typedValue && !(typedValue === 0 && value === '')) ||
            (typeof typedValue === 'string' && externalValue === value) ||
            (typedValue instanceof Date &&
                isEqual(getDateFromString(externalValue as Date | string) as Date, typedValue))
        ) {
            return;
        } else if (externalValue === 0 && typedValue === 0 && value === '') {
            setValue('0');
        } else {
            const newInputValue = String(externalValue);
            input.value = newInputValue;
            maskData.updateValue();
            input.value = maskData.value;
            maskData.value = newInputValue;
            input.value = maskData.value;
        }
    }, [externalValue, ref, maskRef, setValue, viewOnly, setTypedValue]);

    useEffect(() => {
        const input = ref.current;
        if (!input || input?.value || viewOnly) return;
        input.value = String(externalValue);
    }, [viewOnly]);

    const refExternalValue = useRef<string | number | Date | null | undefined>(externalValue);
    useEffect(() => {
        refExternalValue.current = externalValue;
    }, [externalValue]);

    const refAccept = useRef<InputMaskEventListener | null>(null);
    const refPrevTypedValueForNumber = useRef<number>();
    useEffect(() => {
        const maskData = maskRef?.current;
        refAccept.current = (event) => {
            if (!maskData) {
                return;
            }

            const { value, masked } = maskData;
            const typedValue = (maskData as { typedValue: string | number | Date }).typedValue;
            if (value === '' && typedValue === 0) {
                if (refExternalValue.current !== null && refExternalValue.current !== undefined) {
                    onChange?.({
                        value: null,
                        event,
                        options: {
                            name,
                            isComplete: masked.isComplete,
                            unmaskedValue: typedValue,
                        },
                    });
                }
            } else if (typeof typedValue === 'number') {
                if (refExternalValue.current !== typedValue || refPrevTypedValueForNumber.current === 0) {
                    onChange?.({
                        value: typedValue,
                        event,
                        options: {
                            name,
                            isComplete: masked.isComplete,
                            unmaskedValue: typedValue,
                        },
                    });
                }
                if (value.startsWith('00')) {
                    setValue(String(Number(value)));
                }
                refPrevTypedValueForNumber.current = typedValue;
            } else if (refExternalValue.current !== value) {
                onChange?.({
                    value,
                    event,
                    options: {
                        name,
                        isComplete: masked.isComplete,
                        unmaskedValue: typedValue,
                    },
                });
            }
        };
        maskData?.on('accept', refAccept.current);

        return () => {
            if (refAccept.current) {
                maskData?.off('accept', refAccept.current);
                refAccept.current = null;
            }
        };
    }, [maskRef, refExternalValue, name, onChange, setValue]);

    useEffect(() => {
        if (viewOnly && maskRef) {
            maskRef.current = null;
        }
    }, [viewOnly]);

    useEffect(() => {
        const maskData: InputMask<FactoryOpts> | null = maskRef?.current;

        const input = ref.current;
        if (externalValue === undefined || externalValue === null) {
            if (input) input.value = '';
            if (maskData) maskData.updateValue();
        }
    }, [externalValue]);

    return mask;
}
