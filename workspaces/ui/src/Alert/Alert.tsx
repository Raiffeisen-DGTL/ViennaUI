import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { WarningTr, WarningRing, InfoRing, Checkmark } from 'vienna.icons';
import { ThemeProvider, getPresets } from 'vienna.ui-primitives';
import { Box, IconContainer, Title, TextContainer, Actions } from './Alert.styles';

type AlertDesign = 'plain' | 'error' | 'warning' | 'success' | 'accent';

interface Props {
    children: React.ReactNode;
    title?: React.ReactNode;
    actions?: React.ReactNode;
    design?: AlertDesign;

    /** Flag controls if the element width is dynamic.
     * When true - element's width will be defined by it's content.
     * When false - element's width will be set to 100%.
     */
    dynamic?: boolean;

    /** Flag controls whether icon should be hidden or not    */
    noIcon?: boolean;

    /** Value to turn on compact mode when viewport width is below it  */
    compactBelow?: number;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type AlertProps = HTMLAttributeProps & Props;

const mapDesignToIconDesign: { [key in AlertDesign]: any } = {
    error: WarningTr,
    warning: WarningRing,
    success: Checkmark,
    plain: InfoRing,
    accent: InfoRing,
};

const presets = getPresets('alert.buttons', {
    base: null,
    design: 'design',
});

const buildTheme = (props) => {
    return {
        button: {
            custom: presets.base(props),
            ...presets.design(props),
        },
    };
};

export const Alert: React.FC<AlertProps> = (props): JSX.Element => {
    const { title, children, noIcon, actions, compactBelow, ...attrs } = props;
    const Icon = props.design && mapDesignToIconDesign[props.design];
    const compact = actions ? 100000 : compactBelow;

    const themedContext = useContext(ThemeContext);
    const theme = useMemo(() => {
        return buildTheme({ ...props, theme: themedContext });
    }, [props, themedContext]);

    return (
        <Box compactBelow={compact} {...attrs}>
            {!noIcon && (
                <IconContainer>
                    <Icon size='l' />
                </IconContainer>
            )}

            <TextContainer>
                {title && <Title>{title}</Title>}
                <div>{children}</div>

                {actions && (
                    <ThemeProvider theme={theme}>
                        <Actions>{actions}</Actions>
                    </ThemeProvider>
                )}
            </TextContainer>
        </Box>
    );
};

Alert.defaultProps = {
    design: 'plain',
};

Alert.displayName = 'Alert';
export default Alert;
