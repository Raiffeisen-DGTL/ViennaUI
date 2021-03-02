import React from 'react';
import { Box, Title, SubTitle, Footer, LyaoutProps, BodyProps } from './Screen.styles';
import { WrappedBody } from './WrappedBody';
import { WrappedHead } from './WrappedHead';

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
}

export interface ScreenSlots {
    Head: React.FC<LyaoutProps>;
    Title: React.FC<LyaoutProps>;
    SubTitle: React.FC<LyaoutProps>;
    Body: React.FC<BodyProps>;
    Footer: React.FC<LyaoutProps>;
}
export const Screen: React.FC<HTMLAttributeProps> & ScreenSlots = (props: HTMLAttributeProps) => {
    const { children, ...attr } = props;
    return <Box {...attr}>{children}</Box>;
};

Screen.Head = WrappedHead;
Screen.Title = Title;
Screen.SubTitle = SubTitle;
Screen.Body = WrappedBody;
Screen.Footer = Footer;

Screen.displayName = 'Screen';
export default Screen;
