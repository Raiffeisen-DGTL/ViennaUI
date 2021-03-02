import React, { SVGAttributes } from 'react';

export interface NameplateProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Nameplate: React.FC<NameplateProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.295 13.709l1.414-1.415 4.002 4.003-1.414 1.414-4.002-4.002zM7.9 22.18l-6.05-6.05a1.81 1.81 0 010-2.56l9.91-9.94a6.1 6.1 0 018.68 8.56 2.44 2.44 0 01-4.22-1.41 2.45 2.45 0 01.7-2 1.2 1.2 0 00.36-.85A1.18 1.18 0 0016.8 7a1.28 1.28 0 00-1.67.18l-.54.54a1 1 0 00-.19 1.22l2.5 5a1.84 1.84 0 01-.35 2.14l-6.09 6.09a1.8 1.8 0 01-2.56.01zm-4.79-7.33l6.07 6.07 6.13-6.13-2.52-5a2.84 2.84 0 01.53-3.3l.54-.54a3.07 3.07 0 014.05-.33 3 3 0 01.28 4.49.64.64 0 00.12 1.01.67.67 0 00.83-.14 4.29 4.29 0 00-6.12-6l-9.91 9.87z' />
        </svg>
    );
};

Nameplate.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Nameplate.displayName = 'Nameplate';
export default Nameplate;
