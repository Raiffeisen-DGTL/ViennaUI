import React, { SVGAttributes } from 'react';

export interface MenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Men: React.FC<MenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.7 14.335A1.761 1.761 0 0017.986 13H13v-2h4.986a3.757 3.757 0 013.65 2.851L22.424 17h-2.062l-.662-2.665zM8.5 8.8a1.667 1.667 0 00-1.7 1.629v1.142a1.7 1.7 0 103.4 0v-1.142A1.668 1.668 0 008.5 8.8zm0-1.8a3.475 3.475 0 013.5 3.429v1.142a3.5 3.5 0 01-7 0v-1.142A3.475 3.475 0 018.5 7zm7-3.2a1.667 1.667 0 00-1.7 1.629v1.142a1.7 1.7 0 103.4 0V5.429A1.668 1.668 0 0015.5 3.8zm0-1.8A3.475 3.475 0 0119 5.429v1.142a3.5 3.5 0 01-7 0V5.429A3.475 3.475 0 0115.5 2zM3.617 22.083H1.556l.808-3.232A3.757 3.757 0 016.014 16h4.972a3.757 3.757 0 013.65 2.851l.808 3.232h-2.061l-.687-2.748A1.761 1.761 0 0010.986 18H6.014A1.76 1.76 0 004.3 19.335l-.683 2.748z' />
        </svg>
    );
};

Men.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Men.displayName = 'Men';
export default Men;
