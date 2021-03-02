import React, { SVGAttributes } from 'react';

export interface Crane2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Crane2: React.FC<Crane2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.535 9L19 5.3V2H5v3.3L7.465 9H9v4l2 2h1.5a2.5 2.5 0 11-2.449 3h-2A4.488 4.488 0 1015 13.775V9h1.535zM7 4.7V4h10v.7L15.465 7h-6.93L7 4.7zm6 8.3h-2V9h2v4z' />
        </svg>
    );
};

Crane2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Crane2.displayName = 'Crane2';
export default Crane2;
