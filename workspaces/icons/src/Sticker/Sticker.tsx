import React, { SVGAttributes } from 'react';

export interface StickerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sticker: React.FC<StickerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a10 10 0 1010 10v-.086a2 2 0 00-.586-1.414L13.5 2.586A2 2 0 0012.086 2H12zm0 2a7.999 7.999 0 008 8v-.086L12.086 4H12zm4.173 9.239a10 10 0 003.574.758 8 8 0 11-9.744-9.744 10.001 10.001 0 006.17 8.986z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Sticker.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sticker.displayName = 'Sticker';
export default Sticker;
