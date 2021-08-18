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

export type FormFieldSize = 's' | 'm';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    [key: string]: any;
    children?: React.ReactNode;
    inline?: boolean;
    size?: FormFieldSize;
}

export type FormFieldMessageProps = MessageProps;
export type FormFieldLabelProps = LabelProps;
export type FormFieldContentProps = ContentProps;

export const FormField: React.FC<FormFieldProps> & Components = (props): JSX.Element => {
    const { children, inline, size = 's', ...attrs } = props;

    const parseChildren = (currentChildren) => {
        return React.Children.map(currentChildren, (child: JSX.Element) => {
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
        <Box inline={inline} {...attrs}>
            {parseChildren(children)}
        </Box>
    );
};

FormField.Message = Message;
FormField.Label = Label;
FormField.Content = Content;

FormField.displayName = 'FormField';
FormField.defaultProps = {
    size: 's',
};
export default FormField;
