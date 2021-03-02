import React, { SVGAttributes } from 'react';

export interface AddToDicProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AddToDic: React.FC<AddToDicProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 5a3 3 0 013-3h13v2H7a1 1 0 00-1 1v1h13a1 1 0 011 1v5h-2V8H6v12h7v2H5a1 1 0 01-1-1V5z' />
            <path d='M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2z' />
        </svg>
    );
};

AddToDic.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AddToDic.displayName = 'AddToDic';
export default AddToDic;
