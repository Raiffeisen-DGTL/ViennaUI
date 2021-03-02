import React, { SVGAttributes } from 'react';

export interface CardRaifProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardRaif: React.FC<CardRaifProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.017 16.427L12 13.42l2.983 3.008 1.183-1.192-2.983-3.009.622-.628v-1.24l.433-.436v1.081l.376.38 1.512-1.526.374.377a2.566 2.566 0 00-.752-1.794c-.747-.725-1.554-.398-1.83-.12l-1.511 1.525.385.389-.792.8-.793-.8.386-.389-1.511-1.525c-.276-.278-1.083-.605-1.83.12a2.566 2.566 0 00-.752 1.794l.374-.377 1.512 1.526.376-.38v-1.08l.433.435v1.24l.622.628-2.983 3.01 1.183 1.191z' />
            <path
                fillRule='evenodd'
                d='M2 7a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-1a1 1 0 00-1 1v1h2v2H4v7a1 1 0 001 1h14a1 1 0 001-1v-7h-2V8h2V7a1 1 0 00-1-1H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CardRaif.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardRaif.displayName = 'CardRaif';
export default CardRaif;
