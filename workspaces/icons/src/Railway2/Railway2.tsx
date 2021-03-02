import React, { SVGAttributes } from 'react';

export interface Railway2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Railway2: React.FC<Railway2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 2a2 2 0 00-2 2v14a3 3 0 001.924 2.801L4 23h2.5l1.75-2h8l1.25 2H20l-1.5-2.401A2.999 2.999 0 0020 18V4a2 2 0 00-2-2H6zm11 17a1 1 0 001-1v-1h-1a1 1 0 110-2h1v-1.694A26.785 26.785 0 0112 14a26.786 26.786 0 01-6-.694V15h1a1 1 0 110 2H6v1a1 1 0 001 1h10zm1-11.694v3.94c-.308.08-.712.177-1.196.273-.988.198-2.302.396-3.804.46V7.98a26.972 26.972 0 005-.674zm0-2.06c-.308.08-.712.177-1.196.273A24.738 24.738 0 0112 6c-1.92 0-3.602-.24-4.804-.48A21.758 21.758 0 016 5.245V4h12v1.246zM6 7.306v3.94c.308.08.712.177 1.196.273.988.198 2.302.396 3.804.46V7.98a26.972 26.972 0 01-5-.674z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Railway2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Railway2.displayName = 'Railway2';
export default Railway2;
