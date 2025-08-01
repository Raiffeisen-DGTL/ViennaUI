import React, { FC, PropsWithChildren, useMemo } from 'react';
import {
    SearchIcon,
    Binoculars1Icon,
    ZooStorePawIcon,
    RainIcon,
    KeyboardIcon,
    AppleIcon,
    MicroscopeIcon,
    GlassesEyeIcon,
    WhaleIcon,
    FlowerIcon,
    BoatIcon,
    FishIcon,
    UfoIcon,
    PalmIcon,
    FaceNeutralIcon,
} from 'vienna.icons';
import { Box, BoxProps, Text } from './EmptyState.styles';
import { Breakpoints } from '../../Utils/responsiveness';

export interface EmptyStateProps<B = Breakpoints> {
    size?: BoxProps<B>['$size'];
    randomIcon?: boolean;
    hideIcon?: boolean;
}

const getRandomElement = <T,>(array: T[]) => {
    if (array.length === 0) {
        throw new Error('Array cannot be empty');
    }
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

export const EmptyState: FC<PropsWithChildren<EmptyStateProps>> = ({ size = 'm', randomIcon, hideIcon, children }) => {
    const iconSize = 24;
    const iconProps = { size: iconSize };
    const iconsArr = [
        Binoculars1Icon,
        ZooStorePawIcon,
        RainIcon,
        KeyboardIcon,
        AppleIcon,
        MicroscopeIcon,
        GlassesEyeIcon,
        WhaleIcon,
        FlowerIcon,
        BoatIcon,
        FishIcon,
        UfoIcon,
        PalmIcon,
        FaceNeutralIcon,
    ];
    const icon = useMemo(() => {
        return randomIcon ? React.createElement(getRandomElement(iconsArr), iconProps) : <SearchIcon {...iconProps} />;
    }, [randomIcon]);
    return (
        <Box $size={size}>
            {!hideIcon && icon}
            <Text $size={size}>{children}</Text>
        </Box>
    );
};
