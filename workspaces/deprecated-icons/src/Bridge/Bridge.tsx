import React, { SVGAttributes } from 'react';

export interface BridgeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bridge: React.FC<BridgeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 17.831H2v-5.726a16.909 16.909 0 0120 0v5.726h-2v-4.67a14.9 14.9 0 00-16 0v4.67zm14.709.915a3.791 3.791 0 012.195.644c.33.243.731.368 1.14.353v2a3.77 3.77 0 01-2.179-.644 2.059 2.059 0 00-2.316 0 3.75 3.75 0 01-2.172.643 3.86 3.86 0 01-2.22-.651 1.773 1.773 0 00-1.113-.349 1.792 1.792 0 00-1.129.352 3.821 3.821 0 01-2.2.648 3.756 3.756 0 01-2.166-.641 1.851 1.851 0 00-1.168-.359c-.414-.01-.82.116-1.156.359a3.849 3.849 0 01-2.177.641v-2c.414.01.82-.116 1.156-.359a3.844 3.844 0 012.177-.641 3.825 3.825 0 012.2.648 1.79 1.79 0 001.129.352c.418.016.83-.11 1.167-.358a3.957 3.957 0 014.315 0c.343.25.76.378 1.184.362.407.015.806-.11 1.133-.352a3.8 3.8 0 012.2-.648zM12 13a6.009 6.009 0 015.889 4.831H15.81a3.973 3.973 0 00-7.61 0H6.116A6.009 6.009 0 0112 13zm0-10.169a16.9 16.9 0 0110 3.274v5a17.227 17.227 0 00-2-1.251V7.161a14.909 14.909 0 00-4-1.78v2.931a16.877 16.877 0 00-2-.349V4.968a14.667 14.667 0 00-4 0v2.995c-.673.076-1.34.193-2 .349V5.381a14.909 14.909 0 00-4 1.78v2.693a17.16 17.16 0 00-2 1.251v-5a16.9 16.9 0 0110-3.274z' />
        </svg>
    );
};

Bridge.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bridge.displayName = 'Bridge';
export default Bridge;
