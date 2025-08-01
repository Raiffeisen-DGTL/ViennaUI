import { omit } from '../omit';
import { AnyObject } from '../types';

export const isEqualObjects = (
    obj1: AnyObject,
    obj2: AnyObject,
    fast?: boolean,
    omitProps?: string[],
    deps: AnyObject[] = []
): boolean => {
    try {
        if (obj1 === obj2) {
            return true;
        }

        if (deps.some((d) => d === obj1 || d === obj2)) {
            return false;
        }
        deps.push(obj1, obj2);

        const omitObj1 = omitProps ? omit(obj1, ...omitProps) : obj1;
        const omitObj2 = omitProps ? omit(obj2, ...omitProps) : obj2;

        if (fast) {
            return JSON.stringify(omitObj1) === JSON.stringify(omitObj2);
        }

        const keys1 = Object.keys(omitObj1);
        const keys2 = Object.keys(omitObj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            const val1: AnyObject | string | number | boolean = obj1[key];
            const val2: AnyObject | string | number | boolean = obj2[key];

            if (typeof val1 === 'object' && typeof val2 === 'object') {
                if (!isEqualObjects(val1, val2, undefined, undefined, deps)) {
                    return false;
                }
            } else if (val1 !== val2) {
                return false;
            }
        }

        return true;
    } catch (e) {
        return obj1 === obj2;
    }
};

export const isEqualArraysObjects = <T extends object>(
    arr1: T[],
    arr2: T[],
    ignoreSort?: boolean,
    fast?: boolean,
    omitProps?: string[]
): boolean => {
    if (arr1 === arr2) {
        return true;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const obj1 = arr1[i];
        if (ignoreSort) {
            if (!arr2.some((obj2) => isEqualObjects(obj1, obj2, fast, omitProps))) {
                return false;
            }
        } else {
            const obj2 = arr2[i];

            if (!isEqualObjects(obj1, obj2, fast, omitProps)) {
                return false;
            }
        }
    }

    return true;
};
