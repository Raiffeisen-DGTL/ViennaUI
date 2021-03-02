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
            <path d='M12 22.228c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10c-.007 5.52-4.48 9.993-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zM11 6h2v2h-2V6zm2 9h2v2H9v-2h2v-4H9V9h4v6z' />
        </svg>
    );
};

InfoRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InfoRing.displayName = 'InfoRing';
export default InfoRing;
