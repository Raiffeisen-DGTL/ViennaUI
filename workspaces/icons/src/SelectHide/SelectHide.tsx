import React, { SVGAttributes } from 'react';

export interface SelectHideProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SelectHide: React.FC<SelectHideProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 9.414l-7.293 7.293-1.414-1.414 8-8a1 1 0 011.414 0l8 8-1.414 1.414L12 9.414z' />
        </svg>
    );
};

SelectHide.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SelectHide.displayName = 'SelectHide';
export default SelectHide;
