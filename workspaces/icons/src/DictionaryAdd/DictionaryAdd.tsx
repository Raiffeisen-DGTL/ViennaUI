import React, { SVGAttributes } from 'react';

export interface DictionaryAddProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DictionaryAdd: React.FC<DictionaryAddProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 14V3h7.042A3.933 3.933 0 0113 4.355 3.934 3.934 0 0115.958 3H23v13.959A2.041 2.041 0 0120.958 19H12V6.959A1.959 1.959 0 0010.042 5H5v8H3v1h2v3h3v2h1v-2h3v2H5v3H3v-3H0v-2h3v-3zm18 3V5h-5.042A1.96 1.96 0 0014 6.958V17h7z' />
        </svg>
    );
};

DictionaryAdd.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DictionaryAdd.displayName = 'DictionaryAdd';
export default DictionaryAdd;
