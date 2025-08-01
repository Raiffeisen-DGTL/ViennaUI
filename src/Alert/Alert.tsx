import React, { FC, ReactNode } from 'react';
import { WarningTrIcon, WarningRingIcon, InfoRingIcon, CheckmarkIcon } from 'vienna.icons';
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
    CloseIcon,
    AlertDesign,
} from './Alert.styles';
import { useTheme } from './hooks';
import { BoxStyled } from '../Utils/styled';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

export const defaultAlertTestId: AlertProps['testId'] = {
    container: 'alert_container',
    title: 'alert_title',
    content: 'alert_content',
    icon: 'alert_icon',
    iconContainer: 'alert_icon-container',
    closeIcon: 'alert_close-icon',
};

export interface AlertProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'title'> {
    design?: PropsBox['$design'];
    /** Flag controls if the element width is dynamic.
     * When true - element's width will be defined by it's content.
     * When false - element's width will be set to 100%.
     */
    dynamic?: PropsBox['$dynamic'];
    /** Value to turn on compact mode when viewport width is below it  */
    compact?: PropsBox['$compact'];
    title?: ReactNode;
    actions?: ReactNode;
    /** Flag controls whether icon should be hidden or not    */
    noIcon?: boolean;
    rightContainer?: ReactNode | string;
    testId?: {
        container?: string;
        title?: string;
        content?: string;
        icon?: string;
        iconContainer?: string;
        closeIcon?: string;
    };
    onClose?: (e: React.MouseEvent) => void;
}

export interface AlertThemeProps extends AlertProps {
    compact?: ResponsiveProp<boolean, Breakpoints>;
    design?: AlertDesign;
}
const mapDesignToIconDesign = {
    error: WarningRingIcon,
    warning: WarningTrIcon,
    success: CheckmarkIcon,
    plain: InfoRingIcon,
    accent: InfoRingIcon,
};

export const Alert: FC<AlertProps> = (props) => {
    const {
        title,
        children,
        noIcon,
        rightContainer,
        actions,
        compact = false,
        design = 'plain',
        dynamic,
        testId = defaultAlertTestId,
        onClose,
        ...attrs
    } = props;
    const Icon = mapDesignToIconDesign[design];
    const isCompact = actions ? true : compact;

    const theme = useTheme({ ...props, compact, design });

    return (
        <Box data-testid={testId?.container} $compact={isCompact} $design={design} $dynamic={dynamic} {...attrs}>
            {!noIcon && (
                <IconContainer data-testid={testId?.iconContainer}>
                    <Icon size='l' data-testid={testId?.icon} />
                </IconContainer>
            )}

            <TextContainer>
                {title && <Title data-testid={testId?.title}>{title}</Title>}
                <ContentContainer data-testid={testId?.content}>{children}</ContentContainer>

                {actions && (
                    <ThemeProvider theme={theme}>
                        <Actions>{actions}</Actions>
                    </ThemeProvider>
                )}
            </TextContainer>

            {(onClose || rightContainer) && (
                <RightContainer>
                    {rightContainer}
                    {onClose && <CloseIcon size={'m'} data-testid={testId?.closeIcon} onClick={onClose} />}
                </RightContainer>
            )}
        </Box>
    );
};

Alert.displayName = 'Alert';
