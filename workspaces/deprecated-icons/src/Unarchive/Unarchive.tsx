import React, { SVGAttributes } from 'react';

export interface UnarchiveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Unarchive: React.FC<UnarchiveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.5 9l-2.066-2H20V4H4v3h4.566L6.5 9H3.971A1.97 1.97 0 012 7.029V3.971A1.97 1.97 0 013.971 2h16.05C21.114 2 22 2.886 22 3.979v3.063A1.958 1.958 0 0120.042 9H17.5zm1.5 1h2v9.969C21 21.091 20.09 22 18.969 22H5.031A2.031 2.031 0 013 19.969V10h2v10h14V10zm-8-.828l-2.536 2.535H7.05v-1.414L12 5.343l4.95 4.95v1.414h-1.414L13 9.172V17h-2V9.172z' />
        </svg>
    );
};

Unarchive.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Unarchive.displayName = 'Unarchive';
export default Unarchive;
