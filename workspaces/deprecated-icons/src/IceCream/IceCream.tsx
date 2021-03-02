import React, { SVGAttributes } from 'react';

export interface IceCreamProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const IceCream: React.FC<IceCreamProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.753 17.66l-5.04 5.04-1.415-1.414 5.033-5.032-.661-.654a3.31 3.31 0 010-4.68l7-7a3.31 3.31 0 014.68 0l2.73 2.73a3.31 3.31 0 010 4.68l-7 7a3.31 3.31 0 01-2.34.97 3.33 3.33 0 01-2.34-1l-.647-.64zM16 5a1.33 1.33 0 00-.93.38l-7 7a1.32 1.32 0 000 1.86l2.73 2.73a1.32 1.32 0 001.86 0l7-7a1.32 1.32 0 000-1.86l-2.73-2.77A1.33 1.33 0 0016 5zm-3.707 4.292l2.998-2.998 1.414 1.414-2.998 2.998-1.414-1.414z' />
        </svg>
    );
};

IceCream.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

IceCream.displayName = 'IceCream';
export default IceCream;
