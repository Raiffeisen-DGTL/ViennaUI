import React from 'react';
import { Box, Head, Title, SubTitle, Footer, LyaoutProps, Body, BodyProps } from './Screen.styles';

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

Screen.Head = Head;
Screen.Title = Title;
Screen.SubTitle = SubTitle;
Screen.Body = Body;
Screen.Footer = Footer;

Screen.displayName = 'Screen';
export default Screen;
