import React from 'react';
import { Box, PropsBox } from './Heading.styles';
import { Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';

export interface HeadingProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    size?: PropsBox<B>['$size'];
    color?: PropsBox<B>['$color'];
    margin?: PropsBox<B>['$margin'];
    uppercase?: PropsBox<B>['$uppercase'];
    monospace?: PropsBox<B>['$monospace'];
    type?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

export function Heading<B = void>({
    children,
    type = 'h1',
    size = 'xl',
    color = 'brand-primary',
    margin = 'none',
    uppercase,
    monospace,
    ...attrs
}: HeadingProps<B extends void ? Breakpoints : B>) {
    return (
        <Box
            {...(attrs as {})}
            as={type}
            $size={size}
            $color={color}
            $margin={margin}
            $uppercase={uppercase}
            $monospace={monospace}>
            {children}
        </Box>
    );
}

Heading.displayName = 'Heading';
