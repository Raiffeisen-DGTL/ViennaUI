import React, { SVGAttributes } from 'react';

export interface MountainsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mountains: React.FC<MountainsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.388 12.845L4.682 18H2.218l6.025-8.38 2.162 2.5L14.5 4.992 21.972 18h-2.306L14.5 9.008l-3.765 6.552-2.347-2.715zM2 19h20v2H2v-2z' />
        </svg>
    );
};

Mountains.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mountains.displayName = 'Mountains';
export default Mountains;
