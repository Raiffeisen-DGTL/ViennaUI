import React, { SVGAttributes } from 'react';

export interface ArcherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Archer: React.FC<ArcherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.365 1l-.926.926.895.874h2.452L15.84 6.739A12 12 0 003.975 4.561L2.707 3.293 1.293 4.707l8.285 8.285-1.006 1-4.1-.015-3.021 3.028 2.315 2.314h.887v.887l2.314 2.315 3.02-3.02L10 15.4l.99-.989 8.3 8.3 1.414-1.414-1.266-1.266c.466-1.293.706-2.657.708-4.031 0-2.876-1.024-5.659-2.891-7.847L21.2 4.214v2.363l.962.94.838-.838V1h-5.635zM8.189 18.752l-1.222 1.223-.514-.514V17.52H4.511L4 17.005l1.22-1.22 2.98.015-.011 2.952zM5.576 6.162a10.009 10.009 0 018.848 1.992l-3.431 3.425-5.417-5.417zM18.146 16a9.978 9.978 0 01-.308 2.423l-5.431-5.43 3.432-3.426A10.1 10.1 0 0118.146 16z' />
        </svg>
    );
};

Archer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Archer.displayName = 'Archer';
export default Archer;
