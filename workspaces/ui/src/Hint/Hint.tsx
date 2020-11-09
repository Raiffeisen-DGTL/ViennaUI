import React, { useCallback } from 'react';
import { ThemeProvider } from 'vienna.ui-primitives';
import Popover from '../Popover/Popover';
import { Definition, Icon, Wrapper } from './Hint.styles';

export interface HintProps {
    id?: string;
    design?: 'dark' | 'light';
    size?: 's' | 'm' | 'l';
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    header?: React.ReactNode;
    content?: React.ReactNode;
    width?: number;
}

const customTheme = {
    popover: {
        wrapper: {
            custom: {
                'vertical-align': 'sub',
                'align-items': 'center',
                'justify-content': 'center',
            },
        },
    },
};

export const Hint: React.FC<HintProps> = (props: React.PropsWithChildren<HintProps>) => {
    const { children, size = 'm', ...attrs } = props;

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
            <ThemeProvider theme={customTheme}>
                <Popover allowKeyboardEvents {...attrs}>
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
                </Popover>
            </ThemeProvider>
        </>
    );
};

Hint.displayName = 'Hint';
export default Hint;
