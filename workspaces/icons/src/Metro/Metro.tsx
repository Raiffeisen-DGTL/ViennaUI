import React, { SVGAttributes } from 'react';

export interface MetroProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Metro: React.FC<MetroProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.558 2.907L12 9.438l5.442-6.53L21.754 18H23v2h-8v-2h.656l-.594-1.98L12 19.518l-3.062-3.5L8.344 18H9v2H1v-2h1.246L6.558 2.907zM4.326 18h1.93l1.806-6.02L12 16.482l3.938-4.5L17.744 18h1.93L16.558 7.093 12 12.563l-4.558-5.47L4.326 18z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Metro.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Metro.displayName = 'Metro';
export default Metro;
