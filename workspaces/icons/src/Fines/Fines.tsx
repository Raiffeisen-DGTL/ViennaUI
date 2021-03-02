import React, { SVGAttributes } from 'react';

export interface FinesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fines: React.FC<FinesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M20.121 2.707a3 3 0 00-4.242 0L5.707 12.88a3.001 3.001 0 00-.529 3.529l-1.034 1.034A2.67 2.67 0 006.032 22h10.14a3 3 0 002.12-.879l.253-.252a2.644 2.644 0 00-3.052-4.234L8.763 20h-2.73a.67.67 0 01-.475-1.144l1.034-1.034a3.001 3.001 0 003.53-.53l10.17-10.17a3 3 0 000-4.243l-.17-.172zm-2.828 1.414a1 1 0 011.414 0l.172.172a1 1 0 010 1.414L18 6.586 16.414 5l.879-.879zM15 6.414L16.586 8 15 9.586 13.414 8 15 6.414zm-3 3L13.586 11 12 12.586 10.414 11 12 9.414zm-3 3L10.586 14l-1.879 1.879a1 1 0 01-1.414 0l-.172-.172a1 1 0 010-1.414L9 12.414zM16.172 20h-2.936l3.151-1.576a.644.644 0 01.744 1.031l-.252.252a1 1 0 01-.707.293z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Fines.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fines.displayName = 'Fines';
export default Fines;
