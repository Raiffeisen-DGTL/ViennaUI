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
            <path d='M14 12a1.994 1.994 0 01-1 1.723V22H8.025L8 21.025a19.732 19.732 0 00-.954-4.725 12.276 12.276 0 00-2.743-4.583l-.594-.58 4.253-6.382L7.617 2h2.016l.405 3.242L6.266 10.9a14.19 14.19 0 012.688 4.8c.448 1.402.77 2.84.961 4.3H11v-6.277A2 2 0 1114 12zm2.038-7.245l4.247 6.37-.577.581a13.234 13.234 0 00-2.76 4.61 17.559 17.559 0 00-.948 4.7l-.017.984H14v-2h.074a21.5 21.5 0 01.978-4.316 15.22 15.22 0 012.687-4.772l-3.777-5.667L14.367 2h2.016l-.345 2.755z' />
        </svg>
    );
};

Pen.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pen.displayName = 'Pen';
export default Pen;
