import React, { SVGAttributes } from 'react';

export interface Treatment1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Treatment1: React.FC<Treatment1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 3H2v4.001s.007.233.014.328c.014.19.04.457.093.773.105.628.316 1.48.749 2.345.434.869 1.101 1.768 2.12 2.448.813.541 1.812.918 3.024 1.052V16s.007.19.014.26a5.241 5.241 0 00.763 2.27C9.597 19.843 11.18 21 14 21s4.402-1.157 5.223-2.47c.38-.609.573-1.211.67-1.665A3.001 3.001 0 0019 11a3 3 0 00-1.15 5.772c-.071.219-.174.46-.323.698C17.097 18.157 16.18 19 14 19s-3.098-.843-3.527-1.53a3.244 3.244 0 01-.416-1.049C10.027 16.276 10 16 10 16v-2.053c1.212-.134 2.211-.51 3.024-1.052 1.019-.68 1.686-1.58 2.12-2.448a8.375 8.375 0 00.749-2.345c.052-.316.08-.582.093-.773C15.993 7.234 16 7 16 7V3h-4v2h2v2s-.04.527-.08.773a6.376 6.376 0 01-.564 1.78c-.316.631-.774 1.232-1.442 1.677-.662.442-1.589.77-2.914.77-1.325 0-2.252-.328-2.914-.77-.668-.445-1.126-1.046-1.442-1.677a6.375 6.375 0 01-.564-1.78C4.04 7.527 4 7.001 4 7.001V5h2V3zm12 11a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Treatment1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Treatment1.displayName = 'Treatment1';
export default Treatment1;
