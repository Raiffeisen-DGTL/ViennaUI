import React, { SVGAttributes } from 'react';

export interface DownProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Down: React.FC<DownProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 2h-2v16.485l-5.551-5.832L4 14.03l7.289 7.658a1 1 0 001.447.001l7.305-7.658-1.447-1.38L13 18.516V2z' />
        </svg>
    );
};

Down.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Down.displayName = 'Down';
export default Down;
