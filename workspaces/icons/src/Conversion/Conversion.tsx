import React, { SVGAttributes } from 'react';

export interface ConversionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Conversion: React.FC<ConversionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.707 6.293l-3.5-3.5-1.414 1.414L18.586 6H15a5.994 5.994 0 00-5 2.682A5.994 5.994 0 005 6H2v2h3a4 4 0 010 8H2v2h3a5.994 5.994 0 005-2.682A5.994 5.994 0 0015 18h3.586l-1.793 1.793 1.414 1.414 3.5-3.5a1 1 0 000-1.414l-3.5-3.5-1.414 1.414L18.586 16H15a4 4 0 010-8h3.586l-1.793 1.793 1.414 1.414 3.5-3.5a1 1 0 000-1.414z' />
        </svg>
    );
};

Conversion.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Conversion.displayName = 'Conversion';
export default Conversion;
