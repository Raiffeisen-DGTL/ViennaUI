import React, { SVGAttributes } from 'react';

export interface NotificationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Notification: React.FC<NotificationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19 9A7 7 0 105 9v2.586l-1.293 1.293a3 3 0 000 4.242l.586.586A1 1 0 005 18h3a4 4 0 108 0h3a1 1 0 00.707-.293l.586-.586a3 3 0 000-4.242L19 11.586V9zM7 12V9a5 5 0 0110 0v3a1 1 0 00.293.707l1.585 1.586a1 1 0 010 1.414l-.293.293H5.415l-.293-.293a1 1 0 010-1.414l1.586-1.586A1 1 0 007 12zm3 6a2 2 0 004 0h-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Notification.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Notification.displayName = 'Notification';
export default Notification;
