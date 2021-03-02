import React, { SVGAttributes } from 'react';

export interface PetSuppliesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PetSupplies: React.FC<PetSuppliesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.862 7a3.642 3.642 0 01-2.868 2.592 3.894 3.894 0 01-3.43-.94l1.3-1.515c.47.455 1.14.638 1.777.486A1.653 1.653 0 0019 6a2 2 0 00-2-2c-.616 0-1.3.7-1.909 1.323-.134.137-.265.27-.391.393l-7.724 7.725c.115.334.31.635.569.877a5.483 5.483 0 009.4-3.217c.5.05 1.006.025 1.5-.074.175-.03.347-.07.517-.12h.027a7.5 7.5 0 01-12.887 4.8 4.9 4.9 0 01-.618-.777l-2.777 2.777-1.414-1.414 12-12c.125-.122.244-.243.366-.369C14.454 3.112 15.542 2 17 2a4.002 4.002 0 013.874 3H22l1 1v1h-2.138zM5.964 19h14v2h-14v-2z' />
        </svg>
    );
};

PetSupplies.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PetSupplies.displayName = 'PetSupplies';
export default PetSupplies;
