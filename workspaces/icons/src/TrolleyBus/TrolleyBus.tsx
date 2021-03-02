import React, { SVGAttributes } from 'react';

export interface TrolleyBusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TrolleyBus: React.FC<TrolleyBusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.512 2.512L9 5H7c-.825 0-1.567.403-2.082.918C4.403 6.433 4 7.175 4 8v7.979a121.318 121.318 0 00-.008 3.348C3.996 19.885 4 20.443 4 21a1 1 0 001 1h4a1 1 0 001-1h4a1 1 0 001 1h4a1 1 0 001-1c0-.557.004-1.115.008-1.673.008-1.117.016-2.234-.008-3.349V8c0-.825-.402-1.567-.918-2.082C18.567 5.403 17.825 5 17 5l-2.707-2.707A1 1 0 0013.586 2h-1.862a.3.3 0 00-.212.512L14 5h-2L9.293 2.293A1 1 0 008.586 2H6.724a.3.3 0 00-.212.512zM6 20v-2.382l.553.276a1 1 0 10.894-1.788L6 15.382V14.25c.347.073.753.153 1.196.234C8.59 14.737 10.41 15 12 15c1.59 0 3.411-.263 4.804-.516.444-.08.849-.161 1.196-.234v1.132l-1.447.724a1 1 0 10.894 1.788l.553-.276V20h-2v-1H8v1H6zm1.554-7.484A44.352 44.352 0 016 12.205V8c0-.175.097-.433.332-.668C6.567 7.097 6.825 7 7 7h10c.175 0 .433.097.668.332.235.235.332.493.332.668v4.205c-.402.088-.94.2-1.554.311C15.09 12.763 13.41 13 12 13c-1.41 0-3.089-.237-4.446-.484z'
                clipRule='evenodd'
            />
        </svg>
    );
};

TrolleyBus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TrolleyBus.displayName = 'TrolleyBus';
export default TrolleyBus;
