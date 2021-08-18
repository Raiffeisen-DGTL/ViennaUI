export interface DateOptions {
    range?: boolean;
    /* https://date-fns.org/v2.21.3/docs/format */
    mask?: string;
}

export interface DateOptionsWithValue extends DateOptions {
    value: Date | string;
}
