import React, { SVGAttributes } from 'react';

export interface Pin2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pin2: React.FC<Pin2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M14.68 21.947L9 20.054 3.316 21.95A1 1 0 012 21v-8h2v6.613l4-1.334V15h2v3.28l4 1.333V7.78l-1.242-.31.485-1.941 1.717.43 5.724-1.909A1 1 0 0122 5v14a1 1 0 01-.684.949l-6 2a1 1 0 01-.636-.002zM16 7.721v11.892l4-1.334V6.387l-4 1.334z'
                clipRule='evenodd'
            />
            <path d='M6.5 7a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M5.9 12.8a1 1 0 001.2 0l.002-.002.004-.003.012-.009.04-.03.142-.113a15.911 15.911 0 001.956-1.895C10.292 9.55 11.5 7.752 11.5 5.75 11.5 3.067 9.2 1 6.5 1s-5 2.067-5 4.75c0 2.002 1.208 3.8 2.244 4.998a15.911 15.911 0 002.097 2.007l.04.031.013.01.004.002.001.001.001.001zM6.5 3c1.719 0 3 1.291 3 2.75 0 1.248-.792 2.575-1.756 3.69A13.91 13.91 0 016.5 10.698c-.347-.31-.796-.741-1.244-1.258C4.292 8.325 3.5 6.998 3.5 5.75 3.5 4.291 4.781 3 6.5 3z'
                clipRule='evenodd'
            />
            <path fillRule='evenodd' d='M7.5 6a1 1 0 11-2 0 1 1 0 012 0z' clipRule='evenodd' />
        </svg>
    );
};

Pin2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pin2.displayName = 'Pin2';
export default Pin2;
