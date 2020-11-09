import React, { SVGAttributes } from 'react';

export interface PictureProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Picture: React.FC<PictureProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.875 6H4.125A.126.126 0 004 6.125v11.75c0 .069.056.124.125.125h15.75a.126.126 0 00.125-.125V6.125A.126.126 0 0019.875 6zm0-2A2.124 2.124 0 0122 6.125v11.75A2.124 2.124 0 0119.875 20H4.125A2.124 2.124 0 012 17.875V6.125A2.124 2.124 0 014.125 4h15.75zM7.5 8.7a.8.8 0 100 1.6.8.8 0 000-1.6zm0-1.7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm11.5.727v2.546l-6 5.999-2-2L8.273 17H5.727L11 11.728l2 2 6-6.001z' />
        </svg>
    );
};

Picture.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Picture.displayName = 'Picture';
export default Picture;
