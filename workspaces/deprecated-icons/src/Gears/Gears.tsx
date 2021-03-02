import React, { SVGAttributes } from 'react';

export interface GearsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gears: React.FC<GearsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.999 6c-.005.36-.059.716-.16 1.061l.953.55-1 1.733-.941-.544c-.51.515-1.15.88-1.852 1.058v1.12h-2V9.857A3.982 3.982 0 0114.148 8.8l-1.029.594-1-1.732 1.041-.6A3.965 3.965 0 0112.999 6c.005-.36.06-.716.161-1.061l-.953-.55 1-1.733.941.544c.51-.514 1.15-.88 1.851-1.058V1h2v1.143A3.981 3.981 0 0119.851 3.2l1.029-.594 1 1.732-1.041.6c.101.345.155.702.16 1.062zm-4 2.3a2.3 2.3 0 100-4.6 2.3 2.3 0 000 4.6zm-3.831 4.946c.354.532.602 1.128.731 1.754h2.1v2h-2.1a4.983 4.983 0 01-.731 1.755l1.488 1.489-1.414 1.414-1.488-1.489a4.943 4.943 0 01-1.755.731V23h-2v-2.097a4.951 4.951 0 01-1.783-.747l-1.417 1.5-1.456-1.371 1.471-1.561A4.976 4.976 0 014.1 17H2v-2h2.1a4.983 4.983 0 01.731-1.754l-1.488-1.489 1.419-1.414 1.483 1.488a4.946 4.946 0 011.754-.731V9h2v2.101a4.943 4.943 0 011.755.731l1.488-1.489 1.414 1.414-1.488 1.489zM8.999 19.3a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6z' />
        </svg>
    );
};

Gears.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gears.displayName = 'Gears';
export default Gears;
