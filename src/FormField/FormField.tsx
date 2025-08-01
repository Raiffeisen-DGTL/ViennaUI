import React, { FC, ReactElement, ReactNode } from 'react';
import { Message, MessageProps } from './Message/Message';
import { Label, LabelProps } from './Label/Label';
import { Content, ContentProps } from './Content/Content';
import { Box, PropsBox } from './FormField.styles';
import { BoxStyled } from '../Utils/styled';

export const defaultFormFieldTestId: FormFieldProps['testId'] = {
    container: 'form-field_container',
};

export type FormFieldSize = 's' | 'm';

export interface FormFieldProps extends BoxStyled<typeof Box, PropsBox> {
    inline?: boolean;
    size?: FormFieldSize;
    /* Значение false позволяет отключить отступ под валидационное сообщение */
    fixateMessageHeight?: boolean;
    testId?: {
        container?: string;
    };
}

export type FormFieldMessageProps = MessageProps;
export type FormFieldLabelProps = LabelProps;
export type FormFieldContentProps = ContentProps;

export const FormField: FC<FormFieldProps> & {
    Message: typeof Message;
    Label: typeof Label;
    Content: typeof Content;
} = (props) => {
    const {
        children,
        inline,
        size = 'm',
        fixateMessageHeight = true,
        testId = defaultFormFieldTestId,
        ...attrs
    } = props;
    const parseChildren = (currentChildren: ReactNode | ReactNode[]) => {
        return React.Children.map(currentChildren as ReactElement<FormFieldProps>[], (child) => {
            if (!child || !child.type) {
                return child;
            }

            let childProps = {};
            if (String(child.type) === String(Label) || String(child.type) === String(Message)) {
                childProps = {
                    ...child.props,
                    size,
                };
            } else if (String(child.type) === String(Content)) {
                childProps = {
                    ...child.props,
                    children: parseChildren(child.props.children),
                    size,
                    fixateMessageHeight,
                };
            } else {
                childProps = {
                    ...child.props,
                };
            }

            return React.cloneElement(child, childProps);
        })?.filter(Boolean);
    };

    return (
        <Box data-testid={testId?.container} {...attrs} $inline={inline}>
            {parseChildren(children)}
        </Box>
    );
};

FormField.Message = Message;
FormField.Label = Label;
FormField.Content = Content;

FormField.displayName = 'FormField';
