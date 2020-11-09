import React, { SVGAttributes } from 'react';

export interface EditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Edit: React.FC<EditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.484 22l2-2H20v2H8.484zM21.343 4.253a1.993 1.993 0 01.001 2.82L6.414 22H2v-4.415L16.929 2.659a1.994 1.994 0 012.82 0l1.594 1.594zM5.586 20L16.157 9.431l-1.586-1.587L4 18.413V20h1.586zM17.43 8.157l2.495-2.494-1.586-1.586-2.495 2.494 1.586 1.586z' />
        </svg>
    );
};

Edit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Edit.displayName = 'Edit';
export default Edit;
