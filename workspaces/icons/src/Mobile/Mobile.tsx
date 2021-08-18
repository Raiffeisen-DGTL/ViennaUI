import React, { SVGAttributes } from 'react';

export interface MobileProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mobile: React.FC<MobileProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 18a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h10v16H7V4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Mobile.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mobile.displayName = 'Mobile';
export default Mobile;
