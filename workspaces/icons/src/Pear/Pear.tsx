import React, { SVGAttributes } from 'react';

export interface PearProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pear: React.FC<PearProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a1 1 0 00-1 1v2.1A5.002 5.002 0 007 10v.384a5.305 5.305 0 00-1.226.92c-.476.485-.813 1.03-1.126 1.625-.714 1.355-.846 2.88-.356 4.317.487 1.427 1.54 2.635 2.93 3.474C8.613 21.558 10.292 22 12 22c1.708 0 3.387-.442 4.778-1.28 1.39-.839 2.444-2.047 2.93-3.474.49-1.436.358-2.962-.356-4.317-.313-.594-.65-1.14-1.125-1.624A5.305 5.305 0 0017 10.384V10a5.002 5.002 0 00-4-4.9V4h2V2h-3zm-1 5.17V9h2V7.17c1.165.413 2 1.524 2 2.83v1.644l.587.267c.583.264.941.519 1.212.795.277.282.507.631.784 1.156.464.881.54 1.836.232 2.739-.311.912-1.016 1.77-2.07 2.406-1.054.636-2.371.993-3.745.993s-2.69-.357-3.745-.993c-1.054-.635-1.759-1.494-2.07-2.406-.308-.903-.232-1.858.232-2.74.277-.524.507-.873.784-1.155.27-.276.63-.531 1.212-.795L9 11.644V10c0-1.306.835-2.417 2-2.83z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Pear.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pear.displayName = 'Pear';
export default Pear;
