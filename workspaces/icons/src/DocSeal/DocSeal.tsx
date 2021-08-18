import React, { SVGAttributes } from 'react';

export interface DocSealProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocSeal: React.FC<DocSealProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h6v-2H4V4h12v5h2V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M16.481 11.645a1 1 0 011.038 0l4 2.429a1 1 0 01.481.855v4.142a1 1 0 01-.481.855l-4 2.429a1 1 0 01-1.038 0l-4-2.429a1 1 0 01-.481-.855V14.93a1 1 0 01.481-.855l4-2.429zM14 15.491v3.018l3 1.821 3-1.821V15.49l-3-1.821-3 1.821z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocSeal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocSeal.displayName = 'DocSeal';
export default DocSeal;
