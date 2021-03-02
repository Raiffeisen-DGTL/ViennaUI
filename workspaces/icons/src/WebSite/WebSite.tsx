import React, { SVGAttributes } from 'react';

export interface WebSiteProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WebSite: React.FC<WebSiteProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm7.938-9h-3.97a39.901 39.901 0 01-.805 6.35A8.008 8.008 0 0019.938 13zm-6.95 6.94l.037-.16c.53-2.346.843-4.606.941-6.78h-3.932c.098 2.175.411 4.434.941 6.78l.037.16a8.06 8.06 0 001.976 0zm-4.151-.59A8.008 8.008 0 014.062 13h3.97a39.9 39.9 0 00.805 6.35zM19.938 11a8.008 8.008 0 00-4.725-6.329c.487 1.988.747 4.098.783 6.329h3.942zm-6.961-6.941a8.08 8.08 0 00-1.954 0l-.062.217c-.596 2.078-.916 4.318-.957 6.724h3.992c-.041-2.406-.36-4.646-.957-6.724l-.063-.217zm-4.19.612C8.3 6.66 8.04 8.77 8.004 11H4.062a8.008 8.008 0 014.725-6.329z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WebSite.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WebSite.displayName = 'WebSite';
export default WebSite;
