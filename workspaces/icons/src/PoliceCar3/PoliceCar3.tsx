import React, { SVGAttributes } from 'react';

export interface PoliceCar3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoliceCar3: React.FC<PoliceCar3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10 1a1 1 0 00-.97.757L8.22 5H7c-.976 0-1.647.624-2.062 1.236-.418.617-.703 1.395-.903 2.126a17.009 17.009 0 00-.515 3.135 5.83 5.83 0 00-.513.5C2.57 12.483 2 13.3 2 14.334V21a1 1 0 001 1h4a1 1 0 001-1v-1h8v1a1 1 0 001 1h4a1 1 0 001-1v-6.668c0-1.034-.57-1.851-1.007-2.335a5.635 5.635 0 00-.513-.5 17.019 17.019 0 00-.515-3.136c-.2-.73-.485-1.509-.903-2.126C18.647 5.624 17.977 5 17 5h-1.22l-.81-3.243A1 1 0 0014 1h-4zm3.72 4l-.5-2h-2.44l-.5 2h3.44zm3.964 10.051l2.314-.771c-.02-.287-.196-.616-.491-.944A3.646 3.646 0 0019.16 13H4.84a3.656 3.656 0 00-.347.336c-.295.328-.471.657-.491.944l2.314.771a1 1 0 01-.632 1.898L4 16.387V20h2v-2h12v2h2v-3.613l-1.684.562a1 1 0 11-.632-1.898zM18.427 11H5.573c.07-.607.192-1.38.392-2.112.176-.644.39-1.179.629-1.53C6.835 7 6.977 7 7 7h10c.023 0 .165.001.407.358.238.351.453.886.628 1.53.2.732.323 1.505.392 2.112z'
                clipRule='evenodd'
            />
        </svg>
    );
};

PoliceCar3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoliceCar3.displayName = 'PoliceCar3';
export default PoliceCar3;
