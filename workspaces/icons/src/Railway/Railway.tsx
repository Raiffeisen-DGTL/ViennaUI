import React, { SVGAttributes } from 'react';

export interface RailwayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Railway: React.FC<RailwayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 15a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M10 1a1 1 0 00-1 1H6a2 2 0 00-2 2v13a3 3 0 002.643 2.979L4 23h2.5l2.625-3h6.5l1.875 3H20l-1.985-3.176A3.001 3.001 0 0020 17V4a2 2 0 00-2-2h-3a1 1 0 00-1-1h-4zm0 3a1 1 0 001-1h2a1 1 0 001 1h4v5.246c-.308.08-.712.177-1.196.273A24.738 24.738 0 0112 10c-1.92 0-3.602-.24-4.804-.48A21.758 21.758 0 016 9.245V4h4zm-4 7.306V17a1 1 0 001 1h10a1 1 0 001-1v-5.694A26.785 26.785 0 0112 12a26.786 26.786 0 01-6-.694z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Railway.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Railway.displayName = 'Railway';
export default Railway;
