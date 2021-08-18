import React, { useContext, useCallback, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProvider, getPresets } from 'vienna.ui-primitives';
import Popover from '../Popover/Popover';
import { Definition, Icon, Wrapper } from './Hint.styles';

export enum HintAnchorIcon {
    Info = 'info',
    Question = 'question',
}

export interface HintProps {
    id?: string;
    design?: 'dark' | 'light';
    size?: 's' | 'm' | 'l';
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    header?: React.ReactNode;
    content?: React.ReactNode;
    width?: number;
    anchorIcon?: HintAnchorIcon;
}

// configuring theme for popover component
const presets = getPresets('hint', {
    popover: null,
});
const buildTheme = (props) => {
    return {
        popover: {
            wrapper: {
                custom: {
                    'vertical-align': 'sub',
                    'align-items': 'center',
                    'justify-content': 'center',
                },
            },

            ...presets.popover(props),
        },
    };
};

export const Hint: React.FC<HintProps> = (props: React.PropsWithChildren<HintProps>) => {
    const { children, size = 'm', anchorIcon, ...attrs } = props;

    // getting custom theme
    const themedContext = useContext(ThemeContext);
    const theme = useMemo(() => {
        return buildTheme({ ...props, theme: themedContext });
    }, [themedContext]);

    const constructDefinition = useCallback(() => {
        if (!children) {
            return null;
        }
        if (typeof children === 'string') {
            return <Definition>{children}</Definition>;
        }

        return <Wrapper>{children}</Wrapper>;
    }, [children]);

    return (
        <>
            {constructDefinition()}
            <ThemeProvider theme={theme}>
                <Popover allowKeyboardEvents {...attrs}>
                    {anchorIcon === HintAnchorIcon.Info && (
                        <Icon
                            tabIndex={1}
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            size={size}
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 7.2H7.2V9H8.1V11.7H6.3V13.5H11.7V11.7H9.9V8.1C9.9 7.60294 9.49706 7.2 9 7.2ZM9 3.6C8.25441 3.6 7.65 4.20442 7.65 4.95C7.65 5.69558 8.25441 6.3 9 6.3C9.74558 6.3 10.35 5.69558 10.35 4.95C10.35 4.20442 9.74558 3.6 9 3.6Z'
                                fill='currentcolor'
                            />
                        </Icon>
                    )}
                    {anchorIcon === HintAnchorIcon.Question && (
                        <Icon
                            xmlns='http://www.w3.org/2000/svg'
                            size={size}
                            preserveAspectRatio='xMinYMin meet'
                            viewBox='2 2 20 20'
                            width='24'
                            height='24'
                            fill='none'>
                            <defs />
                            <path
                                fill='currentColor'
                                fillRule='evenodd'
                                d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-.734-7a4.8 4.8 0 011.342-3.038l.446-.462c.564-.44.89-1.118.879-1.833a1.635 1.635 0 00-1.768-1.6A1.9 1.9 0 0010.4 10H8.6a3.7 3.7 0 013.566-3.734 3.5 3.5 0 013.567 3.484 3.911 3.911 0 01-1.4 3.056l-.433.426-.175.18c-.54.556-.659.679-.659 1.588h-1.8zM13 18v-2h-2v2h2z'
                                clipRule='evenodd'
                            />
                        </Icon>
                    )}
                </Popover>
            </ThemeProvider>
        </>
    );
};

Hint.displayName = 'Hint';
Hint.defaultProps = {
    anchorIcon: HintAnchorIcon.Info,
};
export default Hint;
