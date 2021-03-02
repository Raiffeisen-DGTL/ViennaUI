import React, { SVGAttributes } from 'react';

export interface WorldCopyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WorldCopy: React.FC<WorldCopyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0012 2zm8.133 9h-2.262a13.413 13.413 0 00-1.684-6.037A8.2 8.2 0 0120.133 11zM11 4.176V11H7.945C8.166 7.5 9.507 4.973 11 4.176zm2 0c1.493.8 2.833 3.32 3.055 6.824H13V4.176zm-5.187.787A13.413 13.413 0 006.129 11H3.867a8.2 8.2 0 013.946-6.037zM20.133 13a8.207 8.207 0 01-3.951 6.041A12.824 12.824 0 0017.784 14h-1.827c-.391 2.979-1.611 5.105-2.957 5.824V14h-2v5.824C9.654 19.105 8.434 16.979 8.042 14H6.216c.177 1.773.722 3.49 1.6 5.041A8.207 8.207 0 013.867 13h16.266z' />
        </svg>
    );
};

WorldCopy.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WorldCopy.displayName = 'WorldCopy';
export default WorldCopy;
