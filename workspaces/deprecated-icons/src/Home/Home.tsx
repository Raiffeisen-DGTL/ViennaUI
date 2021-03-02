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
            <path d='M12 2.586l10 10V14h-1.414L12 5.414 3.414 14H2v-1.414l10-10zM17 14h2v9h-5.958a.042.042 0 01-.042-.041V16h-2v6.959c0 .023-.02.041-.042.041H5v-9h2v7h2v-7h6v7h2v-7z' />
        </svg>
    );
};

Home.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Home.displayName = 'Home';
export default Home;
