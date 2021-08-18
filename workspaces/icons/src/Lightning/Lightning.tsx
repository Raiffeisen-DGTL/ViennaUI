import React, { SVGAttributes } from 'react';

export interface LightningProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Lightning: React.FC<LightningProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.042 2.713A1 1 0 018 2h9a1 1 0 01.894 1.447L15.618 8H20a1 1 0 01.763 1.646l-11 13a1 1 0 01-1.757-.756L8.883 14H5a1 1 0 01-.958-1.287l3-10zM8.744 4l-2.4 8H10a1 1 0 01.994 1.11l-.638 5.739L17.844 10H14a1 1 0 01-.894-1.447L15.382 4H8.744z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Lightning.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Lightning.displayName = 'Lightning';
export default Lightning;
