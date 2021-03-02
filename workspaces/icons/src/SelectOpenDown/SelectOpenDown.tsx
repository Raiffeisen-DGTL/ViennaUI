import React, { SVGAttributes } from 'react';

export interface SelectOpenDownProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SelectOpenDown: React.FC<SelectOpenDownProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 14.44l7.293-7.294 1.414 1.415-8 8a1 1 0 01-1.414 0l-8-8 1.414-1.415L12 14.44z' />
        </svg>
    );
};

SelectOpenDown.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SelectOpenDown.displayName = 'SelectOpenDown';
export default SelectOpenDown;
