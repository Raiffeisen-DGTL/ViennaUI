import React, { SVGAttributes } from 'react';

export interface DocumentHistoryProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentHistory: React.FC<DocumentHistoryProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.19 22a6.49 6.49 0 001.312-2H20V4H6v7.019a6.463 6.463 0 00-2 .48V4a2 2 0 012-2h14a2 2 0 012 2v16.012c0 1.098-.89 1.987-1.988 1.988H11.19zM8 6h10v2H8V6zM6.35 22.85a5.35 5.35 0 110-10.7 5.35 5.35 0 010 10.7zm0-1.7a3.65 3.65 0 100-7.3 3.65 3.65 0 000 7.3zm.85-4.5h1.65v1.7H5.5V15h1.7v1.65z' />
        </svg>
    );
};

DocumentHistory.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentHistory.displayName = 'DocumentHistory';
export default DocumentHistory;
