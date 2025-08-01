import React from 'react';
import { Box, PropsBox } from './Message.styles';
import { BoxStyled } from '../../Utils/styled';

export const defaultFormFieldMessageTestId: MessageProps['testId'] = {
    container: 'form-field_message_container',
};

export interface MessageProps extends BoxStyled<typeof Box, PropsBox> {
    color?: PropsBox['$color'];
    align?: PropsBox['$align'];
    size?: PropsBox['$size'];
    testId?: {
        container?: string;
    };
}

export const Message: React.FC<MessageProps> = (props) => {
    const { children, color, align, size, testId = defaultFormFieldMessageTestId, ...attrs } = props;
    return (
        <Box data-testid={testId?.container} {...attrs} $color={color} $align={align} $size={size}>
            {children}
        </Box>
    );
};

Message.displayName = 'Message';
