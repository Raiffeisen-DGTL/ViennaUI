import React, { SVGAttributes } from 'react';

export interface ExitProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Exit: React.FC<ExitProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 2h15v2H6.85l2.775 2.22A1 1 0 0110 7v11h9v2h-9v1a1 1 0 01-1.625.78l-5-4A1 1 0 013 17V3a1 1 0 011-1zm4 5.48l-3-2.4v11.44l3 2.4V7.48z'
                clipRule='evenodd'
            />
            <path d='M20.707 11.707a1 1 0 000-1.414l-4-4-1.414 1.414L17.586 10H12v2h5.586l-2.293 2.293 1.414 1.414 4-4z' />
        </svg>
    );
};

Exit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Exit.displayName = 'Exit';
export default Exit;
