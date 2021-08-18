import React, { SVGAttributes } from 'react';

export interface LikeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Like: React.FC<LikeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.311 2.94a2.748 2.748 0 014.844.134l.213.427a4.18 4.18 0 01.317 2.883L16.28 8h2.765c2.122 0 3.574 2.144 2.785 4.114l-2.4 6A3 3 0 0116.646 20H10a1 1 0 01-.555-.168L8 18.869V19a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h4a1 1 0 011 1h.42l2.891-5.06zM10.303 18L8 16.465V10h1a1 1 0 00.868-.504l3.18-5.564a.748.748 0 011.318.036l.214.427c.232.466.29.999.165 1.504L14.219 8H13v2h6.046a1 1 0 01.928 1.371l-2.4 6a1 1 0 01-.928.629h-6.343zM4 9v9h2V9H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Like.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Like.displayName = 'Like';
export default Like;
