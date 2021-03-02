import React, { SVGAttributes } from 'react';

export interface ArtAndLiteratureProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArtAndLiterature: React.FC<ArtAndLiteratureProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.958 4A3.934 3.934 0 0012 5.355 3.933 3.933 0 009.042 4H2v13.959A2.041 2.041 0 004.042 20H10v-2H4V6h5.042C10.124 6 11 6.877 11 7.959V20h8.958A2.041 2.041 0 0022 17.959V4h-7.042zM20 18h-7V7.958A1.96 1.96 0 0114.958 6H20v12z' />
        </svg>
    );
};

ArtAndLiterature.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArtAndLiterature.displayName = 'ArtAndLiterature';
export default ArtAndLiterature;
