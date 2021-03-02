import React, { SVGAttributes } from 'react';

export interface HammersProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Hammers: React.FC<HammersProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.286 10.128L7.414 11l1.346 1.346-1.415 1.414L6 12.414l-3 3-2-2V8.586l6-6L11.414 7 9.7 8.714l1.346 1.345-1.414 1.415-1.346-1.346zm9.747 2.32L8.22 22.26a1.929 1.929 0 01-2.729 0l-1-1a1.929 1.929 0 010-2.729l9.813-9.814L12.586 7 17 2.586l6 6v4.828l-2 2-2.967-2.967zm-1.413-1.414l-.903-.903L5.956 19.9l.9.9 9.764-9.766zM3 12.586L8.586 7 7 5.414l-4 4v3.172zM15.414 7L21 12.586V9.414l-4-4L15.414 7zm4.055 11.487c.77.773.768 2.023-.004 2.794l-.907.907c-.772.77-2.022.77-2.794 0l-2.85-2.856 1.414-1.414 2.833 2.838.873-.872-2.834-2.838 1.418-1.414 2.851 2.855z' />
        </svg>
    );
};

Hammers.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Hammers.displayName = 'Hammers';
export default Hammers;
