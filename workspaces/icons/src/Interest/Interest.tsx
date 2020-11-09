import React, { SVGAttributes } from 'react';

export interface InterestProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Interest: React.FC<InterestProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 4H5v4h3V4zM3 4a2 2 0 012-2h3a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm16 12h-3v4h3v-4zm-5 0a2 2 0 012-2h3a2 2 0 012 2v4a2 2 0 01-2 2h-3a2 2 0 01-2-2v-4zm7-13v1.414L4.414 21H3v-1.414L19.586 3H21z' />
        </svg>
    );
};

Interest.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Interest.displayName = 'Interest';
export default Interest;
