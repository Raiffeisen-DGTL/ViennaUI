import React, { SVGAttributes } from 'react';

export interface Gosuslugi1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gosuslugi1: React.FC<Gosuslugi1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.857 2.486a1 1 0 00-1.714 0L8.15 7.47A.995.995 0 008 8v4.382l-1 .5-1.553-.776A.999.999 0 005 12H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-1.382l1-.5 1 .5V20a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-2a.999.999 0 00-.447.106L17 12.882l-1-.5V8a.995.995 0 00-.15-.528l-2.992-4.987zM13.235 7L12 4.944 10.766 7h2.468zM14 9v3h-4V9h4zM4 19v-5h.764L6 14.618V16h2v-1.382L9.236 14H11v1h2v-1h1.764l1.236.618V16h2v-1.382L19.236 14H20v5h-5v-1a1 1 0 00-.553-.894l-2-1a1 1 0 00-.894 0l-2 1A1 1 0 009 18v1H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gosuslugi1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gosuslugi1.displayName = 'Gosuslugi1';
export default Gosuslugi1;
