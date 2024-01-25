export const converterNumberOrNullToString = (value?: number | null): string => {
    return typeof value === 'undefined' || value === null ? '' : value.toString();
};
