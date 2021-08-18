import React, { SVGAttributes } from 'react';

export interface ClearRecProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ClearRec: React.FC<ClearRecProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.707 15.707L14 13.414l2.293 2.293 1.414-1.414L15.414 12l2.293-2.293-1.414-1.414L14 10.586l-2.293-2.293-1.414 1.414L12.586 12l-2.293 2.293 1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M8.5 4a1 1 0 00-.786.382l-5.5 7a1 1 0 000 1.236l5.5 7A1 1 0 008.5 20H19a3 3 0 003-3V7a3 3 0 00-3-3H8.5zm-4.228 8l4.714-6H19a1 1 0 011 1v10a1 1 0 01-1 1H8.986l-4.714-6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ClearRec.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ClearRec.displayName = 'ClearRec';
export default ClearRec;
