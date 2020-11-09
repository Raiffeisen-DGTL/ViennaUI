import React, { SVGAttributes } from 'react';

export interface LogoArrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LogoArrow: React.FC<LogoArrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 10.859a4 4 0 112 0V19h-2v-8.141zM12 4.7a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zm2 10.4c4.007.407 7 2 7 3.9 0 2.209-4.029 4-9 4s-9-1.791-9-4c0-1.906 2.993-3.5 7-3.9v1.812c-3.37.377-5.2 1.625-5.2 2.088 0 .548 2.554 2.197 7.2 2.197 4.646 0 7.2-1.652 7.2-2.2 0-.463-1.83-1.711-5.2-2.088V15.1z' />
        </svg>
    );
};

LogoArrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LogoArrow.displayName = 'LogoArrow';
export default LogoArrow;
