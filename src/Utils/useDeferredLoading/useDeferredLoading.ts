import { useLayoutEffect, useRef, useState } from 'react';

export interface UseDeferredLoadingArgs {
    isLoading: boolean;
    timeout?: number;
}

/**
 * Хук для обеспечения минимального времени загрузки для показа различных лоадеров, в частности, [Skeleton](https://ds.raiffeisen.ru/components/skeleton)
 * @param {boolean} args.isLoading -  флаг загрузки, стейт
 * @param {number} args.timeout -  время задержки, default - 500
 *
 * @returns {boolean}
 */
export function useDeferredLoading({ isLoading, timeout = 500 }: UseDeferredLoadingArgs) {
    const [_isLoading, setIsLoading] = useState(false);

    const isCooldown = useRef(false);
    const cooldownTriggeredValue = useRef<boolean | null>(null);

    useLayoutEffect(() => {
        const shouldEnableCooldown = isLoading && !_isLoading && !isCooldown.current;

        if (shouldEnableCooldown) {
            setIsLoading(true);
            isCooldown.current = true;

            setTimeout(() => {
                isCooldown.current = false;
                if (cooldownTriggeredValue.current !== null) {
                    setIsLoading(cooldownTriggeredValue.current);
                    cooldownTriggeredValue.current = null;
                }
            }, timeout);

            return;
        }

        if (isCooldown.current) {
            cooldownTriggeredValue.current = isLoading;
        } else {
            setIsLoading(isLoading);
        }
    }, [isLoading]);

    return _isLoading;
}
