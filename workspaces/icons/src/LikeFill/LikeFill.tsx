import React, { SVGAttributes } from 'react';

export interface LikeFillProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LikeFill: React.FC<LikeFillProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 8h5.145a2 2 0 011.88 2.684l-2.546 7A2 2 0 0117.599 19H10l-3-1.5v.5a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 011 1h2l3.18-5.564a1.748 1.748 0 013.08.085l.214.427a3.18 3.18 0 01.24 2.193L15 8z' />
        </svg>
    );
};

LikeFill.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LikeFill.displayName = 'LikeFill';
export default LikeFill;
