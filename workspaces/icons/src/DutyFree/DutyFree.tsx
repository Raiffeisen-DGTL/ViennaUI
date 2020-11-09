import React, { SVGAttributes } from 'react';

export interface DutyFreeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DutyFree: React.FC<DutyFreeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 7.009a2.079 2.079 0 012 2.075v10.833c0 1.15-.933 2.082-2.083 2.083H5.859A1.859 1.859 0 014 20.141V8.859A1.86 1.86 0 015.859 7H8V6a4 4 0 118 0v4h-2V9h-3V7h3V6a2 2 0 10-4 0v4H8V9H6v11h12V9h-1V7h1v.009zM8 11h2v2H8v-2zm6 6h2v2h-2v-2zm2-4.586L9.414 19H8v-1.414L14.586 11H16v1.414z' />
        </svg>
    );
};

DutyFree.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DutyFree.displayName = 'DutyFree';
export default DutyFree;
