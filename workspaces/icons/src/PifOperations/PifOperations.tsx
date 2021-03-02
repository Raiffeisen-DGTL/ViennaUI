import React, { SVGAttributes } from 'react';

export interface PifOperationsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PifOperations: React.FC<PifOperationsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.96 3.132L6.665.652l-1 1.732L7.702 3.56A9.999 9.999 0 1021 13a1 1 0 00-1-1h-8v-2h-2v3a1 1 0 001 1h7.937A8 8 0 118.495 5.402l-1.4 2.426 1.732 1 2.5-4.33a1 1 0 00-.367-1.366z' />
            <path d='M22.707 2.707l-8 8-1.414-1.414 8-8 1.414 1.414zM14.75 1.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm6.5 5.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z' />
        </svg>
    );
};

PifOperations.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PifOperations.displayName = 'PifOperations';
export default PifOperations;
