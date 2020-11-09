import React, { SVGAttributes } from 'react';

export interface MicroscopeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Microscope: React.FC<MicroscopeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.18 18a5.313 5.313 0 008.92-3.906 5.241 5.241 0 00-1.546-3.706l1.282-1.283A7.111 7.111 0 0114.568 21H18l1 1v1H7v-1l1-1h3.01a7.115 7.115 0 01-4.177-3H3v-2h10v2H9.18zm7.061-14.656l1.599-1.598 1.414 1.414-1.599 1.598.02.02a1.972 1.972 0 010 2.789l-6.8 6.8a1.972 1.972 0 01-2.789 0l-1.453-1.453a1.972 1.972 0 010-2.789l6.8-6.8a1.972 1.972 0 012.789 0l.02.02zM8 11.586L9.414 13l6.828-6.828-1.414-1.414L8 11.586z' />
        </svg>
    );
};

Microscope.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Microscope.displayName = 'Microscope';
export default Microscope;
