import React, { SVGAttributes } from 'react';

export interface RepairOfThingsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RepairOfThings: React.FC<RepairOfThingsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.102 7.999H6.498L4 5.004V2.999h15v2.005l-2.498 2.995h-2.605l2.503-3H6.601l2.501 3zm4.795 10h2.605L19 20.994v2.005H4v-2.005l2.498-2.995h2.604l-2.501 3H16.4l-2.503-3zm-7.897-6h11v2H6v-2zm0 3h11v2H6v-2zM17 9a4.267 4.267 0 014 4.39V14h-2v-.61A2.393 2.393 0 0016.609 11H6V9h11z' />
        </svg>
    );
};

RepairOfThings.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RepairOfThings.displayName = 'RepairOfThings';
export default RepairOfThings;
