import React, { SVGAttributes } from 'react';

export interface EnterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Enter: React.FC<EnterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19 2H4v2h12.15l-2.775 2.22A1 1 0 0013 7v11H4v2h9v1a1 1 0 001.625.78l5-4A1 1 0 0020 17V3a1 1 0 00-1-1zm-4 5.48l3-2.4v11.44l-3 2.4V7.48z'
                clipRule='evenodd'
            />
            <path d='M10.707 11.707a1 1 0 000-1.414l-4-4-1.414 1.414L7.586 10H2v2h5.586l-2.293 2.293 1.414 1.414 4-4z' />
        </svg>
    );
};

Enter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Enter.displayName = 'Enter';
export default Enter;
