import React, { SVGAttributes } from 'react';

export interface MoneyDropProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoneyDrop: React.FC<MoneyDropProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.728 10.75a7 7 0 0110.737-5.92l1.07-1.69a9 9 0 00-13.807 7.61c0 3.446 2.282 6.2 4.342 8.003a22.686 22.686 0 004.103 2.836l.076.04.022.01.006.004.003.001c.282.14.614.141.896 0l.003-.001.006-.003.02-.01.07-.037.255-.137a22.925 22.925 0 003.617-2.497l-1.293-1.526a20.94 20.94 0 01-3.126 2.18 20.692 20.692 0 01-3.341-2.365c-1.94-1.698-3.659-3.944-3.659-6.498z'
                clipRule='evenodd'
            />
            <path d='M16.324 7.182a6.499 6.499 0 010 9.192L14.91 14.96a4.501 4.501 0 000-6.364l1.414-1.414z' />
            <path d='M18.799 4.657a9.999 9.999 0 010 14.142l-1.414-1.414a8 8 0 000-11.314l1.414-1.414zm-4.089 7.118a3.023 3.023 0 01-.885 2.112l-2.137-2.137 2.172-2.102c.552.57.857 1.334.85 2.127z' />
        </svg>
    );
};

MoneyDrop.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoneyDrop.displayName = 'MoneyDrop';
export default MoneyDrop;
