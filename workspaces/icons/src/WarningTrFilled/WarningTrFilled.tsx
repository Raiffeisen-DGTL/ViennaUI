import React, { SVGAttributes } from 'react';

export interface WarningTrFilledProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WarningTrFilled: React.FC<WarningTrFilledProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a1 1 0 01.874.514l10 18A1 1 0 0122 22H2a1 1 0 01-.874-1.486l10-18A1 1 0 0112 2zm-1 13v-5h2v5h-2zm-.25 2.5a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WarningTrFilled.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WarningTrFilled.displayName = 'WarningTrFilled';
export default WarningTrFilled;
