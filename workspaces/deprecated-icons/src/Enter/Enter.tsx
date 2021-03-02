import React, { SVGAttributes } from 'react';

export interface EnterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Enter: React.FC<EnterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 2h13v16l-7 4v-4H7v-2h6V6l3.5-2H7V2zm11 14.839V5.446l-3 1.715v11.393l3-1.715zM8.202 6L12.2 9.997 8.239 14H7.043l-.027-.026-.002-1.154L8.815 11H3V9h5.799L7.003 7.204 7.001 6h1.201z' />
        </svg>
    );
};

Enter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Enter.displayName = 'Enter';
export default Enter;
