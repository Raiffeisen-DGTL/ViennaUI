import React, { SVGAttributes } from 'react';

export interface DislikeFillProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DislikeFill: React.FC<DislikeFillProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 16h5.145a2 2 0 001.88-2.684l-2.546-7A2 2 0 0017.599 5H10L7 6.5V6a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h3a1 1 0 001-1h2l3.18 5.564a1.748 1.748 0 003.08-.085l.214-.427a3.18 3.18 0 00.24-2.193L15 16z' />
        </svg>
    );
};

DislikeFill.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DislikeFill.displayName = 'DislikeFill';
export default DislikeFill;
