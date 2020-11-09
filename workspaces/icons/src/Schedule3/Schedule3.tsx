import React, { SVGAttributes } from 'react';

export interface Schedule3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Schedule3: React.FC<Schedule3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.365 2H22v5.68l-.837.837-.963-.941V5.214L6.414 19H5v-1.414L18.786 3.8h-2.452l-.895-.874.926-.926zM4 2v18h18v2H2V2h2z' />
        </svg>
    );
};

Schedule3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Schedule3.displayName = 'Schedule3';
export default Schedule3;
