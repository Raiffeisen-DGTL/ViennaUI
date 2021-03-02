import React, { SVGAttributes } from 'react';

export interface MotoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Moto: React.FC<MotoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.541 13.664a1.818 1.818 0 10.002 3.636 1.818 1.818 0 00-.002-3.636zm0-1.7a3.517 3.517 0 011.347 6.768 3.518 3.518 0 11-1.347-6.768zM19.5 13.7a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm0-1.7a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm.513-3.078v2.082h-.467v.006a4.468 4.468 0 00-4.429 4.01h-2.023v-.01h-1.1v.006H9.97a4.467 4.467 0 00-4.429-4.01c-.736 0-2.52.026-2.52.026L2.042 10l-.018-.979c.984-.015 2.388-.015 3.52-.015a6.477 6.477 0 015.956 3.932h2.086a6.474 6.474 0 014.427-3.732v-.284A1.924 1.924 0 0016.091 7h-3.078V5h3.078a3.927 3.927 0 013.922 3.922z' />
        </svg>
    );
};

Moto.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Moto.displayName = 'Moto';
export default Moto;
