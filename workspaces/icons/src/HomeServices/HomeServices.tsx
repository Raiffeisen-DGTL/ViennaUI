import React, { SVGAttributes } from 'react';

export interface HomeServicesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HomeServices: React.FC<HomeServicesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.321 1.266a1 1 0 011.363.004l8 7.5-1.368 1.46-7.32-6.864L4 9.837V10h2v8h4v2H5a1 1 0 01-1-1v-7H3a1 1 0 01-1-1V9.4a1 1 0 01.321-.734l8-7.4z' />
            <path
                fillRule='evenodd'
                d='M11.293 11.293a1 1 0 01.831-.285l8 1a1 1 0 01.583 1.7L19.414 15l2.293 2.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0L15 19.414l-1.293 1.293a1 1 0 01-1.7-.583l-1-8a1 1 0 01.286-.831zm1.859 1.859l.587 4.695.554-.554a1 1 0 011.414 0L18 19.586 19.586 18l-2.293-2.293a1 1 0 010-1.414l.554-.554-4.695-.587z'
                clipRule='evenodd'
            />
        </svg>
    );
};

HomeServices.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HomeServices.displayName = 'HomeServices';
export default HomeServices;
