import React, { SVGAttributes } from 'react';

export interface DislikeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Dislike: React.FC<DislikeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.311 21.06a2.748 2.748 0 004.844-.134l.213-.427a4.18 4.18 0 00.317-2.883L16.28 16h2.765c2.122 0 3.574-2.144 2.785-4.114l-2.4-6A3 3 0 0016.646 4H10a1 1 0 00-.555.168L8 5.132V5a1 1 0 00-1-1H3a1 1 0 00-1 1v11a1 1 0 001 1h4a1 1 0 001-1h.42l2.891 5.06zM10.303 6L8 7.535V14h1a1 1 0 01.868.504l3.18 5.564a.748.748 0 001.318-.036l.214-.427a2.18 2.18 0 00.165-1.503L14.219 16H13v-2h6.046a1 1 0 00.928-1.371l-2.4-6A1 1 0 0016.646 6h-6.343zM4 15V6h2v9H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Dislike.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Dislike.displayName = 'Dislike';
export default Dislike;
