import React from 'react';
import { Box, PropsBox } from './Message.styles';
import { BoxStyled } from '../../Utils/styled';

export interface MessageProps extends BoxStyled<typeof Box, PropsBox> {
    color?: PropsBox['$color'];
    align?: PropsBox['$align'];
    size?: PropsBox['$size'];
}

export const Message: React.FC<MessageProps> = (props) => {
    const { children, color, align, size, ...attrs } = props;
    return (
        <Box {...(attrs as {})} $color={color} $align={align} $size={size}>
            {children}
        </Box>
    );
};

Message.displayName = 'Message';
