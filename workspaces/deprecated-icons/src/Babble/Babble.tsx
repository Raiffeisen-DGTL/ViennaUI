import React, { SVGAttributes } from 'react';

export interface BabbleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Babble: React.FC<BabbleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 6a2 2 0 012 2v9a2 2 0 01-2 2h-5.586l-4 4H6v-1.414L10.586 17H17V8H4v9h2v2H4a2 2 0 01-2-2V8a2 2 0 012-2h13zm3-4a2 2 0 012 2v9a2 2 0 01-2 2V4H7v1H5V4a2 2 0 012-2h13z' />
        </svg>
    );
};

Babble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Babble.displayName = 'Babble';
export default Babble;
