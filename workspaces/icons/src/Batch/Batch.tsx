import React, { SVGAttributes } from 'react';

export interface BatchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Batch: React.FC<BatchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2 1v12h8V6H4z'
                clipRule='evenodd'
            />
            <path d='M20 7h2v10h-2V7zm-2-2h-2v14h2V5z' />
        </svg>
    );
};

Batch.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Batch.displayName = 'Batch';
export default Batch;
