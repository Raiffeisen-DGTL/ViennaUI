import React, { SVGAttributes } from 'react';

export interface FlasherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Flasher: React.FC<FlasherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 4V0h2v4h-2z' />
            <path
                fillRule='evenodd'
                d='M19.976 16.78L17.98 6.804A1 1 0 0017 6H7a1 1 0 00-.98.804L4.023 16.78l-.994 3.977A1 1 0 004 22h16a1 1 0 00.97-1.242l-.994-3.977zM13 16h4.78l-1.6-8H7.82l-1.6 8H11v-4h2v4zm5.22 2H5.78l-.5 2h13.44l-.5-2z'
                clipRule='evenodd'
            />
            <path d='M0 7h4v2H0V7zm24 0h-4v2h4V7zM19.293.293l-3 3 1.414 1.414 3-3L19.293.293zm-13 4.414l-3-3L4.707.293l3 3-1.414 1.414z' />
        </svg>
    );
};

Flasher.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Flasher.displayName = 'Flasher';
export default Flasher;
