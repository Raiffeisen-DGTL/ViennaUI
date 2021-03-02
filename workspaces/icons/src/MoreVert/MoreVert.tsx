import React, { SVGAttributes } from 'react';

export interface MoreVertProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoreVert: React.FC<MoreVertProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 4a2 2 0 11-4 0 2 2 0 014 0zm0 16a2 2 0 11-4 0 2 2 0 014 0zm0-8a2 2 0 11-4 0 2 2 0 014 0z' />
        </svg>
    );
};

MoreVert.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoreVert.displayName = 'MoreVert';
export default MoreVert;
