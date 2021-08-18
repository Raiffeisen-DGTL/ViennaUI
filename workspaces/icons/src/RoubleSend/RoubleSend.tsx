import React, { SVGAttributes } from 'react';

export interface RoubleSendProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RoubleSend: React.FC<RoubleSendProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.07 4.273a8 8 0 015.657 5.656l1.932-.517a10.001 10.001 0 00-7.07-7.071l-.518 1.932z' />
            <path
                fillRule='evenodd'
                d='M6 10V9h3a3 3 0 000-6H4v4H2v2h2v1H2v2h2v3h2v-3h4v-2H6zm3.383-3.076A1 1 0 019 7H6V5h3a1 1 0 01.383 1.924z'
                clipRule='evenodd'
            />
            <path d='M6.343 17.657a8 8 0 007.728 2.07l.517 1.932a10 10 0 01-9.66-2.588l1.415-1.414zm15.364-2.864l-3.5-3.5-1.414 1.414 1.793 1.793H13v2h5.586l-1.793 1.793 1.414 1.414 3.5-3.5a1 1 0 000-1.414z' />
        </svg>
    );
};

RoubleSend.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RoubleSend.displayName = 'RoubleSend';
export default RoubleSend;
