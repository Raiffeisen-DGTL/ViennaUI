import React, { SVGAttributes } from 'react';

export interface CheckProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Check: React.FC<CheckProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 2h20v2H2V2zm5 4h10v2H7V6zm0 8h10v2H7v-2zm0-4h8v2H7v-2zm12 9.177V5h2v17a4.051 4.051 0 01-1.983-.622A2.256 2.256 0 0018 21c-.362.045-.71.175-1.013.378A4.106 4.106 0 0115 22a4.024 4.024 0 01-1.957-.612 1.716 1.716 0 00-2.1 0A3.983 3.983 0 019 22a4.1 4.1 0 01-1.945-.609A2.542 2.542 0 006 21a2.33 2.33 0 00-1.017.379A4.1 4.1 0 013 22V5h2v14.179A3.057 3.057 0 016 19c.703.037 1.385.25 1.984.619.307.2.654.33 1.016.381.356-.042.697-.17.993-.372A4.083 4.083 0 0112 19a4.1 4.1 0 012 .624c.298.204.641.333 1 .376a2.367 2.367 0 001.044-.386A4.065 4.065 0 0118 19c.34.003.679.063 1 .177z' />
        </svg>
    );
};

Check.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Check.displayName = 'Check';
export default Check;
