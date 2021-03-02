import React, { SVGAttributes } from 'react';

export interface BellProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bell: React.FC<BellProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.661 18.661l1.414 1.414c-.011.011-.017.024-.028.034a4 4 0 01-5.656-5.656c.01-.011.023-.018.034-.028l1.414 1.414c-.011.011-.024.017-.034.028a2 2 0 002.828 2.828c.011-.01.017-.023.028-.034zm6.964 2.639l-1.418 1.346-6.408-6.409-.021-.02L1.37 9.809l1.348-1.332c1.157.117 2.615.195 3.6-.789l3.537-3.537a6.953 6.953 0 017.191-1.682c.731.25 1.415.622 2.022 1.1l2.173-2.171.679.678.02.021.679.678-2.175 2.175c.478.608.85 1.292 1.1 2.023a6.951 6.951 0 01-1.683 7.19L16.325 17.7a3.977 3.977 0 00-.7 3.6zm-6.412-6.474l4.501 4.485a3.753 3.753 0 011.2-3.031l3.536-3.536a4.982 4.982 0 00-.059-7.121 4.982 4.982 0 00-7.122-.06L7.733 9.1a3.83 3.83 0 01-3.025 1.216l4.484 4.49.021.02z' />
        </svg>
    );
};

Bell.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bell.displayName = 'Bell';
export default Bell;
