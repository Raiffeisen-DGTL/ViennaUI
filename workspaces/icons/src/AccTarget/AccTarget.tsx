import React, { SVGAttributes } from 'react';

export interface AccTargetProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AccTarget: React.FC<AccTargetProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 2a1 1 0 00-1 1v6h2V4h12v16h-7v2h8a1 1 0 001-1V3a1 1 0 00-1-1H7z' />
            <path
                fillRule='evenodd'
                d='M3.126 16A4.007 4.007 0 016 13.126V11h2v2.126A4.007 4.007 0 0110.874 16H13v2h-2.126A4.007 4.007 0 018 20.874V23H6v-2.126A4.007 4.007 0 013.126 18H1v-2h2.126zM5 17a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AccTarget.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AccTarget.displayName = 'AccTarget';
export default AccTarget;
