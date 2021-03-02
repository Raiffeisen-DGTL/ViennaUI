import React, { SVGAttributes } from 'react';

export interface HandMoney2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HandMoney2: React.FC<HandMoney2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 10h3v2h-3v-2zm6-6v11h-2.044L16 22h-2l3.784-7H10l-.635-6H8v8c0 1.906.9 3 2 3v2c-2.206 0-4-1.875-4-5V9.156A2.156 2.156 0 018.156 7h1.052c1.19 0 2.156.965 2.157 2.156L11.783 13H20V6H4v7h1v2H2V4h12.76c.09-.369.2-.814.246-.969.311-1.038.823-1.838 1.838-1.838h1.218c.946 0 1.713.767 1.713 1.713V4H22zm-5.194-1.006L16.57 4h1.405V2.994h-1.169z' />
        </svg>
    );
};

HandMoney2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HandMoney2.displayName = 'HandMoney2';
export default HandMoney2;
