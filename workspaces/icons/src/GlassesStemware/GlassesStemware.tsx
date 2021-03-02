import React, { SVGAttributes } from 'react';

export interface GlassesStemwareProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GlassesStemware: React.FC<GlassesStemwareProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.707 2.371a1 1 0 01.759-.1l5.536 1.484 2.739-.72 2.789-.762a1 1 0 011.229.705l1.812 6.762a5.002 5.002 0 01-2.596 5.768l.803 2.995 2.897-.777.518 1.932-7.727 2.07-.518-1.931 2.898-.777-.803-2.994a4.987 4.987 0 01-2.479-.49l.872-1.8a3 3 0 004.203-3.478l-1.552-5.791-1.832.5-.352.093a.995.995 0 01-.003.507l-1.812 6.761a5.002 5.002 0 01-5.131 3.698l-.803 2.994 2.898.777-.518 1.932-7.727-2.071.518-1.932 2.897.777.803-2.995A5.002 5.002 0 013.429 9.74l1.812-6.762a1 1 0 01.466-.607zm7.003 3.644L6.913 4.462 5.36 10.258a3 3 0 105.796 1.553l1.553-5.796z'
                clipRule='evenodd'
            />
        </svg>
    );
};

GlassesStemware.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GlassesStemware.displayName = 'GlassesStemware';
export default GlassesStemware;
