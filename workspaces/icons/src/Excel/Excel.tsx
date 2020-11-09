import React, { SVGAttributes } from 'react';

export interface ExcelProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Excel: React.FC<ExcelProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 2a2 2 0 012 2v15.573A2.426 2.426 0 0118.573 22H3v-2h16V4H5v16H3V4a2 2 0 012-2h14zm-8.202 13.5L6.15 10.852V8.15h4.702L12 9.298l1.148-1.148h4.702v2.702L16.202 12.5 15 11.298l1.15-1.15V9.85h-2.298l-.65.65 4.648 4.648v2.702h-4.702L12 16.702l-1.148 1.148H6.15v-2.702L7.798 13.5 9 14.702l-1.15 1.15v.298h2.298l.65-.65zm5.352.65v-.298L10.148 9.85H7.85v.298l6.002 6.002h2.298z' />
        </svg>
    );
};

Excel.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Excel.displayName = 'Excel';
export default Excel;
