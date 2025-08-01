import { AnyObject } from '../types/values.types';

export function getKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

export function getValues<T extends object, K extends keyof T>(obj: T): T[K][] {
    return Object.values(obj) as T[K][];
}

export function getEntries<T extends object, K extends keyof T>(obj: T): [K, T[K]][] {
    return Object.entries(obj) as [K, T[K]][];
}

// TODO: переименовать после выпила vienna.utils
export function local_readObjectByPath<T, O extends NonNullable<object>>(obj: O, path: string): T | null {
    if (!Object.keys(obj).length || !path) return null;

    let res: AnyObject = obj;

    const keys = path.split('.');

    for (const key of keys) {
        if (!(key in res)) return null;

        res = res[key];
    }

    return res as T;
}
