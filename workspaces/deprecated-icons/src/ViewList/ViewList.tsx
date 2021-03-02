import React, { SVGAttributes } from 'react';

export interface ViewListProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ViewList: React.FC<ViewListProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z' />
        </svg>
    );
};

ViewList.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ViewList.displayName = 'ViewList';
export default ViewList;
