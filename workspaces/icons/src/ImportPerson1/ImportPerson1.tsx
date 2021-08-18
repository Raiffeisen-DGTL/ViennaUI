import React, { SVGAttributes } from 'react';

export interface ImportPerson1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ImportPerson1: React.FC<ImportPerson1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 2a5 5 0 100 10 5 5 0 000-10zM8 7a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
            <path d='M11.5 13C6.09 13 3 17.598 3 22h2c0-3.598 2.473-7 6.5-7 1.26 0 2.339.323 3.236.859l1.025-1.718C14.55 13.42 13.115 13 11.5 13zm6.5 6.586V13h2v6.586l1.793-1.793 1.414 1.414-3.5 3.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414L18 19.586z' />
        </svg>
    );
};

ImportPerson1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ImportPerson1.displayName = 'ImportPerson1';
export default ImportPerson1;
