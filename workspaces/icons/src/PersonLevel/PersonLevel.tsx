import React, { SVGAttributes } from 'react';

export interface PersonLevelProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PersonLevel: React.FC<PersonLevelProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 7a5 5 0 1110 0A5 5 0 014 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M1 22c0-4.402 3.09-9 8.5-9 1.12 0 2.157.201 3.094.57l-.73 1.86A6.426 6.426 0 009.5 15C5.473 15 3 18.402 3 22H1z' />
            <path
                fillRule='evenodd'
                d='M15 15a1 1 0 00-.832.445l-1 1.5a1 1 0 00.125 1.262l4 4a1 1 0 001.414 0l4-4a1 1 0 00.125-1.262l-1-1.5A1 1 0 0021 15h-6zm.287 2.373l.248-.373h4.93l.248.373L18 20.086l-2.713-2.713z'
                clipRule='evenodd'
            />
        </svg>
    );
};

PersonLevel.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PersonLevel.displayName = 'PersonLevel';
export default PersonLevel;
