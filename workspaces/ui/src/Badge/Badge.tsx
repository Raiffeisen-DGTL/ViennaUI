import React, { HTMLProps } from 'react';
import { Box, Item } from './Badge.styles';

export interface BadgeProps extends Omit<HTMLProps<HTMLAnchorElement>, 'size'> {
    children?: React.ReactNode;
    color?:
        | 'paris10'
        | 'paris30'
        | 'miami10'
        | 'miami30'
        | 'dubai10'
        | 'dubai30'
        | 'nice10'
        | 'nice30'
        | 'seattle05'
        | 'seattle10';
    size?: 's' | 'm' | 'l';
    grid?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    forwardedRef?: any;
    clickable?: boolean;
}

export const Badge: React.FC<BadgeProps> = (props): JSX.Element => {
    const { children, forwardedRef, ...attrs } = props;

    const as = attrs.href ? 'a' : 'span';
    const clickable = props.onClick ?? attrs.href ?? props.clickable;

    return (
        <Box {...attrs} as={as} ref={forwardedRef} clickable={clickable}>
            {React.Children.map(children, (child: React.ReactNode) => (
                <Item size={props.size}>{child}</Item>
            ))}
        </Box>
    );
};

Badge.displayName = 'Badge';
Badge.defaultProps = {
    color: 'paris10',
    size: 'm',
};

export default Badge;
