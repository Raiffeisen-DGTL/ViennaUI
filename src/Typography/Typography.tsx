import React from 'react';
import { Heading, HeadingProps } from './Heading';
import { Text, TextProps } from './Text';
import { Breakpoints } from '../Utils/responsiveness';

export { Heading, type HeadingProps } from './Heading';
export { Text, type TextProps } from './Text';

export function H1<B = void>(props: HeadingProps<B extends void ? Breakpoints : B>) {
    return <Heading type='h1' size='xl' {...props} />;
}
export function H2<B = void>(props: HeadingProps<B extends void ? Breakpoints : B>) {
    return <Heading type='h2' size='l' {...props} />;
}
export function H3<B = void>(props: HeadingProps<B extends void ? Breakpoints : B>) {
    return <Heading type='h3' size='m' {...props} />;
}
export function H4<B = void>(props: HeadingProps<B extends void ? Breakpoints : B>) {
    return <Heading type='h4' size='s' {...props} />;
}
export function H5<B = void>(props: HeadingProps<B extends void ? Breakpoints : B>) {
    return <Heading type='h5' size='xs' {...props} />;
}
export function H6<B = void>(props: HeadingProps<B extends void ? Breakpoints : B>) {
    return <Heading type='h6' size='xs' {...props} />;
}
export function P<B = void>(props: TextProps<B extends void ? Breakpoints : B>) {
    return <Text type='p' size='m' {...props} />;
}
export function Span<B = void>(props: TextProps<B extends void ? Breakpoints : B>) {
    return <Text type='span' size='m' {...props} />;
}
H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';

P.displayName = 'P';
Span.displayName = 'Span';
