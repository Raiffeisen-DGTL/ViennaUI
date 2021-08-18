import React, { SVGAttributes } from 'react';

export interface DocHistoryProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocHistory: React.FC<DocHistoryProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 2a1 1 0 00-1 1v4h2V4h12v16h-4v2h5a1 1 0 001-1V3a1 1 0 00-1-1H7zm2 11v2.586l1.707 1.707-1.414 1.414L7 16.414V13h2z' />
            <path
                fillRule='evenodd'
                d='M1 16a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocHistory.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocHistory.displayName = 'DocHistory';
export default DocHistory;
