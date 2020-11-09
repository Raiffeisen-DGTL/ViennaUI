import React, { SVGAttributes } from 'react';

export interface RubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Ruble: React.FC<RubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 21h20v2H2v-2zm10-6h-1.344v1.282H15V18h-4.344v2H9v-2H7v-1.718h2V15H7v-1.687h2V9h4a3 3 0 010 6h-1zm-1.3-4.3v2.6H13a1.3 1.3 0 100-2.6h-2.3zM5 12v8H3v-8a9 9 0 1118 0v8h-2v-8a7 7 0 00-14 0z' />
        </svg>
    );
};

Ruble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Ruble.displayName = 'Ruble';
export default Ruble;
