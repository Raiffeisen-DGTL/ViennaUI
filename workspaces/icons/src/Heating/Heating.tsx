import React, { SVGAttributes } from 'react';

export interface HeatingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Heating: React.FC<HeatingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.479 2.123l-.472-.259-.476.253A5.187 5.187 0 0016.134 5h-1.271a5.292 5.292 0 00-2.384-2.877l-.472-.259-.476.253A5.187 5.187 0 009.134 5H7.863a5.292 5.292 0 00-2.384-2.877l-.472-.259-.476.253A4.819 4.819 0 002 6v12c0 2.471 2.417 3.821 2.521 3.877l.472.259.476-.253A5.187 5.187 0 007.866 19h1.271a5.292 5.292 0 002.384 2.877l.472.259.476-.253A5.187 5.187 0 0014.866 19h1.271a5.292 5.292 0 002.384 2.877l.472.259.476-.253A4.819 4.819 0 0022 18V6c0-2.471-2.417-3.821-2.521-3.877zM5 19.784A2.462 2.462 0 014 18V6a2.43 2.43 0 011-1.784A2.462 2.462 0 016 6v12a2.43 2.43 0 01-1 1.784zM8 11h1v2H8v-2zm4 8.784A2.462 2.462 0 0111 18v-1H8v-2h3V9H8V7h3V6a2.43 2.43 0 011-1.784A2.462 2.462 0 0113 6v12a2.43 2.43 0 01-1 1.784zM15 11h1v2h-1v-2zm5 7a2.43 2.43 0 01-1 1.784A2.462 2.462 0 0118 18v-1h-3v-2h3V9h-3V7h3V6a2.427 2.427 0 011-1.783A2.458 2.458 0 0120 6v12z' />
        </svg>
    );
};

Heating.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Heating.displayName = 'Heating';
export default Heating;
