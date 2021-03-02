import React, { SVGAttributes } from 'react';

export interface FavSelectedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FavSelected: React.FC<FavSelectedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2a1 1 0 01.918.604l2.47 5.734 6.215.576a1 1 0 01.567 1.747l-4.69 4.12 1.373 6.09a1 1 0 01-1.486 1.079L12 18.763 6.633 21.95a1 1 0 01-1.487-1.08l1.373-6.09-4.69-4.119a1 1 0 01.568-1.747l6.215-.576 2.47-5.734A1 1 0 0112 2z' />
        </svg>
    );
};

FavSelected.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FavSelected.displayName = 'FavSelected';
export default FavSelected;
