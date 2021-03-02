import React, { SVGAttributes } from 'react';

export interface LampHomeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LampHome: React.FC<LampHomeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 20h3l1 1v1H7v-1l1-1h3v-6H4.89L6 3.84A2.06 2.06 0 018 2h8.11a2.06 2.06 0 012 1.84l1 10.16H13v6zM7.91 4l-.8 8h9.78l-.8-8H7.91zM15 15h2v3h-2v-3z' />
        </svg>
    );
};

LampHome.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LampHome.displayName = 'LampHome';
export default LampHome;
