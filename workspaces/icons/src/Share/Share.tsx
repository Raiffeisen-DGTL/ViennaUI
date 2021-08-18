import React, { SVGAttributes } from 'react';

export interface ShareProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Share: React.FC<ShareProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.214 9.221L5.8 7.807l5.5-5.5a1 1 0 011.414 0l5.5 5.5L16.8 9.221l-3.8-3.8V16h-2V5.436L7.214 9.22z' />
            <path d='M21 12h-2v7H5v-7H3v8a1 1 0 001 1h16a1 1 0 001-1v-8z' />
        </svg>
    );
};

Share.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Share.displayName = 'Share';
export default Share;
