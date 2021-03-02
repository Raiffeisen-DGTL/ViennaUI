import React, { SVGAttributes } from 'react';

export interface HomeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Home: React.FC<HomeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 15a1 1 0 011-1h4a1 1 0 011 1v4h4v-6.586l-7-7-7 7V19h4v-4zm2 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 01.293-.707l8-8a1 1 0 011.414 0l8 8A1 1 0 0121 12v8a1 1 0 01-1 1h-6a1 1 0 01-1-1v-4h-2z' />
        </svg>
    );
};

Home.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Home.displayName = 'Home';
export default Home;
