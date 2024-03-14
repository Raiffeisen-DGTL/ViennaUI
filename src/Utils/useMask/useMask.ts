import { ReactMaskProps, useIMask } from 'react-imask';
import { FactoryOpts } from 'imask';

export function useMask({
    maskOptions,
    externalValue,
    onChange,
    onComplete,
}: {
    maskOptions: FactoryOpts;
    externalValue: unknown;
    onChange?: (value: unknown) => void;
    onComplete?: ReactMaskProps<HTMLInputElement, FactoryOpts>['onComplete'];
}) {
    const mask = useIMask<HTMLInputElement, FactoryOpts>(maskOptions, {
        onAccept: (maskedValue, maskRef, inputEvent) => {
            // вызываем onChange только на изменение инпута пользователем(в остальных случаях событие не приходит)
            if (inputEvent) {
                onChange?.(maskedValue);
            }
        },
        onComplete: (maskedValue, maskRef, inputEvent) => {
            if (externalValue !== maskRef.unmaskedValue) {
                onChange?.(maskedValue);
            }
            onComplete?.(maskedValue, maskRef, inputEvent);
        },
    });

    return mask;
}
