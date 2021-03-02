import React, { SVGAttributes } from 'react';

export interface CarCreditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CarCredit: React.FC<CarCreditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.207 12.707l9-9-1.414-1.414-9 9 1.414 1.414zM11 4.5a2 2 0 114 0 2 2 0 01-4 0z' />
            <path d='M7 3c-1.064 0-1.73.8-2.104 1.46-.399.702-.675 1.594-.87 2.44a23.254 23.254 0 00-.508 3.599c-.15.13-.33.297-.511.499C2.57 11.482 2 12.298 2 13.333V20a1 1 0 001 1h4a1 1 0 001-1v-1h8v1a1 1 0 001 1h4a1 1 0 001-1v-5.667h-2V19h-2v-2H6v2H4v-3.613l1.684.562a1 1 0 00.632-1.898l-2.314-.771c.02-.287.196-.616.491-.944.121-.135.245-.249.347-.336H10v-2H5.562a20.85 20.85 0 01.412-2.65c.18-.779.404-1.45.661-1.903.128-.225.238-.35.313-.41A.252.252 0 017.004 5H9V3H7zm14 5.5a2 2 0 100 4 2 2 0 000-4z' />
        </svg>
    );
};

CarCredit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CarCredit.displayName = 'CarCredit';
export default CarCredit;
