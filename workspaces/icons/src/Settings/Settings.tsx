import React, { SVGAttributes } from 'react';

export interface SettingsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Settings: React.FC<SettingsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.5 12v-.5l2.6-1.9-.1-.7c0-.1-.2-1-.9-2.2-.7-1.2-1.3-1.7-1.4-1.8l-.5-.4-3 1.3c-.3-.2-.6-.4-.9-.5L14.9 2l-.6-.2c-.1 0-1-.3-2.3-.3-1.3 0-2.2.3-2.3.3l-.6.2-.4 3.3c-.3.1-.6.3-.9.5l-3-1.3-.5.4c-.1.1-.7.7-1.4 1.9-.6 1.1-.9 2-.9 2.1l-.1.6 2.6 1.9v1l-2.6 1.9.1.8c0 .1.2 1 .9 2.2.7 1.1 1.3 1.8 1.4 1.8l.5.4 3-1.3c.3.2.6.4.9.5l.4 3.3.6.2c.1 0 1 .3 2.3.3 1.3 0 2.2-.3 2.3-.3l.6-.2.4-3.2c.3-.2.6-.3.9-.5l3 1.3.5-.4c.1-.1.8-.7 1.4-1.8.6-1.1.9-2 .9-2.2l.1-.6-2.6-1.9V12zm.3 3.3c-.1.3-.3.6-.5 1s-.4.7-.6.9L15.9 16l-.5.4c-.4.4-.9.6-1.5.8l-.6.2-.3 3.1c-.6.1-1.6.1-2.2 0l-.3-3.1-.5-.3c-.5-.2-1-.5-1.5-.8l-.5-.4-2.8 1.2c-.2-.2-.4-.5-.6-.9-.2-.4-.4-.7-.5-1l2.5-1.8-.1-.6c0-.3-.1-.6-.1-.8 0-.2 0-.6.1-.8l.1-.6-2.4-1.9c.1-.3.3-.6.5-1s.4-.7.6-.9L8.1 8l.5-.4c.4-.2.9-.5 1.4-.7l.6-.2.3-3.1c.6-.1 1.6-.1 2.2 0l.3 3.1.6.2c.5.2 1 .5 1.5.8l.5.4 2.8-1.2c.2.2.4.5.6.9.2.4.4.7.5 1l-2.5 1.8.1.6c0 .3.1.6.1.8 0 .2 0 .6-.1.8l-.1.6 2.4 1.9z' />
            <path d='M12 14a2 2 0 100-4 2 2 0 000 4z' />
        </svg>
    );
};

Settings.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Settings.displayName = 'Settings';
export default Settings;
