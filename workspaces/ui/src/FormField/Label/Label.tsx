import React from 'react';
import { Box } from './Label.styles';
import { FormFieldSize } from '../FormField';

export interface LabelProps {
    [key: string]: any;
    children?: React.ReactNode;
    required?: boolean;
    htmlFor?: string;
    size?: FormFieldSize;
}

export const Label: React.FC<LabelProps> = (props): JSX.Element => {
    const { children, ...attrs } = props;
    return <Box {...attrs}>{children}</Box>;
};

Label.displayName = 'Label';
export default Label;
