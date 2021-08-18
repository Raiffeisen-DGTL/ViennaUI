import React, { SVGAttributes } from 'react';

export interface Bicycle2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bicycle2: React.FC<Bicycle2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15.237 3.354A1 1 0 0116 3h3.5a3 3 0 110 6H19V7h.5a1 1 0 100-2h-2.32l1.001 6.003a5 5 0 11-3.835 1.584l-3.565 1.944a5 5 0 11-3.553-3.38L6.09 8.417 5.382 7H2V5h4a1 1 0 01.894.553L7.618 7h7.869l-.473-2.836a1 1 0 01.223-.81zM5.521 15.122l2.483-1.354a3 3 0 10.958 1.756L6.48 16.878l-.958-1.756zm11.028-1.748A3 3 0 0018 19a3 3 0 00.522-5.955l.465 2.79-1.973.33-.465-2.791zm-.652-3.911l-5.873 3.203L8.5 9h7.32l.078.463z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bicycle2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bicycle2.displayName = 'Bicycle2';
export default Bicycle2;
