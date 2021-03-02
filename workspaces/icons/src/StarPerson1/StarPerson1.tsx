import React, { SVGAttributes } from 'react';

export interface StarPerson1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const StarPerson1: React.FC<StarPerson1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 7a5 5 0 1110 0A5 5 0 014 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M1 22c0-4.402 3.09-9 8.5-9 1.12 0 2.157.201 3.094.57l-.73 1.86A6.426 6.426 0 009.5 15C5.473 15 3 18.402 3 22H1z' />
            <path
                fillRule='evenodd'
                d='M19.187 13.555a1.1 1.1 0 00-1.815 0l-1.303 1.902-2.212.652a1.1 1.1 0 00-.56 1.726l1.405 1.827-.063 2.305a1.1 1.1 0 001.468 1.067l2.172-.773 2.173.773a1.1 1.1 0 001.468-1.067l-.063-2.305 1.406-1.827a1.1 1.1 0 00-.56-1.726l-2.213-.652-1.303-1.902zm-1.87 3.62l.962-1.406.964 1.405 1.634.482-1.039 1.35.047 1.703-1.606-.57-1.605.57.047-1.703-1.039-1.35 1.634-.482z'
                clipRule='evenodd'
            />
        </svg>
    );
};

StarPerson1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

StarPerson1.displayName = 'StarPerson1';
export default StarPerson1;
