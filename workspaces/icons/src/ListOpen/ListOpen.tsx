import React, { SVGAttributes } from 'react';

export interface ListOpenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ListOpen: React.FC<ListOpenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2.293 6.414l2.293 2.293L2.293 11l1.414 1.414 3-3a1 1 0 000-1.414l-3-3-1.414 1.414zM10 13h11v-2H10v2zm11 6H10v-2h11v2zM10 7h11V5H10v2z' />
        </svg>
    );
};

ListOpen.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ListOpen.displayName = 'ListOpen';
export default ListOpen;
