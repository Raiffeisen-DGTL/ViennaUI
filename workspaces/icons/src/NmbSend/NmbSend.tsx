import React, { SVGAttributes } from 'react';

export interface NmbSendProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const NmbSend: React.FC<NmbSendProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.707 6.707l-3.5 3.5-1.414-1.414L18.586 7H2V5h16.586l-1.793-1.793 1.414-1.414 3.5 3.5a1 1 0 010 1.414zM4.653 12.062a1 1 0 011.106.287L10 17.297V12h2v8a1 1 0 01-1.76.65L6 15.704V21H4v-8a1 1 0 01.653-.938z' />
            <path
                fillRule='evenodd'
                d='M14 15a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
            <path d='M20 21h-6v-2h6v2z' />
        </svg>
    );
};

NmbSend.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

NmbSend.displayName = 'NmbSend';
export default NmbSend;
