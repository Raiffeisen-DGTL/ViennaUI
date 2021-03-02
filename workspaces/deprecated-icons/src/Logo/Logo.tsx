import React, { SVGAttributes } from 'react';

export interface LogoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Logo: React.FC<LogoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2.399 18.438l2.8 2.855 6.561-6.658 6.781 6.795 2.845-2.814-6.715-6.716 1.291-1.249V7.99l.81-.685v2.086l1.043.851 3.116-3.116 1 .769c.591-2.183-2.827-7.139-5.655-4.393l-3.29 3.267.673.81-1.673 1.634-1.62-1.593.851-.768-3.616-3.488C4.886 1.127 2.097 4.531 2 7.853l.989-.824L6.023 10.3l1.084-.906v-2l.673.508v2.622l1.318 1.317-6.7 6.6.001-.003z' />
        </svg>
    );
};

Logo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Logo.displayName = 'Logo';
export default Logo;
