import React, { SVGAttributes } from 'react';

export interface BusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bus: React.FC<BusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.918 2.918C5.433 2.403 6.175 2 7 2h10c.825 0 1.567.403 2.082.918C19.597 3.433 20 4.175 20 5v.465l2.555 1.703A1 1 0 0123 8v3h-2V8.535l-1-.666V21a1 1 0 01-1 1h-4a1 1 0 01-1-1h-4a1 1 0 01-1 1H5a1 1 0 01-1-1V7.869l-1 .666V11H1V8a1 1 0 01.445-.832L4 5.465V5c0-.825.403-1.567.918-2.082zM6 20v-2.382l.553.276a1 1 0 10.894-1.788L6 15.382V14.25c.347.073.753.153 1.196.234C8.59 14.737 10.41 15 12 15c1.59 0 3.411-.263 4.804-.516.444-.08.849-.161 1.196-.234v1.132l-1.447.724a1 1 0 10.894 1.788l.553-.276V20h-2v-1H8v1H6zm0-7.795c.402.088.94.2 1.554.311C8.91 12.763 10.59 13 12 13c1.41 0 3.089-.237 4.446-.484A44.358 44.358 0 0018 12.205V8H6v4.205zM6 6V5c0-.175.097-.433.332-.668C6.567 4.097 6.825 4 7 4h10c.175 0 .433.097.668.332.235.235.332.493.332.668v1H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bus.displayName = 'Bus';
export default Bus;
