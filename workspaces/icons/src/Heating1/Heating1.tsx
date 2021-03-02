import React, { SVGAttributes } from 'react';

export interface Heating1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Heating1: React.FC<Heating1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3.106 2.33a2 2 0 011.788 0l1 .5A2 2 0 017 4.617V5h2v-.382a2 2 0 011.106-1.789l1-.5a2 2 0 011.788 0l1 .5A2 2 0 0115 4.618V5h2v-.382a2 2 0 011.106-1.789l1-.5a2 2 0 011.788 0l1 .5A2 2 0 0123 4.618v14.764a2 2 0 01-1.106 1.789l-1 .5a2 2 0 01-1.788 0l-1-.5A2 2 0 0117 19.382V19h-2v.382a2 2 0 01-1.106 1.789l-1 .5a2 2 0 01-1.788 0l-1-.5A2 2 0 019 19.382V19H7v.382a2 2 0 01-1.106 1.789l-1 .5a2 2 0 01-1.788 0l-1-.5A2 2 0 011 19.382V4.618a2 2 0 011.106-1.789l1-.5zM13 4.617l-1-.5-1 .5V6a1 1 0 01-1 1H7v2h3a1 1 0 011 1v4a1 1 0 01-1 1H7v2h3a1 1 0 011 1v1.382l1 .5 1-.5V4.618zM15 11v2h2v-2h-2zm0 4v2h3a1 1 0 011 1v1.382l1 .5 1-.5V4.618l-1-.5-1 .5V6a1 1 0 01-1 1h-3v2h3a1 1 0 011 1v4a1 1 0 01-1 1h-3zm-6-2H7v-2h2v2zm-4 6.382l-1 .5-1-.5V4.618l1-.5 1 .5v14.764z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Heating1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Heating1.displayName = 'Heating1';
export default Heating1;
