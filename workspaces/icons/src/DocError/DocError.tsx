import React, { SVGAttributes } from 'react';

export interface DocErrorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocError: React.FC<DocErrorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 2a1 1 0 00-1 1v7h2V4h12v16h-6v2h7a1 1 0 001-1V3a1 1 0 00-1-1H7z' />
            <path d='M3.707 21.707L7 18.414l3.293 3.293 1.414-1.414L8.414 17l3.293-3.293-1.414-1.414L7 15.586l-3.293-3.293-1.414 1.414L5.586 17l-3.293 3.293 1.414 1.414z' />
        </svg>
    );
};

DocError.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocError.displayName = 'DocError';
export default DocError;
