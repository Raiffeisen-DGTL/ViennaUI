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
            <path d='M21.97 19.208h.947V21h-8v-1.792h.796l-1.132-3.213-1.83 3.036h-1.499l-1.829-3.036-.71 1.906-.397 1.307h.559V21H1.083v-1.792h.962l.798-1.96L7.804 4.906h1.269l2.928 5.515 2.929-5.515h1.272l5.769 14.302zm-1.955 0l-.523-1.284L15.426 7.81l-2.748 5.174h-1.353L8.577 7.81 3.981 19.208h2.454l.574-1.882 2.029-5.458 2.963 4.919 2.964-4.919 2.012 5.406.668 1.934h2.37z' />
        </svg>
    );
};

Metro.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Metro.displayName = 'Metro';
export default Metro;
