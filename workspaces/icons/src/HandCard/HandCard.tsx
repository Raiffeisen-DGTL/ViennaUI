import React, { SVGAttributes } from 'react';

export interface HandCardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HandCard: React.FC<HandCardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22.001 10.151a1.982 1.982 0 00-1.985-1.982h-1.13l-4.885-6h-12v2h11.172l3.18 4H10.3l-1.926 1.988 4.826 4.527-.535.725c-1.48-.719-6.036-3.054-7.68-4.7A3.355 3.355 0 014 8.169H2a5.323 5.323 0 001.574 3.957c1.657 1.657 6.333 4.116 8.3 5.093.842.42 1.863.159 2.4-.613l.812-1.234a2.045 2.045 0 00-.744-2.337l-3.087-2.866H20v2h-5.02l.583.484c.418.411.7.94.81 1.516H20v5H7v-2.86l-2-1.14v4a2 2 0 002 2h13.015A1.983 1.983 0 0022 19.185v-9.034z' />
        </svg>
    );
};

HandCard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HandCard.displayName = 'HandCard';
export default HandCard;
