import React, { SVGAttributes } from 'react';

export interface AmbulanceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Ambulance: React.FC<AmbulanceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 12v2h2v-2h2v-2h-2V8h-2v2H8v2h2z' />
            <path
                fillRule='evenodd'
                d='M12 4h3.22a2 2 0 011.94 1.515l.699 2.796 3.588 1.795A1 1 0 0122 11v5a2 2 0 01-2 2h-.17a3.001 3.001 0 01-5.66 0H8.83a3.001 3.001 0 01-5.66 0H3a1 1 0 01-1-1V5a1 1 0 011-1h7V3h2v1zm8 12h-.17a3.001 3.001 0 00-5.66 0H8.83A3.001 3.001 0 004 14.764V6h11.22l.81 3.243a1 1 0 00.523.651L20 11.618V16zM5 17a1 1 0 112 0 1 1 0 01-2 0zm12-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Ambulance.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Ambulance.displayName = 'Ambulance';
export default Ambulance;
