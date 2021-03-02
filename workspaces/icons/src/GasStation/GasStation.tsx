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
            <path
                fillRule='evenodd'
                d='M3 3a1 1 0 011-1h10a1 1 0 011 1v11h.5a2.5 2.5 0 012.5 2.5.5.5 0 00.5.5h.5a1 1 0 001-1v-2.28l-2.316-.771A1 1 0 0117 12V9a1 1 0 01.445-.832l1.985-1.323-2.137-2.138 1.414-1.414 3 3A1 1 0 0122 7v9a3 3 0 01-3 3h-.5a2.5 2.5 0 01-2.5-2.5.5.5 0 00-.5-.5H15v4h7v2H2v-2h1V3zm10 1v6H5V4h8zm-8 8h8v8H5v-4h4v-2H5v-2zm14-2.465l1-.666v2.744l-1-.334V9.535z'
                clipRule='evenodd'
            />
        </svg>
    );
};

GasStation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GasStation.displayName = 'GasStation';
export default GasStation;
