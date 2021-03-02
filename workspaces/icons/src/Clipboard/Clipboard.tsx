import React, { SVGAttributes } from 'react';

export interface ClipboardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clipboard: React.FC<ClipboardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10 4V2H8v2H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-3V2h-2v2h-4zm4 4V6h-4v2H8V6H6v14h12V6h-2v2h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Clipboard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clipboard.displayName = 'Clipboard';
export default Clipboard;
