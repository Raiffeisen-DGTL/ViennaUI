import React, { SVGAttributes } from 'react';

export interface CarDealersProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CarDealers: React.FC<CarDealersProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 17h3l1 1v1H6l-1-1v-1zm8 1l1-1h3v1l-1 1h-3v-1zm5.7-3.48a2.98 2.98 0 011.3 2.464V21a2.023 2.023 0 01-2.021 2h-1.958a2.015 2.015 0 01-1.734-1H7.734c-.36.617-1.02.998-1.734 1H4a2.007 2.007 0 01-2-2v-4.052A2.942 2.942 0 013.315 14.5l1.399-3.162C5.291 10.037 10.417 10 11 10c.583 0 5.709.037 6.291 1.338L18.7 14.52zM11 12a21.039 21.039 0 00-4.606.48L5.722 14h10.556l-.673-1.52A21 21 0 0011 12zm7 9v-3.917c0-.598-.485-1.082-1.083-1.083H5.084c-.598 0-1.083.485-1.084 1.083V21h2l.021-1H16v1h2zm3.7-14.48A2.98 2.98 0 0123 8.984V13a2.023 2.023 0 01-2 2V9.083c0-.598-.484-1.082-1.082-1.083H8.083c-.539.005-.99.409-1.055.944A9.96 9.96 0 005 9.379v-.431a2.941 2.941 0 011.314-2.453l1.4-3.157C8.291 2.037 13.417 2 14 2c.583 0 5.709.037 6.287 1.338L21.7 6.52zM8.722 6h10.556l-.673-1.52A21 21 0 0014 4a21.039 21.039 0 00-4.606.48L8.722 6z' />
        </svg>
    );
};

CarDealers.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CarDealers.displayName = 'CarDealers';
export default CarDealers;
