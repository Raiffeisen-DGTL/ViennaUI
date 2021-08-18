import React, { SVGAttributes } from 'react';

export interface WarningTrProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WarningTr: React.FC<WarningTrProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.874 2.514a1 1 0 00-1.748 0l-10 18A1 1 0 002 22h20a1 1 0 00.874-1.486l-10-18zM12 5.06L20.3 20H3.7L12 5.06zM11 10v5h2v-5h-2zm1 8.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WarningTr.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WarningTr.displayName = 'WarningTr';
export default WarningTr;
