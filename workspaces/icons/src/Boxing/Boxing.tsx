import React, { SVGAttributes } from 'react';

export interface BoxingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Boxing: React.FC<BoxingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.126 7C6.57 5.275 8.136 4 10 4h3.667c1.034 0 1.911.673 2.217 1.605A4 4 0 0122 9v7a4 4 0 01-4 4h-.009c-1.113 0-3.902 0-6.425-.255-1.255-.127-2.509-.323-3.471-.639-.477-.156-.954-.364-1.33-.659A2.233 2.233 0 016.33 18H3a1 1 0 01-1-1V8a1 1 0 011-1h3.126zM8 8a2 2 0 012-2h3.667c.184 0 .333.15.333.333V11h-1a1 1 0 01-1-1V8h-2v2a3 3 0 003 3h1v3c0 .704.182 1.365.5 1.94a46.197 46.197 0 01-2.733-.185c-1.217-.123-2.297-.302-3.05-.549-.378-.124-.604-.244-.717-.332V8zm8 1v7a2 2 0 104 0V9a2 2 0 10-4 0zM4 16V9h2v7H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Boxing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Boxing.displayName = 'Boxing';
export default Boxing;
