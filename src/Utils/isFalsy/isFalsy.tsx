export type Falsy = false | 0 | '' | null | undefined | typeof NaN;

export const isFalsy = (value: unknown): value is Falsy => {
    return (
        value === false || value === 0 || value === '' || value === null || value === undefined || Number.isNaN(value)
    );
};
