import React from 'react';
import { Box } from './Content.styles';
import { Message } from '../Message';

export interface ContentProps {
    [key: string]: any;
    children?: React.ReactNode;
}

export const Content: React.FC<ContentProps> = (props): JSX.Element => {
    const { children, ...attrs } = props;

    const items: any = React.Children.toArray(children);
    const messageIsEmpty = !items.find((elem: JSX.Element) => elem.type === Message);

    return (
        <Box {...attrs}>
            {children}
            {messageIsEmpty && <Message />}
        </Box>
    );
};

Content.displayName = 'Content';
export default Content;
