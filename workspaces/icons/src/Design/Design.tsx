import React, { SVGAttributes } from 'react';

export interface DesignProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Design: React.FC<DesignProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2.707 21.121a3 3 0 010-4.242L6.586 13 1.293 7.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0L13 6.586l4.293-4.293a1 1 0 01.465-.263l4-1a1 1 0 011.212 1.213l-1 4a1 1 0 01-.263.464L17.414 11l5.293 5.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0L11 17.414l-3.879 3.879a3 3 0 01-4.242 0l-.172-.172zM9.586 16L8 14.414l-3.879 3.879a1 1 0 000 1.414l.172.172a1 1 0 001.414 0L9.586 16zM16 9.586l4.097-4.097.529-2.115-2.115.529L14.414 8 16 9.586zm1 11L20.586 17 7 3.414 3.414 7 5 8.586l2.293-2.293 1.414 1.414L6.414 10 8 11.586l1.293-1.293 1.414 1.414L9.414 13 11 14.586l2.293-2.293 1.414 1.414L12.414 16 14 17.586l1.293-1.293 1.414 1.414L15.414 19 17 20.586z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Design.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Design.displayName = 'Design';
export default Design;
