import React, { SVGAttributes } from 'react';

export interface OilProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Oil: React.FC<OilProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.845 11.547L16.8 20H22v2H2v-2h7.205l1.657-7.183 3.983-1.27zm-1.845.9L11.257 20h3.486L13 12.447zm9.028-4.664L22 7.792V19h-2V8.434L8.745 12.047l-.759 3.243-2.516.807-.407-.287a9.136 9.136 0 01-3.047-4.654 9.125 9.125 0 01-.23-5.556l.164-.471 2.515-.811 2.505 2.2 13.283-4.265 1.775 5.53zM7.055 10.488l12.454-3.995-.552-1.721-12.457 4-2.5-2.2-.445.144a8.1 8.1 0 00.368 3.83 8.094 8.094 0 001.93 3.329l.447-.144.755-3.243z' />
        </svg>
    );
};

Oil.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Oil.displayName = 'Oil';
export default Oil;
