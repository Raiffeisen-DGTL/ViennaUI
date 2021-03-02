import React, { SVGAttributes } from 'react';

export interface GolfProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Golf: React.FC<GolfProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.351 2.064A1 1 0 007 3v11.053c-1.149.125-2.205.461-3.05.968C2.885 15.661 2 16.682 2 18s.885 2.34 1.95 2.979C5.035 21.629 6.47 22 8 22c1.53 0 2.965-.37 4.05-1.021C13.115 20.339 14 19.318 14 18s-.885-2.34-1.95-2.979c-.845-.507-1.901-.843-3.05-.968v-4.36l7.351-2.757a1 1 0 000-1.872l-8-3zM7 16.068V18h2v-1.932c.806.113 1.501.356 2.021.668.745.447.979.925.979 1.264 0 .34-.234.817-.979 1.264-.725.435-1.79.736-3.021.736-1.23 0-2.296-.301-3.021-.736C4.234 18.817 4 18.339 4 18c0-.34.234-.817.979-1.264.52-.312 1.215-.555 2.021-.668zM13.152 6L9 7.557V4.443L13.152 6zM16 19a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Golf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Golf.displayName = 'Golf';
export default Golf;
