import React, { SVGAttributes } from 'react';

export interface CurrencyTransferProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CurrencyTransfer: React.FC<CurrencyTransferProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a1 1 0 01-1-1v-8H3a1 1 0 01-1-1zm4.029-1H4.062a7.997 7.997 0 013.383-5.577C6.655 6.955 6.15 8.892 6.029 11zm3.31-4.878c.516-.93 1.093-1.526 1.661-1.842V11H8.033c.126-1.935.615-3.635 1.306-4.878zM13 19.72V13h2.967c-.126 1.935-.615 3.634-1.306 4.878-.516.93-1.093 1.526-1.661 1.842zM13 11h2.967c-.126-1.935-.615-3.635-1.306-4.878-.516-.93-1.093-1.526-1.661-1.842V11zm3.555-5.577c.79 1.532 1.294 3.469 1.416 5.577h1.967a7.997 7.997 0 00-3.383-5.577zm0 13.154c.79-1.532 1.294-3.469 1.416-5.577h1.967a7.997 7.997 0 01-3.383 5.577z'
                clipRule='evenodd'
            />
            <path d='M8.707 19.707l-4 4-1.414-1.414L5.586 20H0v-2h5.586l-2.293-2.293 1.414-1.414 4 4a1 1 0 010 1.414z' />
        </svg>
    );
};

CurrencyTransfer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CurrencyTransfer.displayName = 'CurrencyTransfer';
export default CurrencyTransfer;
