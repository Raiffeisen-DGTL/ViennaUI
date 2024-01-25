import React, { FC, forwardRef, Ref, ForwardedRef } from 'react';
import { Box, ImageLayer, PropsBox, PropsImageLayer } from './Avatar.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface AvatarProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    size?: PropsBox<B>['$size'];
    src?: PropsImageLayer['$src'];
    align?: PropsImageLayer['$align'];
    valign?: PropsImageLayer['$valign'];
}

function AvatarInternal<B = void>(
    {
        src,
        children,
        align = 'center',
        valign = 'center',
        size = 'm',
        ...attrs
    }: AvatarProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLDivElement>
) {
    return (
        <Box {...(attrs as {})} $size={size} ref={ref}>
            {children}
            <ImageLayer $src={src} $align={align} $valign={valign} />
        </Box>
    );
}

export const Avatar = forwardRef(AvatarInternal) as <B = Breakpoints>(
    props: AvatarProps<B> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof AvatarInternal>;

(Avatar as FC).displayName = 'Avatar';
