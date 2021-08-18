import React, { SVGAttributes } from 'react';

export interface AnimalProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Animal: React.FC<AnimalProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4.128 10.597A7.967 7.967 0 004 12H2a9.95 9.95 0 01.16-1.757L3 3l1-1 5 4h6l5-4 1 1 .837 7.24c.106.58.16 1.168.16 1.757h-2a7.967 7.967 0 00-.128-1.4l-.011-.062-.007-.061-.616-5.3-2.989 2.392-.547.437h-7.4l-.548-.437-2.989-2.392-.616 5.3-.007.061-.011.062zM12 20a7.946 7.946 0 003.865-1h3.271a9.987 9.987 0 01-14.272 0h3.272A7.939 7.939 0 0012 20zm-1-6h2v2h-2v-2zm-4-4h2v2H7v-2zm8 0h2v2h-2v-2zm-7 5H2l-1-1v-1h6l1 1v1zm0 2v1H3l-1-1v-1h5l1 1zm9-4h6v1l-1 1h-6v-1l1-1zm-1 4l1-1h5v1l-1 1h-5v-1z' />
        </svg>
    );
};

Animal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Animal.displayName = 'Animal';
export default Animal;
