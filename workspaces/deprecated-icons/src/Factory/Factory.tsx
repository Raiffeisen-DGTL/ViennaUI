import React, { SVGAttributes } from 'react';

export interface FactoryProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Factory: React.FC<FactoryProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 13V8h5v5h6v7h1v2H2v-2h1v-7h1V8h5v5h1zm2 0h1v-3h-1v3zm-2 2H5v5h14v-5h-9zm-3-2v-3H6v3h1zm5-6.167A4.838 4.838 0 0116.833 2h2.12v.971L18 4h-1.167A2.836 2.836 0 0014 6.833V7h-2v-.167zm-6 0A4.838 4.838 0 0110.833 2h2.12v.971L12 4h-1.167A2.836 2.836 0 008 6.833V7H6v-.167zM13 16h2v2h-2v-2zm3 0h2v2h-2v-2z' />
        </svg>
    );
};

Factory.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Factory.displayName = 'Factory';
export default Factory;
