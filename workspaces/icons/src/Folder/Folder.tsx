import React, { SVGAttributes } from 'react';

export interface FolderProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Folder: React.FC<FolderProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 5a1 1 0 011-1h7a1 1 0 01.894.553L11.618 6H21a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2 1v12h16V8h-9a1 1 0 01-.894-.553L9.382 6H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Folder.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Folder.displayName = 'Folder';
export default Folder;
