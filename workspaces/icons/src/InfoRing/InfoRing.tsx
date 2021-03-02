import React, { SVGAttributes } from 'react';

export interface InfoRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InfoRing: React.FC<InfoRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 8.5v-2H11v-2h-1v-2h2a1 1 0 011 1v3h1.5v2h-5z' />
            <path
                fillRule='evenodd'
                d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InfoRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InfoRing.displayName = 'InfoRing';
export default InfoRing;
