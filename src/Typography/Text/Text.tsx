import React, {Ref} from 'react';
import { ExecutionProps } from 'styled-components';
import { Box, PropsBox } from './Text.styles';
import { Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';

export interface TextProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    type?: ExecutionProps['as'];
    size?: PropsBox<B>['$size'];
    weight?: PropsBox<B>['$weight'];
    color?: PropsBox<B>['$color'];
    margin?: PropsBox<B>['$margin'];
    uppercase?: PropsBox<B>['$uppercase'];
    monospace?: PropsBox<B>['$monospace'];
    forwardedRef?: Ref<HTMLElement>;

}

export function Text<B = void>({
    children,
    type = 'span',
    size = 'm',
    weight,
    color = 'brand-primary',
    margin,
    uppercase,
    monospace,
    forwardedRef,
    ...attrs
}: TextProps<B extends void ? Breakpoints : B>) {
    return (
        <Box
            {...(attrs as {})}
            as={type as string}
            ref={forwardedRef}
            $size={size}
            $weight={weight}
            $color={color}
            $margin={margin}
            $uppercase={uppercase}
            $monospace={monospace}>
            {children}
        </Box>
    );
}

Text.displayName = 'Text';
