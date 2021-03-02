import React, { SVGAttributes } from 'react';

export interface Binoculars2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Binoculars2: React.FC<Binoculars2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13.027 18a4.5 4.5 0 108.923-1.173l.034-.006-1.702-9.358A3 3 0 0018 5.075V5a3 3 0 00-3-3h-.528a3 3 0 00-1.341.317L12 2.882l-1.13-.565A3 3 0 009.527 2H9a3 3 0 00-3 3v.075a3 3 0 00-2.282 2.388l-1.702 9.358.034.006A4.5 4.5 0 1010.973 18H11v-6h2v6h.027zM15 4h-.528a1 1 0 00-.447.106L13 4.618V6h-2V4.618l-1.025-.512A1 1 0 009.528 4H9a1 1 0 00-1 1v1a1 1 0 01-1 1h-.33a1 1 0 00-.985.821l-1.012 5.565A4.484 4.484 0 016.5 13c.925 0 1.785.28 2.5.758V11a1 1 0 011-1h4a1 1 0 011 1v2.758A4.478 4.478 0 0117.5 13c.65 0 1.268.138 1.826.386l-1.011-5.565A1 1 0 0017.33 7H17a1 1 0 01-1-1V5a1 1 0 00-1-1zm0 13.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm-6 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Binoculars2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Binoculars2.displayName = 'Binoculars2';
export default Binoculars2;
