import React, { SVGAttributes } from 'react';

export interface CupProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cup: React.FC<CupProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 22H4v-2h14v2zM4 7v6.4c0 1.04.244 2.138.799 3.011C5.37 17.312 6.304 18 7.57 18h6.858c1.267 0 2.2-.688 2.772-1.589.284-.446.486-.951.616-1.477A5.001 5.001 0 0022 10a3 3 0 00-3-3H4zm14 2v3.83A3.001 3.001 0 0020 10a1 1 0 00-1-1h-1zM6 13.4V9h10v4.4c0 .76-.184 1.462-.487 1.939-.285.449-.638.661-1.084.661H7.57c-.446 0-.799-.212-1.084-.661C6.184 14.862 6 14.16 6 13.4zM8 2v3H6V2h2zm4 0v3h-2V2h2zm4 0v3h-2V2h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cup.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cup.displayName = 'Cup';
export default Cup;
