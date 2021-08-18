import React, { SVGAttributes } from 'react';

export interface PoliceCar1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoliceCar1: React.FC<PoliceCar1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 3h-4V1h4v2z' />
            <path
                fillRule='evenodd'
                d='M4.938 6.236C5.353 5.624 6.024 5 7 5h10c.977 0 1.648.624 2.062 1.236.418.617.703 1.395.903 2.126a17.01 17.01 0 01.515 3.135c.151.13.331.299.513.5C21.43 12.483 22 13.3 22 14.334V21a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-6.668c0-1.034.571-1.851 1.007-2.335a5.69 5.69 0 01.513-.5c.05-.756.2-1.983.515-3.136.2-.73.485-1.509.903-2.126zm15.06 8.044l-2.314.771a1 1 0 00.632 1.898L20 16.387V20h-2v-2H6v2H4v-3.613l1.684.562a1 1 0 10.632-1.898l-2.314-.771c.02-.287.196-.616.491-.944.121-.135.245-.249.347-.336h14.32c.102.087.226.201.347.336.295.328.471.657.491.944zM5.573 11h12.854a14.549 14.549 0 00-.392-2.112c-.175-.644-.39-1.179-.628-1.53C17.165 7 17.023 7 17 7H7c-.023 0-.165.001-.406.358-.239.351-.453.886-.63 1.53A14.47 14.47 0 005.574 11z'
                clipRule='evenodd'
            />
            <path d='M7 3h4V1H7v2z' />
        </svg>
    );
};

PoliceCar1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoliceCar1.displayName = 'PoliceCar1';
export default PoliceCar1;
