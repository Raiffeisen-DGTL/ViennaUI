import React, { SVGAttributes } from 'react';

export interface BabyCareProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BabyCare: React.FC<BabyCareProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.483 15.063L22.8 21h-2.047l-1.223-5.5a1.923 1.923 0 00-1.866-1.5H13v-2h4.664a3.937 3.937 0 013.819 3.063zm-7.847 4.786L14.173 22h-2.061l-.412-1.666A1.761 1.761 0 009.985 19H7c-.81 0-1.515.55-1.711 1.336L4.873 22h-2.06l.537-2.15A3.758 3.758 0 017 17h2.985a3.758 3.758 0 013.651 2.849zM16 3.8A2.2 2.2 0 0013.8 6v1a2.2 2.2 0 004.4 0V6A2.2 2.2 0 0016 3.8zM16 2a4.012 4.012 0 014 4v1a4 4 0 11-8 0V6a4.012 4.012 0 014-4zM8.5 9.811a1.836 1.836 0 00-1.833 1.835v.832a1.833 1.833 0 003.666 0v-.832c0-1.012-.82-1.833-1.833-1.835zm0-1.687v.001a3.51 3.51 0 013.5 3.5v.875a3.5 3.5 0 01-7 0v-.876a3.51 3.51 0 013.5-3.5z' />
        </svg>
    );
};

BabyCare.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BabyCare.displayName = 'BabyCare';
export default BabyCare;
