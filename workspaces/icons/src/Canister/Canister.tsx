import React, { SVGAttributes } from 'react';

export interface CanisterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Canister: React.FC<CanisterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 8H9l-2 2v10h12V8zM9 6h10V4h-6l-1 1H9l3-3h7a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V9l3-3h1zm-6.487.66l3.422-3.422 1.414 1.414-3.422 3.422L2.513 6.66zm10.417 5.89l-1.42 1.42L9 11.46V10h1.37l2.56 2.55zm-1.42 1.42l1.42 1.41L10.31 18H9v-1.52l2.51-2.51zM15.48 10H17v1.31l-2.66 2.66-1.41-1.42L15.48 10zm-2.54 5.39l1.41-1.41L17 16.63V18h-1.46l-2.6-2.61z' />
        </svg>
    );
};

Canister.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Canister.displayName = 'Canister';
export default Canister;
