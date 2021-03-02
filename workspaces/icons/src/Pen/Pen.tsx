import React, { SVGAttributes } from 'react';

export interface PenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pen: React.FC<PenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 5V2H7v2.764l-2.894 5.789A1 1 0 004.2 11.6c1.45 1.934 2.123 3.314 2.455 4.643C6.995 17.6 7 18.971 7 21a1 1 0 001 1h4a1 1 0 001-1v-7.268A2 2 0 0012 10a2 2 0 00-1 3.732V20H8.998c-.009-1.54-.064-2.887-.403-4.242-.383-1.534-1.112-3.025-2.427-4.857l2.726-5.454A1 1 0 009 5zm8-3v2.764l2.894 5.789A1 1 0 0119.8 11.6c-1.45 1.934-2.123 3.314-2.455 4.643C17.005 17.6 17 18.971 17 21a1 1 0 01-1 1h-1v-2h.002c.009-1.54.064-2.887.403-4.242.383-1.534 1.112-3.025 2.427-4.857l-2.726-5.454A.999.999 0 0115 5V2h2z' />
        </svg>
    );
};

Pen.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pen.displayName = 'Pen';
export default Pen;
