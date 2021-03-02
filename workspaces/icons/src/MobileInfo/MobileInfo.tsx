import React, { SVGAttributes } from 'react';

export interface MobileInfoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MobileInfo: React.FC<MobileInfoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 12.5v-4h2v4H8zm1-7a1 1 0 100 2 1 1 0 000-2z' />
            <path
                fillRule='evenodd'
                d='M9 16A7 7 0 109 2a7 7 0 000 14zm5-7A5 5 0 114 9a5 5 0 0110 0z'
                clipRule='evenodd'
            />
            <path d='M19 4h-3V2h3a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2v-2h2v2h10V4z' />
            <path d='M15 17a1 1 0 11-2 0 1 1 0 012 0z' />
        </svg>
    );
};

MobileInfo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MobileInfo.displayName = 'MobileInfo';
export default MobileInfo;
