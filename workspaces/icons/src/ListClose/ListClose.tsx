import React, { SVGAttributes } from 'react';

export interface ListCloseProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ListClose: React.FC<ListCloseProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.707 6.414l-2.293 2.293L21.707 11l-1.414 1.414-3-3a1 1 0 010-1.414l3-3 1.414 1.414zM14 13H3v-2h11v2zM3 19h11v-2H3v2zM14 7H3V5h11v2z' />
        </svg>
    );
};

ListClose.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ListClose.displayName = 'ListClose';
export default ListClose;
