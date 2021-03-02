import React, { SVGAttributes } from 'react';

export interface BeautyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Beauty: React.FC<BeautyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a1 1 0 01.707.293l1.343 1.343c.085.085.168.171.249.259l3.459-.865a1 1 0 011.19.654L19.722 6H21a1 1 0 011 1v1.919C22 13.832 18.392 18 13.727 18h-.797c-.409 2.826-2.532 4-3.93 4v-2c.379 0 1.549-.395 1.9-2h-.627C5.607 18 2 13.832 2 8.919V7a1 1 0 011-1h1.28l.771-2.316a1 1 0 011.192-.654l3.458.865c.081-.088.164-.174.249-.259l1.343-1.343A1 1 0 0112 2zm4.065 4.708a8.939 8.939 0 00-.503-1.068l1.782-.445.325.975a7.69 7.69 0 00-1.604.538zm-8.13 0a7.691 7.691 0 00-1.604-.538l.325-.975 1.782.445c-.192.347-.36.704-.503 1.068zM7.411 8.68A5.652 5.652 0 004.727 8H4v.919c0 3.728 2.508 6.641 5.565 7.035A8.99 8.99 0 017.41 8.68zm7.024 7.274A8.99 8.99 0 0016.59 8.68 5.652 5.652 0 0119.273 8H20v.919c0 3.728-2.508 6.641-5.565 7.035zM12 15.586l-.636-.636a6.994 6.994 0 010-9.9L12 4.414l.636.636a6.994 6.994 0 010 9.9l-.636.636z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Beauty.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Beauty.displayName = 'Beauty';
export default Beauty;
