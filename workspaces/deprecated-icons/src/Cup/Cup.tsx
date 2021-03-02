import React, { SVGAttributes } from 'react';

export interface CupProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cup: React.FC<CupProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 21v-1h16v1l-1 1H3l-1-1zM20 7a2 2 0 012 2v2.85A4.15 4.15 0 0117.85 16h-.93a8.09 8.09 0 01-3.06 3H6.14A8 8 0 012 12V7h18zm-6.69 10A6 6 0 0016 12V9H4v3a6 6 0 002.69 5h6.62zM20 11.85V9h-2v3a8.24 8.24 0 01-.26 2h.11A2.15 2.15 0 0020 11.85zM6 2h2v4H6V2zm3 0h2v4H9V2zm3 0h2v4h-2V2z' />
        </svg>
    );
};

Cup.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cup.displayName = 'Cup';
export default Cup;
