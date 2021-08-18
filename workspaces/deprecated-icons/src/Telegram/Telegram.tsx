import React, { SVGAttributes } from 'react';

export interface TelegramProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Telegram: React.FC<TelegramProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fill='#2B2D33'
                fillRule='evenodd'
                d='M19.532 3.071c1.497-.408 2.849 1.01 2.37 2.487l-4.567 14.091c-.491 1.514-2.49 1.836-3.43.552l-3.667-5.003a1.954 1.954 0 01.05-2.375l1.193-1.492-3.109 1.11a1.95 1.95 0 01-1.274.014L3.335 11.2c-1.832-.611-1.76-3.228.103-3.737l16.094-4.392zm.514 1.884L3.952 9.347l3.764 1.256L17.3 7.177l-5.49 6.866 3.667 5.004 4.568-14.092z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Telegram.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Telegram.displayName = 'Telegram';
export default Telegram;
