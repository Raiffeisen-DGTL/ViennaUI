import React, { SVGAttributes } from 'react';

export interface WaterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Water: React.FC<WaterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.92 7.232C7.326 9.314 6 11.842 6 14a6 6 0 0012 0c0-2.159-1.328-4.686-2.92-6.768a19.338 19.338 0 00-2.238-2.477A7.346 7.346 0 0012 4.078l-.032.02c-.204.138-.48.357-.81.657a19.344 19.344 0 00-2.239 2.477zm2.42-5.072c.144-.066.382-.16.66-.16s.517.094.659.159c.164.075.328.173.485.277.315.211.671.5 1.045.84.75.684 1.634 1.635 2.48 2.742C18.328 8.186 20 11.158 20 14a8 8 0 11-16 0c0-2.841 1.673-5.814 3.33-7.982.847-1.107 1.73-2.058 2.48-2.742.374-.34.731-.629 1.046-.84.157-.104.321-.202.485-.277z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M13.932 14.518c.09-.34.09-.697 0-1.036l1.932-.517a4 4 0 01-4.9 4.899l.518-1.932a2.001 2.001 0 002.45-1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Water.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Water.displayName = 'Water';
export default Water;
