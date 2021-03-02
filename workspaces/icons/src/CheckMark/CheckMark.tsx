import React, { SVGAttributes } from 'react';

export interface CheckmarkProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Checkmark: React.FC<CheckmarkProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.5 5.586L20.914 7 9.5 18.414 3.086 12 4.5 10.586l5 5 10-10z' />
        </svg>
    );
};

Checkmark.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Checkmark.displayName = 'Checkmark';
export default Checkmark;
