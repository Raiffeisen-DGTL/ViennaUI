import React, { SVGAttributes } from 'react';

export interface FlagProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Flag: React.FC<FlagProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 3h2v18H2V3zm16.586 2H6V3h14.759a1.1 1.1 0 01.777 1.878L17.414 9l4.122 4.122A1.1 1.1 0 0120.76 15H6v-2h12.586l-4-4 4-4z' />
        </svg>
    );
};

Flag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Flag.displayName = 'Flag';
export default Flag;
