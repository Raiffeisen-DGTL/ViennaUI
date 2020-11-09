import React, { SVGAttributes } from 'react';

export interface ToEWalletProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToEWallet: React.FC<ToEWalletProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1 19h22a2 2 0 01-2 2H3a2 2 0 01-2-2zm4-1a2 2 0 01-2-2V8.012A2.011 2.011 0 015.012 6H10v2H5v8h14V8h-5V6h5.677c.73 0 1.322.593 1.323 1.323V16a2 2 0 01-2 2H5zm4.273-9L11 10.728V2h2v8.728L14.727 9H16v1.273l-4 3.999-4-3.999V9h1.273z' />
        </svg>
    );
};

ToEWallet.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToEWallet.displayName = 'ToEWallet';
export default ToEWallet;
