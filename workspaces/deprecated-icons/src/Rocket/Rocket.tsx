import React, { SVGAttributes } from 'react';

export interface RocketProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Rocket: React.FC<RocketProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.852 10.271l1.74-1.74 1.74 1.74-1.74 1.74-1.74-1.74zM19.56 2.3l2.464-.395-.4 2.467a16.837 16.837 0 01-4.123 8.49 28.084 28.084 0 01-2.417 2.176l-.176 6.235-3.969 1.76-1.945-4.074-.9-.9-2.207-2.208-1-1L1.008 13l1.756-3.969L8.9 8.857a28.07 28.07 0 012.173-2.426A16.77 16.77 0 0119.559 2.3zM3.888 10.7l-.656 1.478L5.773 13.4a85.762 85.762 0 011.847-2.8l-3.732.1zm9.343 9.446l.104-3.831c-.825.572-1.748 1.172-2.835 1.872l1.253 2.615 1.478-.656zm3-8.557h-.004a15.034 15.034 0 003.623-7.508 14.948 14.948 0 00-7.5 3.627 35.554 35.554 0 00-5.192 6.865l2.207 2.208a35.564 35.564 0 006.866-5.192zM5.347 17.38l1.265 1.281L3.218 22H2v-1.328l3.347-3.292zM2 16.684l1.347-1.325 1.265 1.281L2 19.21v-2.526zm2.797 5.301l2.57-2.612 1.281 1.265-1.324 1.347H4.797z' />
        </svg>
    );
};

Rocket.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Rocket.displayName = 'Rocket';
export default Rocket;
