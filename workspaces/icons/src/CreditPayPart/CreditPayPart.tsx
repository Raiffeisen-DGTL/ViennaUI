import React, { SVGAttributes } from 'react';

export interface CreditPayPartProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditPayPart: React.FC<CreditPayPartProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3.339 6.998a10.044 10.044 0 013.66-3.66L8 5.07A8.044 8.044 0 005.07 8L3.339 6.998zM2.338 9.412A10.012 10.012 0 002 12c0 .894.118 1.762.338 2.588l1.933-.516A8.013 8.013 0 014 12c0-.718.094-1.412.27-2.072l-1.93-.516zm1.001 7.59a10.044 10.044 0 003.66 3.66L8 18.93A8.044 8.044 0 015.07 16l-1.731 1.002zm17.322 0a10.043 10.043 0 01-3.66 3.66L16 18.93A8.044 8.044 0 0018.93 16l1.731 1.002zm-11.249 4.66a10.046 10.046 0 005.176 0l-.516-1.933A8.01 8.01 0 0112 20a8.01 8.01 0 01-2.072-.27l-.516 1.931zM10.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-5.793-.293l7-7-1.414-1.414-7 7 1.414 1.414z' />
            <path d='M9.412 2.338A10.012 10.012 0 0112 2c.894 0 1.762.118 2.588.338.85.228 1.66.568 2.413 1.002A10.03 10.03 0 0120.661 7h-.001c.438.759.774 1.57 1 2.413h.002c.215.805.332 1.65.338 2.52V12c0 .894-.117 1.762-.338 2.588l-1.933-.516A8.01 8.01 0 0020 12v-.057a8 8 0 00-5.93-7.67l.001-.003A8.012 8.012 0 0012 4c-.718 0-1.412.094-2.072.27l-.516-1.93z' />
        </svg>
    );
};

CreditPayPart.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditPayPart.displayName = 'CreditPayPart';
export default CreditPayPart;
