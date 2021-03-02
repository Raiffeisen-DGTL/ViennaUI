import React, { SVGAttributes } from 'react';

export interface WindowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Window: React.FC<WindowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 2v2h1v17a1 1 0 001 1h4a1 1 0 001-1v-1h6v1a1 1 0 001 1h4a1 1 0 001-1V4h1V2H2zm13 16v-1.228a3.584 3.584 0 01-1.03-.751c-.525-.534-.983-1.25-1.368-2.035l1.796-.88c.33.672.675 1.184.998 1.513.335.34.54.381.604.381h3V4h-6v3c0 2.144-.531 4.528-1.33 6.394-.4.932-.888 1.786-1.451 2.424-.332.375-.74.733-1.219.954V18h6zM11 4H5v11h3c.075 0 .324-.058.719-.505.374-.425.761-1.071 1.112-1.889C10.53 10.972 11 8.856 11 7V4zM7 17v3H5v-3h2zm10 3v-3h2v3h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Window.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Window.displayName = 'Window';
export default Window;
