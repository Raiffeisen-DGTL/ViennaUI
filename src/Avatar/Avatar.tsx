import React, { FC, forwardRef, Ref, ForwardedRef, useCallback, useRef } from 'react';
import { Box, ImageLayer, PropsBox, PropsImageLayer } from './Avatar.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface AvatarProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    src?: string;
    alt?: string;
    hideImageOnError?: boolean;
    size?: PropsBox<B>['$size'];
    align?: PropsImageLayer['$align'];
    valign?: PropsImageLayer['$valign'];
}

function AvatarInternal<B = void>(
    {
        src,
        alt = '',
        hideImageOnError = true,
        align = 'center',
        valign = 'center',
        size = 'm',
        children,
        ...attrs
    }: AvatarProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLDivElement>
) {
    const imageRef = useRef<HTMLImageElement>(null);

    const handleImageError = useCallback(() => {
        const imageStyle = imageRef.current?.style;
        const boxStyle = imageRef.current?.parentElement?.style;

        if (!hideImageOnError && boxStyle) {
            boxStyle.overflow = 'visible';
        }

        if (hideImageOnError && imageStyle) {
            imageStyle.display = 'none';
        }
    }, [imageRef, hideImageOnError]);

    return (
        <Box {...attrs} $size={size} ref={ref}>
            {children}
            {src && (
                <ImageLayer
                    ref={imageRef}
                    src={src}
                    alt={alt}
                    $align={align}
                    $valign={valign}
                    onError={handleImageError}
                />
            )}
        </Box>
    );
}

export const Avatar = forwardRef(AvatarInternal) as <B = Breakpoints>(
    props: AvatarProps<B> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof AvatarInternal>;

(Avatar as FC).displayName = 'Avatar';
