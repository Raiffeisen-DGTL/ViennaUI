import React from 'react';
import { Box } from './Message.styles';

export interface MessageProps {
    [key: string]: any;
    children?: React.ReactNode;
    color?: 'warning' | 'critical';
    align?: 'left' | 'center' | 'right';
}

export const Message: React.FC<MessageProps> = (props): JSX.Element => {
    const { children, ...attrs } = props;
    return <Box {...attrs}>{children}</Box>;
};

Message.displayName = 'Message';
export default Message;
