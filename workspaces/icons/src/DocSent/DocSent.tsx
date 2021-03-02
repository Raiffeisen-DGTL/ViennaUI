import React, { SVGAttributes } from 'react';

export interface DocSentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocSent: React.FC<DocSentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h8v-2H4V4h12v6h2V3z' />
            <path
                fillRule='evenodd'
                d='M16.635 18.78l1.436 3.591a1 1 0 001.878-.055l3.5-10.5a1 1 0 00-1.265-1.265l-10.5 3.5a1 1 0 00-.055 1.877l3.591 1.437-1.427 1.428 1.414 1.414 1.428-1.428zm.736-2.709l-2.465-.986 6.013-2.004-2.004 6.013-.986-2.465a1 1 0 00-.558-.558z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocSent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocSent.displayName = 'DocSent';
export default DocSent;
