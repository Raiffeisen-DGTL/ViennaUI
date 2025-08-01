import { Dispatch, Key, LegacyRef, MutableRefObject, ReactNode, SetStateAction } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;
export type SelectValueType = string | AnyObject;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EmptyArrayType = any[];

export type ValueToStringType<T> = (value: T) => string;
export type CompareType<T> = ValueToStringType<T>;
export type DataKeyType<T> = (value: T) => Key;
export type SearchType = (name: ReactNode, searchString: string) => boolean;

export interface OnChangeArgs<V, E, O extends { name?: string } | undefined> {
    value: V;
    event: E;
    options: O;
}

export type OnChangeHandler<V, E, O extends { name?: string } | null = { name?: string }> = (
    args: O extends null ? Omit<OnChangeArgs<V, E, undefined>, 'options'> : OnChangeArgs<V, E, NonNullable<O>>
) => void;

export type ReactRefType<T> = LegacyRef<T> | Dispatch<SetStateAction<MutableRefObject<T> | undefined>>;
