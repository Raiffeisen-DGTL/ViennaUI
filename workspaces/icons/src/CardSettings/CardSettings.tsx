import React, { SVGAttributes } from 'react';

export interface CardSettingsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardSettings: React.FC<CardSettingsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 4h-2v2.277l-2.004-1.145-.992 1.736L16.984 8l-1.98 1.132.992 1.736L18 9.723V12h2V9.723l2.004 1.145.992-1.736L21.016 8l1.98-1.132-.992-1.736L20 6.277V4z' />
            <path d='M4 8a1 1 0 011-1h8V5H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4h-2v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h9V9H4V8z' />
        </svg>
    );
};

CardSettings.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardSettings.displayName = 'CardSettings';
export default CardSettings;
