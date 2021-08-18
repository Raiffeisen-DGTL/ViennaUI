import React, { SVGAttributes } from 'react';

export interface HousesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Houses: React.FC<HousesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 2h14v20h-7v-2h5V4H11v3.656l-2-2V2zm0 5.72l7 7.005V16h-1.271L9 10.267 3.27 16H2v-1.276L9 7.72zM8 17h2v5H8v-5zM18.15 6.15h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm-3 0h1.7v1.7h-1.7v-1.7zm3 3h1.7v1.7h-1.7v-1.7zm-3-6h1.7v1.7h-1.7v-1.7zm-3 0h1.7v1.7h-1.7v-1.7zM12 16h2v6h-2.021v-2H12v-4zm-6 4v2H4v-6h2v4z' />
        </svg>
    );
};

Houses.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Houses.displayName = 'Houses';
export default Houses;
