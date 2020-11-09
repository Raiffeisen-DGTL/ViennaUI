import React, { HTMLAttributes } from 'react';
import { Box } from './Heading.styles';

export interface HeadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    [key: string]: any;
    children?: React.ReactNode;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    type?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
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

export const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
    const { children, type, ...attrs } = props;

    return (
        <Box as={type} {...attrs}>
            {children}
        </Box>
    );
};

Heading.defaultProps = {
    type: 'h1',
    size: 'xl',
    margin: 'none',
    color: 'brand-primary',
};

Heading.displayName = 'Heading';
export default Heading;
