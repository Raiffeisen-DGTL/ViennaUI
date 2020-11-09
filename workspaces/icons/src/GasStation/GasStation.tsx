import React, { SVGAttributes } from 'react';

export interface GasStationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GasStation: React.FC<GasStationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.375 16.831A3.629 3.629 0 0020 13.206V7.831h2v-2h-4v7.375c0 .897-.728 1.624-1.625 1.625H16v-10a2 2 0 00-2-2H6a2 2 0 00-2 2v16H2v2h20v-2h-6v-4h.375zM6 20.831v-9h7v-2H6v-5h8v16H6z' />
        </svg>
    );
};

GasStation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GasStation.displayName = 'GasStation';
export default GasStation;
