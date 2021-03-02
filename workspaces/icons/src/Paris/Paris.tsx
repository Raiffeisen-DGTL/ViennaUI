import React, { SVGAttributes } from 'react';

export interface ParisProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Paris: React.FC<ParisProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 3h-1v2h1v.838L8.28 14H6v2h1.21l-3.062 4.976A1 1 0 004 21.5v.5h1.813l.039.024.014-.024H6v-.217L9.559 16h4.882L18 21.783V22h.134l.014.024.04-.024H20v-.5a1 1 0 00-.148-.524L16.79 16H18v-2h-2.28L13 5.838V5h1V3h-1V1h-2v2zm2.613 11L12 9.162 10.387 14h3.226z'
                clipRule='evenodd'
            />
            <path d='M10.47 18.305A4 4 0 0116 22h-2a2 2 0 10-4 0H8a4 4 0 012.47-3.695z' />
        </svg>
    );
};

Paris.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Paris.displayName = 'Paris';
export default Paris;
