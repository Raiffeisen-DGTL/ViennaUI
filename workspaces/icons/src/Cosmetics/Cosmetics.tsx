import React, { SVGAttributes } from 'react';

export interface CosmeticsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cosmetics: React.FC<CosmeticsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 21v-5h2v4h7v-4h2v5a1 1 0 01-1 1H3a1 1 0 01-1-1zm2-9.348V12h7v-.348a9 9 0 00-7 0zm-.968-1.76a11 11 0 018.935 0l.44.194A1 1 0 0113 11v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.594-.914l.438-.195z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M14 4a1 1 0 00-1 1v1h2V5a1 1 0 00-1-1zm1.781 4H12a1 1 0 01-1-1V5a3 3 0 116 0v1.374c4.886 2.574 6.678 8.773 3.79 13.586l-.932 1.555A1 1 0 0119 22h-4v-2h3.434l.641-1.07c2.348-3.913.8-8.981-3.294-10.93z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cosmetics.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cosmetics.displayName = 'Cosmetics';
export default Cosmetics;
