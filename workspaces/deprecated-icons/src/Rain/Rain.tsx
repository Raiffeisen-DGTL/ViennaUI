import React, { SVGAttributes } from 'react';

export interface RainProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Rain: React.FC<RainProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.417 3.763v.001A3.8 3.8 0 008.754 6.57l-.433 1.38A11.59 11.59 0 006.5 7.764a2.8 2.8 0 100 5.6H18a2.3 2.3 0 002.3-2.3 2.331 2.331 0 00-2.223-2.3c-.787-.052-1.662-.078-1.662-.078s-.083-1.074-.118-1.474a3.907 3.907 0 00-3.88-3.449zm0-1.699v-.001a5.5 5.5 0 015.475 5.01c.037-.001.071-.01.108-.01a4 4 0 010 8H6.5a4.5 4.5 0 010-9c.207.007.413.028.617.063a5.5 5.5 0 015.3-4.062zm-.01 7.288l.001.001a2.637 2.637 0 00-3.386 2.76l-1.693-.178a4.3 4.3 0 01.165-1.3 4.355 4.355 0 015.421-2.907c.032.01.06.026.092.036l-.6 1.588zM13.906 22l-1.271-6h1.841l1.271 6h-1.841zm3.5 0l-1.271-6h1.841l1.271 6h-1.841zM6.718 22l-1.271-6h1.841l1.271 6H6.718zm3.563 0L9.01 16h1.841l1.271 6h-1.841z' />
        </svg>
    );
};

Rain.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Rain.displayName = 'Rain';
export default Rain;
