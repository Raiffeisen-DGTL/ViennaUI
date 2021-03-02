import React, { SVGAttributes } from 'react';

export interface CardNmbProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardNmb: React.FC<CardNmbProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 6a3 3 0 013-3h14a3 3 0 013 3v13h-2V9H4v1H2V6zm2 1h16V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1z'
                clipRule='evenodd'
            />
            <path d='M2.653 12.062a1 1 0 011.106.287L8 17.297V12h2v8a1 1 0 01-1.76.65L4 15.704V21H2v-8a1 1 0 01.653-.938z' />
            <path
                fillRule='evenodd'
                d='M15 12a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
            <path d='M18 21h-6v-2h6v2z' />
        </svg>
    );
};

CardNmb.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardNmb.displayName = 'CardNmb';
export default CardNmb;
