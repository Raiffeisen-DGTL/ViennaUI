import React, { SVGAttributes } from 'react';

export interface ArchiveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Archive: React.FC<ArchiveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3.076 4a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1h-16a1 1 0 01-1-1V4zm2 1v2h14V5h-14z'
                clipRule='evenodd'
            />
            <path d='M5.076 19v-8h-2v9a1 1 0 001 1h16a1 1 0 001-1v-9h-2v8h-14z' />
            <path d='M15.076 11h-6v2h6v-2z' />
        </svg>
    );
};

Archive.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Archive.displayName = 'Archive';
export default Archive;
