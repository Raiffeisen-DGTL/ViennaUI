import React, { SVGAttributes } from 'react';

export interface CaseProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Case: React.FC<CaseProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 11v2h12v-2H6z' />
            <path
                fillRule='evenodd'
                d='M9 3a2 2 0 00-2 2v2H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1h-4V5a2 2 0 00-2-2H9zm6 4V5H9v2h6zM4 19V9h16v10H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Case.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Case.displayName = 'Case';
export default Case;
