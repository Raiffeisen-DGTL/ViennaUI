import React, { FC, ReactNode } from 'react';
import { WarningTr, WarningRing, InfoRing, Checkmark } from 'vienna.icons';
import { ThemeProvider } from 'vienna.ui-primitives';
import {
    Box,
    IconContainer,
    Title,
    TextContainer,
    Actions,
    PropsBox,
    ContentContainer,
    RightContainer,
} from './Alert.styles';
import { useTheme } from './hooks';
import { BoxStyled } from '../Utils/styled';

export interface AlertProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'title'> {
    design?: PropsBox['$design'];
    /** Flag controls if the element width is dynamic.
     * When true - element's width will be defined by it's content.
     * When false - element's width will be set to 100%.
     */
    dynamic?: PropsBox['$dynamic'];
    /** Value to turn on compact mode when viewport width is below it  */
    compactBelow?: PropsBox['$compactBelow'];
    compact?: PropsBox['$compact'];
    title?: ReactNode;
    actions?: ReactNode;
    /** Flag controls whether icon should be hidden or not    */
    noIcon?: boolean;
    rightContainer?: ReactNode | string;
}

const mapDesignToIconDesign = {
    error: WarningRing,
    warning: WarningTr,
    success: Checkmark,
    plain: InfoRing,
    accent: InfoRing,
};

export const Alert: FC<AlertProps> = (props) => {
    const {
        title,
        children,
        noIcon,
        rightContainer,
        actions,
        compactBelow,
        compact = false,
        design = 'plain',
        dynamic,
        ...attrs
    } = props;
    const Icon = mapDesignToIconDesign[design];
    const isCompact = actions ? true : compact;

    if (compactBelow) {
        // eslint-disable-next-line no-console
        console.warn(
            '"compactBelow" property is deprecated and will be removed in the next major version. Use "compact" instead.'
        );
    }

    const theme = useTheme({ ...props, compact, design });

    return (
        <Box {...(attrs as {})} $compactBelow={compactBelow} $compact={isCompact} $design={design} $dynamic={dynamic}>
            {!noIcon && (
                <IconContainer>
                    <Icon size='l' />
                </IconContainer>
            )}

            <TextContainer>
                {title && <Title>{title}</Title>}
                <ContentContainer>{children}</ContentContainer>

                {actions && (
                    <ThemeProvider theme={theme}>
                        <Actions>{actions}</Actions>
                    </ThemeProvider>
                )}
            </TextContainer>

            {rightContainer && <RightContainer>{rightContainer}</RightContainer>}
        </Box>
    );
};

Alert.displayName = 'Alert';
