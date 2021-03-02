import React, { SVGAttributes } from 'react';

export interface LampProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Lamp: React.FC<LampProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.016 2.821A1 1 0 018 2h8a1 1 0 01.984.821l2 11A1 1 0 0118 15h-1v3h-2v-3h-2v5h4v2H7v-2h4v-5H6a1 1 0 01-.984-1.179l2-11zM8.835 4l-1.637 9h9.604l-1.637-9h-6.33z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Lamp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Lamp.displayName = 'Lamp';
export default Lamp;
