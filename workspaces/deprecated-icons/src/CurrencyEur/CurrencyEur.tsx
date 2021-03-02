import React, { SVGAttributes } from 'react';

export interface CurrencyEurProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CurrencyEur: React.FC<CurrencyEurProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zM9.356 14.114C9.89 15.302 10.87 16 12.115 16c.901 0 1.576-.263 2.063-.699.289-.258.45-.514.514-.674l.05-.127H16.2v1.2l-.023.093c-.13.25-.419.61-.901.968-.795.588-1.853.939-3.203.939-2.406 0-4.124-1.364-4.793-3.586H5.8V12.43h1.193a6.175 6.175 0 01-.001-.886H5.8V9.857h1.498C8.009 7.678 9.793 6.3 12.073 6.3c1.368 0 2.416.338 3.183.903.468.345.738.695.874 1.026v1.2h-1.467l-.045-.138c-.05-.15-.191-.391-.46-.636-.458-.417-1.123-.67-2.043-.67-1.27 0-2.257.687-2.788 1.872h4.903l-.683 1.566-.184.12H8.936a5.196 5.196 0 00.006.886h4.18l-.683 1.565-.184.12h-2.9z' />
        </svg>
    );
};

CurrencyEur.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CurrencyEur.displayName = 'CurrencyEur';
export default CurrencyEur;
