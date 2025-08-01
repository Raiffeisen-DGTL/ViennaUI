import React, { FC, ReactElement } from 'react';
import { Box } from './Content.styles';
import { Message } from '../Message';
import { FormFieldSize } from '../FormField';
import { BoxStyled } from '../../Utils/styled';

export const defaultFormFieldContentTestId: ContentProps['testId'] = {
    container: 'form-field_content_container',
};

export interface ContentProps extends BoxStyled<typeof Box, object> {
    size?: FormFieldSize;
    fixateMessageHeight?: boolean;
    testId?: {
        container?: string;
    };
}

export const Content: FC<ContentProps> = (props) => {
    const { children, fixateMessageHeight = true, size, testId = defaultFormFieldContentTestId, ...attrs } = props;

    const items = React.Children.toArray(children);
    const messageIsEmpty = !(items as ReactElement[]).find((elem) => elem.type === Message);
    return (
        <Box data-testid={testId?.container} {...attrs}>
            {children}
            {fixateMessageHeight && messageIsEmpty && <Message size={size} />}
        </Box>
    );
};

Content.displayName = 'Content';
