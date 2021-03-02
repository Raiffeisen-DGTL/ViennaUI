import React, { SVGAttributes } from 'react';

export interface GoalsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Goals: React.FC<GoalsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            <path
                fillRule='evenodd'
                d='M3.055 11A9.004 9.004 0 0111 3.055V1h2v2.055A9.004 9.004 0 0120.945 11H23v2h-2.055A9.004 9.004 0 0113 20.945V23h-2v-2.055A9.004 9.004 0 013.055 13H1v-2h2.055zM11 7V5.07A7.005 7.005 0 005.07 11H7v2H5.07A7.004 7.004 0 0011 18.93V17h2v1.93A7.004 7.004 0 0018.93 13H17v-2h1.93A7.004 7.004 0 0013 5.07V7h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Goals.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Goals.displayName = 'Goals';
export default Goals;
