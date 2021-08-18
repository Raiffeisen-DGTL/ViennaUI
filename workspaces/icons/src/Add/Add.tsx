import React, { SVGAttributes } from 'react';

export interface AddProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Add: React.FC<AddProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z' />
        </svg>
    );
};

Add.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Add.displayName = 'Add';
export default Add;
