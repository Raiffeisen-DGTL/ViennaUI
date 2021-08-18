import React, { SVGAttributes } from 'react';

export interface FavEmptyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FavEmpty: React.FC<FavEmptyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a1 1 0 01.918.604l2.47 5.734 6.215.576a1 1 0 01.567 1.747l-4.69 4.12 1.373 6.09a1 1 0 01-1.486 1.079L12 18.763 6.633 21.95a1 1 0 01-1.487-1.08l1.373-6.09-4.69-4.119a1 1 0 01.568-1.747l6.215-.576 2.47-5.734A1 1 0 0112 2zm0 3.528l-1.786 4.146a1 1 0 01-.826.6l-4.494.417 3.391 2.98a1 1 0 01.316.97l-.993 4.404 3.881-2.305a1 1 0 011.021 0l3.882 2.305-.993-4.404a1 1 0 01.316-.97l3.39-2.98-4.494-.417a1 1 0 01-.826-.6L12 5.528z'
                clipRule='evenodd'
            />
        </svg>
    );
};

FavEmpty.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FavEmpty.displayName = 'FavEmpty';
export default FavEmpty;
