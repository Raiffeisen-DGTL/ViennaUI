import React, { SVGAttributes } from 'react';

export interface SportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sport: React.FC<SportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c-.006-5.52-4.48-9.994-10-10zm7.931 9h-3.863a7.955 7.955 0 011.937-4.269A7.963 7.963 0 0119.931 11zM13 11V4.069a7.944 7.944 0 013.509 1.329 9.955 9.955 0 00-2.455 5.6L13 11zm-3.053 0a9.949 9.949 0 00-2.456-5.6A7.948 7.948 0 0111 4.069V11H9.947zM6 6.731A7.954 7.954 0 017.936 11H4.07A7.956 7.956 0 016 6.731zM4.07 13H11v6.931a7.952 7.952 0 01-3.516-1.333 9.953 9.953 0 002.308-4.6H7.737a7.985 7.985 0 01-1.746 3.264A7.949 7.949 0 014.07 13zm13.939 4.264A7.985 7.985 0 0116.263 14h-2.055a9.955 9.955 0 002.309 4.6A7.956 7.956 0 0113 19.931V13h6.931a7.957 7.957 0 01-1.922 4.264z' />
        </svg>
    );
};

Sport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sport.displayName = 'Sport';
export default Sport;
