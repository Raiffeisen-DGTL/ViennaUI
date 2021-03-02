import React, { SVGAttributes } from 'react';

export interface ServicesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Services: React.FC<ServicesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 1v2h2V5H4zm-2 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4zm2 1v2h2v-2H4zm7.124-1.992a1 1 0 00-1.116 1.116l1 8a1 1 0 001.7.583L14 19.414l2.293 2.293a1 1 0 001.414 0l3-3a1 1 0 000-1.414L18.414 15l1.293-1.293a1 1 0 00-.583-1.7l-8-1zm1.615 6.84l-.587-4.696 4.695.587-.554.554a1 1 0 000 1.414L18.586 18 17 19.586l-2.293-2.293a1 1 0 00-1.414 0l-.554.554z'
                clipRule='evenodd'
            />
            <path d='M22 5H10V3h12v2zM10 9h8V7h-8v2z' />
        </svg>
    );
};

Services.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Services.displayName = 'Services';
export default Services;
