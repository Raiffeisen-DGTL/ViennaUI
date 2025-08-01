export const getNegativeCssValue = (value: string | number): string => {
    if (typeof value === 'number') {
        return `${value * -1}px`;
    }
    const trimmed = value?.trim();
    if (trimmed.startsWith('calc(')) {
        const inner = trimmed.slice(5, -1).trim();
        return `calc(-1 * (${inner}))`;
    }
    if (trimmed.startsWith('-')) {
        return trimmed;
    }

    return `-${trimmed}`;
};
