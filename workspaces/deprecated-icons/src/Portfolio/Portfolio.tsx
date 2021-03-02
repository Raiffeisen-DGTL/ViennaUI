import React, { SVGAttributes } from 'react';

export interface PortfolioProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Portfolio: React.FC<PortfolioProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.441 6.083A1.558 1.558 0 0122 7.642V18.1a1.989 1.989 0 01-1.988 1.983H3.559A1.559 1.559 0 012 18.524V7.642a1.558 1.558 0 011.559-1.559h16.882zm-.472 2H4v3h16V8.114l-.031-.031zM4 18.083h16v-5H4v5zm6-14v1H8v-.958a2.041 2.041 0 012.041-2.042h3.917c1.128 0 2.042.914 2.042 2.042v.958h-2v-1h-4zm0 10h4v2h-4v-2z' />
        </svg>
    );
};

Portfolio.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Portfolio.displayName = 'Portfolio';
export default Portfolio;
