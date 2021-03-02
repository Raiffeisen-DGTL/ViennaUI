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
            <path d='M3.076 4a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1h-3L15.93 7.854A.5.5 0 0116.283 7h2.793V5h-14v2H7.87a.5.5 0 01.354.854L7.076 9h-3a1 1 0 01-1-1V4zm2 15v-8h-2v9a1 1 0 001 1h16a1 1 0 001-1v-9h-2v8h-14z' />
            <path d='M12.783 7.293a1 1 0 00-1.414 0l-4 4 1.414 1.414 2.293-2.293V17h2v-6.586l2.293 2.293 1.414-1.414-4-4z' />
        </svg>
    );
};

Unarchive.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Unarchive.displayName = 'Unarchive';
export default Unarchive;
