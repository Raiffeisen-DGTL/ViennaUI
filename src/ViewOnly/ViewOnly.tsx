import React from 'react';
import { CloseCancelXIcon, CheckmarkIcon } from 'vienna.icons';
import { color } from 'vienna.tokens';
import { Box, Content, BoxProps } from './ViewOnly.styles';

export type ViewOnlyProps = React.PropsWithChildren<{
    size?: BoxProps['$size'];
    hasCancel?: boolean;
    hasCheck?: boolean;
}>;

export interface WithViewOnly {
    viewOnly?: boolean;
    viewOnlyText?: React.ReactNode;
}

export interface WithViewOnlyAndDisabledIcon extends WithViewOnly {
    viewOnlyDisableIcon?: boolean;
}

export const ViewOnly = ({ children, size = 'm', hasCancel, hasCheck }: ViewOnlyProps) => {
    return (
        <Box $size={size}>
            {hasCancel && <CloseCancelXIcon size={size} color={color.secondary.nice.c100} />}
            {hasCheck && <CheckmarkIcon size={size} color={color.secondary.miami.c100} />}
            {typeof children === 'string' ? <Content size={size}>{children}</Content> : children}
        </Box>
    );
};

ViewOnly.displayName = 'ViewOnly';
