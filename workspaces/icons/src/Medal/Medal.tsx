import React, { SVGAttributes } from 'react';

export interface MedalProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Medal: React.FC<MedalProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 10h-2v2h1v4h-1v2h4v-2h-1v-5a1 1 0 00-1-1z' />
            <path
                fillRule='evenodd'
                d='M7.293 2.707l3.4 3.4a8 8 0 102.616 0l3.398-3.4-1.414-1.414L12 4.586 8.707 1.293 7.293 2.707zM12 8a6 6 0 100 12 6 6 0 000-12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Medal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Medal.displayName = 'Medal';
export default Medal;
