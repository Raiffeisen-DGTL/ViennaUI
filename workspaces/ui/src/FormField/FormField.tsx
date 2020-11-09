import React, { HTMLAttributes } from 'react';
import Message, { MessageProps } from './Message/Message';
import Label, { LabelProps } from './Label/Label';
import Content, { ContentProps } from './Content/Content';
import { Box } from './FormField.styles';

interface Components {
    Message: React.FC<MessageProps>;
    Label: React.FC<LabelProps>;
    Content: React.FC<ContentProps>;
}

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    [key: string]: any;
    children?: React.ReactNode;
    inline?: boolean;
}

export type FormFieldMessageProps = MessageProps;
export type FormFieldLabelProps = LabelProps;
export type FormFieldContentProps = ContentProps;

export const FormField: React.FC<FormFieldProps> & Components = (props): JSX.Element => {
    const { children, inline, ...attrs } = props;

    return (
        <Box inline={inline} {...attrs}>
            {children}
        </Box>
    );
};

FormField.Message = Message;
FormField.Label = Label;
FormField.Content = Content;

FormField.displayName = 'FormField';
export default FormField;
