import React, { SVGAttributes } from 'react';

export interface ConcreteMixerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ConcreteMixer: React.FC<ConcreteMixerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 9a4 4 0 014 4v4a2 2 0 01-2 2h-1a2 2 0 11-4 0H9a2 2 0 11-4 0h-.06A1.94 1.94 0 013 17.06V13h2v4h16v-4a2 2 0 00-2-2h-1v4h-2V9h3zM6.63 13.64A28.06 28.06 0 013 8.07l-.86-1.53 4.32-4.32L8 3.07a27.85 27.85 0 015.56 3.64 4.9 4.9 0 11-6.93 6.93zM6.8 4.7L4.63 6.88l.12.21c.77 1.37 1.47 2.62 2.13 3.62l2.85-2.83 1.41 1.41-3 3a3 3 0 004-.07 2.9 2.9 0 000-4.1A27.24 27.24 0 007 4.82l-.2-.12z' />
        </svg>
    );
};

ConcreteMixer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ConcreteMixer.displayName = 'ConcreteMixer';
export default ConcreteMixer;
