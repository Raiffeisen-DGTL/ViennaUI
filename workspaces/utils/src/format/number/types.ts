export type NumberDelimiter = '.' | ',';

export interface NumberOptions {
    delimiter?: NumberDelimiter;
    scale?: number;
    /** Separator for delimiting thousands */
    thousandsSeparator?: string;
    /** If true, then pads zeros at end to the length of scaleMutator */
    padFractionalZeros?: boolean;
}

export interface NumberOptionsWithValue extends NumberOptions {
    value: string;
}
