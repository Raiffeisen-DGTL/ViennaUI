import React, { SVGAttributes } from 'react';

export interface Heating2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Heating2: React.FC<Heating2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.894 2.211a2 2 0 00-1.788 0l-1 .5A2 2 0 004 4.5v.382H1v2h3v10H2a1 1 0 00-1 1v4h2v-3h1v.382a2 2 0 001.106 1.789l1 .5a2 2 0 001.788 0l1-.5c.036-.018.072-.037.106-.057.034.02.07.039.106.057l1 .5a2 2 0 001.788 0l1-.5c.036-.018.072-.037.106-.057.034.02.07.039.106.057l1 .5a2 2 0 001.788 0l1-.5c.036-.018.072-.037.106-.057.035.02.07.039.106.057l1 .5a2 2 0 001.788 0l1-.5A2 2 0 0022 19.263V4.5a2 2 0 00-1.106-1.789l-1-.5a2 2 0 00-1.788 0l-1 .5a2.014 2.014 0 00-.106.057 2.014 2.014 0 00-.106-.057l-1-.5a2 2 0 00-1.788 0l-1 .5a2.02 2.02 0 00-.106.057 2.02 2.02 0 00-.106-.057l-1-.5a2 2 0 00-1.788 0l-1 .5A2.008 2.008 0 009 2.768a2.008 2.008 0 00-.106-.057l-1-.5zM6 19.264l1 .5 1-.5V4.5L7 4l-1 .5v14.764zm4 0l1 .5 1-.5V4.5L11 4l-1 .5v14.764zM16 4.5v14.764l-1 .5-1-.5V4.5l1-.5 1 .5zm2 14.764V4.5l1-.5 1 .5v14.764l-1 .5-1-.5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Heating2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Heating2.displayName = 'Heating2';
export default Heating2;
