export const converterStringToNumberOrNull = (value: string): number | null => {
    const newValue = parseFloat(value.replace(',', '.'));
    return Number.isNaN(newValue) ? null : newValue;
};
