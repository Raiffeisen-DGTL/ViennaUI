import React, { ReactElement, ReactNode } from 'react';
import { type SearchType, SelectValueType } from '../types';

const hasSubstrWithoutCase = (str: string, substr: string): boolean => {
    return str.toLowerCase().includes(substr.trim().toLowerCase());
};

export const DefaultValueToString = <T = SelectValueType>(value: T) => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return value.toString();
    if (typeof value === 'object' && value !== null) return (value as unknown as { value: string })?.value ?? '';

    return '';
};

export const DefaultCompare = DefaultValueToString;

export const DefaultSearch: SearchType = (name, searchString) => {
    if (typeof name === 'string') {
        return hasSubstrWithoutCase(name, searchString);
    }
    if (React.isValidElement(name)) {
        const children = (name as ReactElement<{ children: ReactNode }>).props.children;
        return DefaultSearch(children, searchString);
    }
    if (Array.isArray(name)) {
        return name.some((item: ReactNode) => DefaultSearch(item, searchString));
    }

    return false;
};
