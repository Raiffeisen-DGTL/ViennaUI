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
            <path
                fillRule='evenodd'
                d='M2 5a1 1 0 011-1h5.764A4.62 4.62 0 0112 5.323 4.618 4.618 0 0115.236 4H21a1 1 0 011 1v13a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm9 2.256A2.618 2.618 0 008.764 6H4v12h7V7.256zM13 18h7V6h-4.764c-.918 0-1.764.48-2.236 1.256V18z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ArtAndLiterature.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArtAndLiterature.displayName = 'ArtAndLiterature';
export default ArtAndLiterature;
