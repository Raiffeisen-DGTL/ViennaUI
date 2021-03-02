import React, { SVGAttributes } from 'react';

export interface FrameProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Frame: React.FC<FrameProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 2h3v1h2V2h2v1h2V2h2v1h2V2h3v3h-1v2h1v2h-1v2h1v2h-1v2h1v2h-1v2h1v3h-3v-1h-2v1h-2v-1h-2v1H9v-1H7v1H4v-3h1v-2H4v-2h1v-2H4v-2h1V9H4V7h1V5H4V2zm3 3v14h10V5H7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Frame.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Frame.displayName = 'Frame';
export default Frame;
