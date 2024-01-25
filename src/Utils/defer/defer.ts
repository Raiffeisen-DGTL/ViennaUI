export function defer<Args extends unknown[]>(fn: (...args: Args) => void, args?: Args): number {
    return setTimeout(fn, 0, args);
}
