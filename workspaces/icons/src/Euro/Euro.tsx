import React, { SVGAttributes } from 'react';

export interface EuroProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Euro: React.FC<EuroProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.556 3.685a9 9 0 019.808 1.951L18.95 7.05A7 7 0 007.675 9H17l-1 2H7.072a7 7 0 000 2H15l-1 2H7.675a6.998 6.998 0 007.69 3.866 7 7 0 003.585-1.916l1.414 1.414A9.001 9.001 0 015.514 15H3v-2h2.056a9 9 0 010-2H3V9h2.515a9 9 0 015.04-5.315z' />
        </svg>
    );
};

Euro.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Euro.displayName = 'Euro';
export default Euro;
