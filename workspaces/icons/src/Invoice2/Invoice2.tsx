import React, { SVGAttributes } from 'react';

export interface Invoice2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Invoice2: React.FC<Invoice2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 3h18v2H3V3zm13 4H8v2h8V7zm0 4H8v2h8v-2z' />
            <path d='M18.003 7v11.528c-.238-.085-.334-.084-.536-.083h-.134a3.613 3.613 0 00-1.738.545 2.103 2.103 0 01-.928.343 2.004 2.004 0 01-.89-.334A3.646 3.646 0 0012 18.444a3.63 3.63 0 00-1.784.559 1.98 1.98 0 01-.883.33 2.236 2.236 0 01-.903-.338 3.742 3.742 0 00-1.763-.55h-.138c-.197-.001-.29-.002-.526.083V7H4v12.583a1.151 1.151 0 001.763.976c.27-.182.58-.297.904-.337.334.045.655.163.937.348.522.323 1.117.51 1.73.541a3.54 3.54 0 001.726-.544 1.525 1.525 0 011.867 0 3.577 3.577 0 001.74.544 3.65 3.65 0 001.766-.553 2.1 2.1 0 01.9-.336 2 2 0 01.904.336 2.4 2.4 0 00.39.194A1 1 0 0020 19.824V7h-1.997z' />
        </svg>
    );
};

Invoice2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Invoice2.displayName = 'Invoice2';
export default Invoice2;
