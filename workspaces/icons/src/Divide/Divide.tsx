import React, { SVGAttributes } from 'react';

export interface DivideProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Divide: React.FC<DivideProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 4v2H4v-2h16zm-6.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
        </svg>
    );
};

Divide.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Divide.displayName = 'Divide';
export default Divide;
