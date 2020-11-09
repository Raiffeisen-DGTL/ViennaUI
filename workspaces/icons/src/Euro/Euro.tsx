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
            <path d='M21 17h-1.654a7.326 7.326 0 01-5.846 3 7.612 7.612 0 01-7.253-6H14l.8-2H6a8.44 8.44 0 01.065-1H15.2l.8-2H6.552A7.528 7.528 0 0113.5 4a7.326 7.326 0 015.846 3H21V5.885A9.322 9.322 0 0013.5 2a9.585 9.585 0 00-9.062 7H2v2h2.048c-.031.329-.048.662-.048 1H2v2h2.191a9.652 9.652 0 009.309 8 9.322 9.322 0 007.5-3.885V17z' />
        </svg>
    );
};

Euro.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Euro.displayName = 'Euro';
export default Euro;
