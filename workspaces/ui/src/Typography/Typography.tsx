import React from 'react';
import { Heading, HeadingProps } from './Heading';
import { Text, TextProps } from './Text';

export * from './Heading';
export * from './Text';

export const H1: React.FC<HeadingProps> = (props) => <Heading type='h1' size='xl' {...props} />;
export const H2: React.FC<HeadingProps> = (props) => <Heading type='h2' size='l' {...props} />;
export const H3: React.FC<HeadingProps> = (props) => <Heading type='h3' size='m' {...props} />;
export const H4: React.FC<HeadingProps> = (props) => <Heading type='h4' size='s' {...props} />;
export const H5: React.FC<HeadingProps> = (props) => <Heading type='h5' size='xs' {...props} />;
export const H6: React.FC<HeadingProps> = (props) => <Heading type='h6' size='xs' {...props} />;

export const P: React.FC<TextProps> = (props) => <Text type='p' size='m' {...props} />;
export const Span: React.FC<TextProps> = (props) => <Text type='span' size='m' {...props} />;

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';

P.displayName = 'P';
Span.displayName = 'Span';

export default Text;
