import React, { SVGAttributes } from 'react';

export interface PeopleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const People: React.FC<PeopleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.27 14.33A1.76 1.76 0 0018.55 13H17v-2h1.56a3.75 3.75 0 013.65 2.85L23 17h-2.06l-.67-2.67zm-16.54 0L3.06 17H1l.79-3.15A3.75 3.75 0 015.44 11H7v2H5.44a1.76 1.76 0 00-1.71 1.33zM12 8.8a1.67 1.67 0 00-1.7 1.63v1.14a1.7 1.7 0 103.4 0v-1.14A1.67 1.67 0 0012 8.8zM12 7a3.47 3.47 0 013.5 3.43v1.14a3.5 3.5 0 01-7 0v-1.14A3.47 3.47 0 0112 7zm6.51-3.2a1.67 1.67 0 00-1.7 1.63v1.14a1.7 1.7 0 103.4 0V5.43a1.67 1.67 0 00-1.7-1.63zm0-1.8A3.47 3.47 0 0122 5.43v1.14a3.5 3.5 0 01-7 0V5.43A3.48 3.48 0 0118.51 2zM5.47 3.8a1.67 1.67 0 00-1.7 1.63v1.14a1.7 1.7 0 003.4 0V5.43a1.67 1.67 0 00-1.7-1.63zm0-1.8A3.48 3.48 0 019 5.43v1.14a3.5 3.5 0 01-7 0V5.43A3.47 3.47 0 015.47 2zM7 22H5l.76-3.15A3.75 3.75 0 019.41 16h5a3.75 3.75 0 013.65 2.77l.81 3.23h-2.06l-.66-2.67A1.76 1.76 0 0014.44 18h-5a1.77 1.77 0 00-1.75 1.25L7 22z' />
        </svg>
    );
};

People.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

People.displayName = 'People';
export default People;
