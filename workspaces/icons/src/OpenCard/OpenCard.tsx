import React, { SVGAttributes } from 'react';

export interface OpenCardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OpenCard: React.FC<OpenCardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.016 4c1.096 0 1.983.888 1.984 1.984v10.032A1.985 1.985 0 0120.016 18H10v-1.989L20.016 16l-.01-6H5.994v2H4V5.984C4 4.888 4.888 4.001 5.984 4h14.032zM5.987 8H20V6H5.987v2zM6 13v3h3v2H6v3H4v-3H1v-2h3v-3h2z' />
        </svg>
    );
};

OpenCard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OpenCard.displayName = 'OpenCard';
export default OpenCard;
