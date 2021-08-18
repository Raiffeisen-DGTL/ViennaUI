import React, { SVGAttributes } from 'react';

export interface Gosuslugi2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gosuslugi2: React.FC<Gosuslugi2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.812 3.455a2 2 0 00-1.624 0L4.32 6.508A.539.539 0 004 7H2c0-1.003.59-1.912 1.508-2.32l6.867-3.052a4 4 0 013.25 0l6 2.666A4 4 0 0122 7.95v8.1a4 4 0 01-2.375 3.656l-6 2.666a4 4 0 01-3.25 0L3.508 19.32A2.539 2.539 0 012 17h2c0 .213.125.406.32.492l6.868 3.053a2 2 0 001.624 0l6-2.667A2 2 0 0020 16.05v-8.1a2 2 0 00-1.188-1.828l-6-2.667zM10 11H2V9h8v2zm8 2v2H2v-2h16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gosuslugi2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gosuslugi2.displayName = 'Gosuslugi2';
export default Gosuslugi2;
