import React, { SVGAttributes } from 'react';

export interface AccOperationsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AccOperations: React.FC<AccOperationsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 2a1 1 0 00-1 1v15h2V4h12V2H3z' />
            <path d='M7 6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1v-1H8V8h10v6.586l-1.293-1.293-1.414 1.414 3 3a1 1 0 001.414 0l3-3-1.414-1.414L20 14.586V7a1 1 0 00-1-1H7z' />
        </svg>
    );
};

AccOperations.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AccOperations.displayName = 'AccOperations';
export default AccOperations;
