import React, { SVGAttributes } from 'react';

export interface CardioProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cardio: React.FC<CardioProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 2a1 1 0 01.949.684L15 17.838l2.051-6.154A1 1 0 0118 11h4v2h-3.28l-2.771 8.316a1 1 0 01-1.898 0L9 6.162l-2.051 6.154A1 1 0 016 13H2v-2h3.28l2.77-8.316A1 1 0 019 2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cardio.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cardio.displayName = 'Cardio';
export default Cardio;
