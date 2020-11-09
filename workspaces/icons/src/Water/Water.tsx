import React, { SVGAttributes } from 'react';

export interface WaterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Water: React.FC<WaterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 23a8.009 8.009 0 01-8-8c0-6.257 7.042-12.49 7.341-12.753L12 1.675l.657.568C12.954 2.5 20 8.657 20 15a8.009 8.009 0 01-8 8zm0-18.632C10.326 6.012 6 10.668 6 15a6 6 0 1012 0c0-4.4-4.315-9.006-6-10.632zM12 18.1a3.1 3.1 0 003.1-3.1h1.8a4.905 4.905 0 01-4.9 4.9v-1.8z' />
        </svg>
    );
};

Water.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Water.displayName = 'Water';
export default Water;
