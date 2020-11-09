import React, { SVGAttributes } from 'react';

export interface ClipProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clip: React.FC<ClipProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.156 3.814a5.848 5.848 0 00-8.273 0L4 10.7V12h1.244l6.912-6.913a4.05 4.05 0 015.727 5.727L9.4 19.3a2.616 2.616 0 01-1.862.772h-.009a2.634 2.634 0 01-1.854-4.5l6.485-6.484a1.221 1.221 0 011.726 1.728L9 15.725V17h1.269l4.888-4.913a3.021 3.021 0 00-4.273-4.273L4.4 14.3a4.434 4.434 0 003.122 7.57h.015a4.406 4.406 0 003.136-1.3l8.485-8.483a5.848 5.848 0 000-8.273h-.002z' />
        </svg>
    );
};

Clip.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clip.displayName = 'Clip';
export default Clip;
