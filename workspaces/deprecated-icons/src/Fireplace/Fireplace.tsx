import React, { SVGAttributes } from 'react';

export interface FireplaceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fireplace: React.FC<FireplaceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 4L1 3V2h22v1l-1 1v15h-2V4H4v15H2V4zm9.32 5.72L12 9l.68.73c.31.33 3.05 3.32 3.05 5.54a3.73 3.73 0 01-7.46 0c0-2.24 2.74-5.21 3.05-5.55zm2.55 5.55c0-.85-.95-2.34-1.87-3.48-.87 1.1-1.87 2.58-1.87 3.48a1.87 1.87 0 103.74 0zM19 19h-2V9.21a11.08 11.08 0 00-10 0V19H5V8l.5-.29a13.16 13.16 0 0113 0L19 8v11zM1 20h22v2H1v-2z' />
        </svg>
    );
};

Fireplace.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fireplace.displayName = 'Fireplace';
export default Fireplace;
