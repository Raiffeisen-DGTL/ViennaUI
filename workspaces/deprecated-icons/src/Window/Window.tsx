import React, { SVGAttributes } from 'react';

export interface WindowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Window: React.FC<WindowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 2h1v1l-1 1v18h-6v-6.28a17.84 17.84 0 01-3.17-4.56 19.47 19.47 0 001-2.65A15.53 15.53 0 0018.15 15H20V4h-7a17.41 17.41 0 01-5 11.7V22H2V4L1 3V2h21zM6 20v-3H4v3h2zm-.15-5A15.42 15.42 0 0011 4H4v11h1.85zM18 20h2v-3h-2v3zm-9-2h6v2H9v-2z' />
        </svg>
    );
};

Window.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Window.displayName = 'Window';
export default Window;
