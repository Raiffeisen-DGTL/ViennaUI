import React, { HTMLAttributes } from 'react';
import { Box } from './Text.styles';

export interface TextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    [key: string]: any;
    children?: React.ReactNode;
    size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
    type?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    weight?: 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black';
    color?:
        | 'brand-accent'
        | 'brand-white'
        | 'brand-primary'
        | 'geneva100'
        | 'moscow100'
        | 'osaka100'
        | 'seattle01'
        | 'seattle05'
        | 'seattle10'
        | 'seattle30'
        | 'seattle60'
        | 'seattle100'
        | 'seattle120'
        | 'seattle140'
        | 'currentColor';
    margin?: 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    uppercase?: boolean;
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
    const { children, type, ...attrs } = props;

    return (
        <Box as={type} {...attrs}>
            {children}
        </Box>
    );
};

Text.defaultProps = {
    type: 'span',
    size: 'm',
    color: 'brand-primary',
};

Text.displayName = 'Text';
export default Text;
