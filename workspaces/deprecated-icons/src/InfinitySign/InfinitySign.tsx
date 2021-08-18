import React, { SVGAttributes } from 'react';

export interface InfinitySignProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InfinitySign: React.FC<InfinitySignProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.034 6.786c-2.327 0-3.991 1.433-5.316 2.913l1.25 1.469c1.3-1.488 2.508-2.472 4.066-2.472a3.355 3.355 0 110 6.709c-2.127 0-3.662-1.92-5.288-3.952-1.836-2.295-3.735-4.667-6.78-4.667a5.265 5.265 0 100 10.53c2.323 0 3.987-1.43 5.315-2.913l-1.251-1.469c-1.3 1.489-2.508 2.471-4.064 2.471a3.355 3.355 0 110-6.709c2.127 0 3.662 1.92 5.29 3.955 1.836 2.293 3.734 4.665 6.778 4.665a5.265 5.265 0 000-10.53z' />
        </svg>
    );
};

InfinitySign.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InfinitySign.displayName = 'InfinitySign';
export default InfinitySign;
