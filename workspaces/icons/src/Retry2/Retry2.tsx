import React, { SVGAttributes } from 'react';

export interface Retry2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Retry2: React.FC<Retry2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 11.906l2.078-2.078 1.415 1.415-3.536 3.535a1 1 0 01-1.414 0L.007 11.243l1.415-1.415 1.594 1.595C3.316 6.17 7.671 2 13 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.983 9.983 0 01-7.777-3.714l1.554-1.258A8 8 0 105 11.906z' />
            <path d='M12.293 12.707A1 1 0 0112 12V7h2v4.586l3.207 3.207-1.414 1.414-3.5-3.5z' />
        </svg>
    );
};

Retry2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Retry2.displayName = 'Retry2';
export default Retry2;
