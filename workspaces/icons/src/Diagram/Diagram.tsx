import React, { SVGAttributes } from 'react';

export interface DiagramProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Diagram: React.FC<DiagramProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 11.951l1.97-.651c.015.235.03.466.03.7 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.243 0 .482.02.722.032L12.065 4H12a8 8 0 108 8v-.049zM21.747 9.8l-9.721 3.245-1.071-1.071 3.273-9.716c3.747.86 6.67 3.792 7.519 7.542zm-6.295-4.993l-1.871 5.612 5.609-1.87a8.014 8.014 0 00-3.738-3.742z' />
        </svg>
    );
};

Diagram.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Diagram.displayName = 'Diagram';
export default Diagram;
