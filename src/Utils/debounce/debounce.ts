export interface IDebounceCallback<Args extends unknown[] = []> {
    (...args: Args): void;
    cancel: () => void;
}

export function debounce<Args extends unknown[]>(fn: (...args: Args) => void, ms = 300): IDebounceCallback<Args> {
    let timeoutId: ReturnType<typeof setTimeout>;

    function debounced(...args: Args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), ms);
    }

    debounced.cancel = function cancel() {
        clearTimeout(timeoutId);
    };

    return debounced;
}
