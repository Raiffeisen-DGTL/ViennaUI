import React, { SVGAttributes } from 'react';

export interface TelegramProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Telegram: React.FC<TelegramProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M21.727 3.314a1 1 0 01.222 1.002l-5.5 16.5a1 1 0 01-1.742.294l-5-6.5a1 1 0 01.05-1.279l1.966-2.184-3.907 1.302a1 1 0 01-.763-.054l-5-2.5a1 1 0 01.186-1.86l18.5-5a1 1 0 01.988.279zM5.297 9.28l2.28 1.14 7.107-2.369a1 1 0 011.06 1.618L11.8 14.05l3.346 4.35 4.316-12.948L5.296 9.28z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Telegram.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Telegram.displayName = 'Telegram';
export default Telegram;
