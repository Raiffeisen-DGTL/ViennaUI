import React, { SVGAttributes } from 'react';

export interface ChairProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Chair: React.FC<ChairProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.82 11L6.98 1.804l-1.96.392L6.98 12l-1.96 9.804 1.96.392L7.82 18h8.36l.84 4.196 1.96-.392L17.22 13H19v-2H8.82zm6.36 2H8.82l-.6 3h7.56l-.6-3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Chair.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Chair.displayName = 'Chair';
export default Chair;
