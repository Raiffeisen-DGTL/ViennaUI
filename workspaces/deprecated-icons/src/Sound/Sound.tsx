import React, { SVGAttributes } from 'react';

export interface SoundProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sound: React.FC<SoundProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 22h-2.414l-4-4H8A6 6 0 118 6h1.586l4-4H16v20zM8 8a4 4 0 100 8h2.414L14 19.585V4.413L10.414 8H8zm13.1 4a7.074 7.074 0 00-2.082-5.019L20.29 5.71a8.884 8.884 0 010 12.58l-1.272-1.272A7.078 7.078 0 0021.1 12zm-2.93-4.171l.002.004a5.891 5.891 0 010 8.34L16.9 14.9a4.093 4.093 0 000-5.8l1.27-1.271z' />
        </svg>
    );
};

Sound.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sound.displayName = 'Sound';
export default Sound;
