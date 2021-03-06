import React, { SVGAttributes } from 'react';

export interface LogoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Logo: React.FC<LogoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.372 21.727L12 15.043l6.628 6.684 2.63-2.649-6.63-6.686 1.383-1.396V8.241l.961-.97v2.403l.836.844 3.36-3.39.832.837c-.006-.632-.131-2.462-1.67-3.987-1.661-1.611-3.454-.885-4.067-.266L12.903 7.1l.857.863L12 9.74l-1.761-1.777.857-.863-3.36-3.39c-.612-.618-2.406-1.344-4.066.267C2.13 5.503 2.006 7.333 2 7.965l.831-.838 3.36 3.39.837-.843V7.271l.96.97v2.755l1.383 1.396-6.629 6.686 2.63 2.65z' />
        </svg>
    );
};

Logo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Logo.displayName = 'Logo';
export default Logo;
