import React, { FC } from 'react';
import { Box } from './Content.styles';
import { Message } from '../Message';
import { FormFieldSize } from '../FormField';
import { BoxStyled } from '../../Utils/styled';

export interface ContentProps extends BoxStyled<typeof Box, {}> {
    size?: FormFieldSize;
    fixateMessageHeight?: boolean;
}

export const Content: FC<ContentProps> = (props) => {
    const { children, fixateMessageHeight = true, size, ...attrs } = props;

    const items: any = React.Children.toArray(children);
    const messageIsEmpty = !items.find((elem: JSX.Element) => elem.type === Message);

    return (
        <Box {...(attrs as {})}>
            {children}
            {fixateMessageHeight && messageIsEmpty && <Message size={size} />}
        </Box>
    );
};

Content.displayName = 'Content';
