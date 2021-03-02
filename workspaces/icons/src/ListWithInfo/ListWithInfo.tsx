import React, { SVGAttributes } from 'react';

export interface ListWithInfoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ListWithInfo: React.FC<ListWithInfoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 4h15V2H2v2zm14 12.5v4h2v-4h-2zm0-2a1 1 0 112 0 1 1 0 01-2 0z' />
            <path
                fillRule='evenodd'
                d='M17 10a7 7 0 100 14 7 7 0 000-14zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z'
                clipRule='evenodd'
            />
            <path d='M17 8H2V6h15v2zM2 12h8v-2H2v2z' />
        </svg>
    );
};

ListWithInfo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ListWithInfo.displayName = 'ListWithInfo';
export default ListWithInfo;
