import React, { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { color } from 'vienna.tokens';

interface GenerateCompare {
    parts: string[];
    compare: (text: string, search: string) => boolean;
}

export interface HighlightProps {
    query: string;
    compare?: (text: string, search: string) => GenerateCompare;
    style?: 'accentColor' | 'boldText';
}

const escapeRegExp = (text: string): string => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const getParts = (text: string, search: string): string[] => {
    const escapedSearch = escapeRegExp(search);
    return text.split(new RegExp(`(${escapedSearch})`, 'gi'));
};

const compareFn = (part: string, search: string): boolean => {
    return part.toLowerCase() === search.toLowerCase();
};

const defaultGenerateCompare = (text: string, search: string): GenerateCompare => {
    return {
        parts: getParts(text, search),
        compare: compareFn,
    };
};

const getStyle = (style?: string) => {
    if (style === 'boldText') {
        return { fontWeight: 'bold' };
    } else {
        return { backgroundColor: color.primary.brand.accent };
    }
};

const getColoredText = (
    text: string,
    search: string,
    generateCompare: NonNullable<HighlightProps['compare']> = defaultGenerateCompare,
    style?: 'accentColor' | 'boldText'
): ReactElement => {
    const { parts, compare } = generateCompare(text, search);
    return (
        <>
            {parts.map((part, i) => (
                <span key={i} style={compare(part, search) ? getStyle(style) : {}}>
                    {part}
                </span>
            ))}
        </>
    );
};

const constructValueBySearch = (
    text: ReactNode,
    search?: string,
    generateCompare?: NonNullable<HighlightProps['compare']>,
    style?: 'accentColor' | 'boldText'
): ReactNode => {
    if (!search?.trim()) {
        return text;
    }

    if (typeof text === 'string') {
        return getColoredText(text, search, generateCompare, style);
    }
    if (React.isValidElement(text)) {
        const children = (text as { props: { children: ReactNode } }).props.children;
        return React.cloneElement(text, {
            key: children?.toString(),
            ...(children && {
                children:
                    React.isValidElement(children) || Array.isArray(children)
                        ? constructValueBySearch(children, search, generateCompare, style)
                        : getColoredText(children.toString(), search, generateCompare, style),
            }),
        });
    }
    if (Array.isArray(text)) {
        return text.map((item: ReactNode) => constructValueBySearch(item, search, generateCompare, style));
    }

    return text;
};

export const Highlight: FC<PropsWithChildren<HighlightProps>> = (props) => {
    return <>{constructValueBySearch(props.children, props.query, props.compare, props.style)}</>;
};

Highlight.displayName = 'Highlight';
