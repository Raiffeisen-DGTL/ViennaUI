import React, { SVGAttributes } from 'react';

export interface ServicesAndServiceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ServicesAndService: React.FC<ServicesAndServiceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 11a4 4 0 01-4-4V6a4 4 0 118 0v1a4 4 0 01-4 4zm0-7a2 2 0 00-2 2v1a2 2 0 104 0V6a2 2 0 00-2-2zm0 13h4v2h-4v-2zm-5.976 5H3.987l1.554-7.046A3.752 3.752 0 019.224 12h5.552a3.752 3.752 0 013.683 2.954L20.033 22h-2.057l-1.47-6.612A1.761 1.761 0 0014.776 14H9.224a1.761 1.761 0 00-1.73 1.388L6.024 22z' />
        </svg>
    );
};

ServicesAndService.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ServicesAndService.displayName = 'ServicesAndService';
export default ServicesAndService;
