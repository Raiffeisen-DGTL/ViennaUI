import React, { SVGAttributes } from 'react';

export interface HistoryProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const History: React.FC<HistoryProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 11.586V7h-2v4.586A2 2 0 0011.586 13l3.207 3.207 1.414-1.414L13 11.586z' />
            <path
                fillRule='evenodd'
                d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

History.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

History.displayName = 'History';
export default History;
