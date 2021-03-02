import React, { SVGAttributes } from 'react';

export interface BalloonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Balloon: React.FC<BalloonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.921 8.096a8.547 8.547 0 01-1.779 5.603 7.91 7.91 0 01-8.042 3.227l-.176 1.453a.927.927 0 01-1.479.628l-3.7-2.79a.927.927 0 01.21-1.6l1.357-.55a7.906 7.906 0 01.894-8.618 8.541 8.541 0 014.9-3.245 6.234 6.234 0 017.815 5.892zm-3.212 4.518A6.743 6.743 0 0020.123 8.2 4.44 4.44 0 0014.5 3.96a6.743 6.743 0 00-3.856 2.575c-1.792 2.374-1.889 5.548-.227 7.381l.183.2a16.389 16.389 0 01-1.743 1.486l1.563 1.187s.74-1.707.98-2.063l.275.134c2.221 1.1 5.243.128 7.034-2.246zM2.907 21.926H2v-1.8h.907a5.106 5.106 0 004.152-2.142l1.466 1.042a6.9 6.9 0 01-5.618 2.9zM14.384 5.101a4.113 4.113 0 011.574-.048v1.834a2.074 2.074 0 00-.621-.094c-.187 0-.373.022-.555.063a3.559 3.559 0 00-2.635 3.423c.011.256.063.508.153.747h-1.86a4.35 4.35 0 01-.092-.684 5.353 5.353 0 014.036-5.24z' />
        </svg>
    );
};

Balloon.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Balloon.displayName = 'Balloon';
export default Balloon;
