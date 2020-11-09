import React, { SVGAttributes } from 'react';

export interface CodeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Code: React.FC<CodeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 6h2v12H2V6zm8 0h2v12h-2V6zm10 0h2v12h-2V6zm-3 0h2v12h-2V6zM5 6h1v12H5V6zm2 0h1v12H7V6zm6 0h1v12h-1V6zm2 0h1v12h-1V6z' />
        </svg>
    );
};

Code.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Code.displayName = 'Code';
export default Code;
