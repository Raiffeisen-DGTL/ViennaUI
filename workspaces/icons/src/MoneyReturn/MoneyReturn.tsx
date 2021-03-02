import React, { SVGAttributes } from 'react';

export interface MoneyReturnProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoneyReturn: React.FC<MoneyReturnProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.707 3.707L4.414 5H22a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1v-9h2v4a4 4 0 014 4h10a4 4 0 014-4v-4a4 4 0 01-4-4H4.414l1.293 1.293-1.414 1.414-3-3a1 1 0 010-1.414l3-3 1.414 1.414zm-.86 14.528A2 2 0 015 19H3v-2a2 2 0 011.848 1.235zM21 17a2 2 0 00-2 2h2v-2zm0-10v2a2 2 0 01-2-2h2z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M7 13c0 1.214.658 2.236 1.572 2.921C9.485 16.606 10.7 17 12 17c1.3 0 2.515-.394 3.428-1.079C16.342 15.236 17 14.214 17 13c0-1.214-.658-2.236-1.572-2.921C14.515 9.394 13.3 9 12 9c-1.3 0-2.515.394-3.428 1.079C7.658 10.764 7 11.786 7 13zm5 2c-.91 0-1.694-.278-2.228-.679C9.237 13.921 9 13.443 9 13c0-.443.237-.92.772-1.321C10.306 11.278 11.09 11 12 11c.91 0 1.694.278 2.228.679.535.4.772.878.772 1.321 0 .443-.237.92-.772 1.321-.534.401-1.319.679-2.228.679z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MoneyReturn.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoneyReturn.displayName = 'MoneyReturn';
export default MoneyReturn;
