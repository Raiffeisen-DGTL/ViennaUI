import React, { SVGAttributes } from 'react';

export interface GymProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gym: React.FC<GymProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 18a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M14 4h3.18l2.224 11.118-.082-.025-.328-.098a261.748 261.748 0 00-4.904-1.416 113.151 113.151 0 00-4.12-1.07c-.84-.198-1.644-.367-2.27-.452L6.477 9H8V7H2v2h2.323l1.282 3.204a5.055 5.055 0 00-2.14 1.26A5 5 0 007 22h11.5a3.5 3.5 0 003.432-4.186L19.22 4H22V2h-8v2zM4.879 14.879A3.081 3.081 0 017 14c.362 0 1.251.16 2.513.456 1.214.285 2.655.666 4.044 1.05a240.613 240.613 0 015.186 1.502l.113.034.016.005.016.004A1.5 1.5 0 0118.5 20H7a3 3 0 01-2.121-5.121z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gym.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gym.displayName = 'Gym';
export default Gym;
