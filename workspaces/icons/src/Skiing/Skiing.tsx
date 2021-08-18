import React, { SVGAttributes } from 'react';

export interface SkiingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Skiing: React.FC<SkiingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.885 13.258l1.414 1.414a4 4 0 01-5.656 0L5.62 2.652l1.414-1.416 7.14 7.134 1.06-1.06a.594.594 0 00-.835-.842l-.19.183-1.276-1.275.209-.2a2.412 2.412 0 013.36.021l.007.006a2.4 2.4 0 010 3.388l-1.06 1.06 3.606 3.606a2 2 0 002.829 0zm-4.921 6.919l1.414 1.416a4 4 0 01-5.656 0L.699 9.564 2.113 8.15l7.14 7.141 1.06-1.06a.592.592 0 000-.842.6.6 0 00-.835 0l-.19.185-1.273-1.272.21-.205a2.412 2.412 0 013.358.02l.007.006a2.4 2.4 0 010 3.388l-1.06 1.06 3.606 3.606a2 2 0 002.828 0z' />
        </svg>
    );
};

Skiing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Skiing.displayName = 'Skiing';
export default Skiing;
