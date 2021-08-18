import React, { SVGAttributes } from 'react';

export interface AirplaneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Airplane: React.FC<AirplaneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17.975 4.158L14.371 7.8l-7.77 7.954a1 1 0 01-.715.301h-1.54l-.69.714 2.09 1.07 5.32-4.539a1 1 0 011.363.061l5.768 5.885-2.585-8.907a1 1 0 01.242-.974l3.578-3.699.001-.001.007-.007a3.066 3.066 0 00.18-.218c.12-.16.242-.352.316-.541.077-.195.067-.294.058-.327a.166.166 0 00-.042-.067.87.87 0 00-.256-.18c-.76-.388-1.227-.345-1.447-.288a.852.852 0 00-.274.12zm-4.602 1.808l3.198-3.233h.001l.002-.003.005-.005.011-.01a1.479 1.479 0 01.101-.09c.059-.05.137-.109.235-.171.196-.125.472-.264.828-.355.735-.188 1.7-.144 2.852.444.67.342 1.134.846 1.314 1.49.17.609.04 1.18-.122 1.595a4.387 4.387 0 01-.58 1.015 5.056 5.056 0 01-.314.378l-.025.026-.008.008-.003.004h-.001l-3.172 3.28 2.73 9.41a1 1 0 01-.245.978l-.95.972a1 1 0 01-1.429 0l-6.147-6.272-5.119 4.367a1 1 0 01-1.105.13l-3.886-1.99a1 1 0 01-.263-1.584l1.92-1.99a1 1 0 01.72-.304h1.544l2.856-2.924-6.01-5.294a1 1 0 01-.055-1.45l.95-.971a1 1 0 011.008-.258l9.159 2.807zM9.72 9.699l2.076-2.125-6.882-2.108L9.72 9.699z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Airplane.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Airplane.displayName = 'Airplane';
export default Airplane;
