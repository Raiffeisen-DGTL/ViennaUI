import React, { SVGAttributes } from 'react';

export interface InfoFilledProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InfoFilled: React.FC<InfoFilledProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-2.5 5v2h5v-2H13v-3a1 1 0 00-1-1h-2v2h1v2H9.5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InfoFilled.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InfoFilled.displayName = 'InfoFilled';
export default InfoFilled;
