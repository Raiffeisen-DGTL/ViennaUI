import React, { SVGAttributes } from 'react';

export interface TelephoneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Telephone: React.FC<TelephoneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 5h-8V3h9a1 1 0 011 1v16a1 1 0 01-1 1h-9v-2h8V5z' />
            <path d='M12 7h6v2h-6V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z' />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v14h2V5H5z'
                clipRule='evenodd'
            />
            <path fillRule='evenodd' d='M11 16a1 1 0 011-1h1v5a4 4 0 01-8 0h2a2 2 0 104 0v-4z' clipRule='evenodd' />
        </svg>
    );
};

Telephone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Telephone.displayName = 'Telephone';
export default Telephone;
