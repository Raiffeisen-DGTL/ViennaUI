export function defer<Args>(fn: (...args: Args[]) => void, args?: Args[]): ReturnType<typeof setTimeout> {
    return setTimeout(() => (args ? fn(...args) : fn()), 0);
}
