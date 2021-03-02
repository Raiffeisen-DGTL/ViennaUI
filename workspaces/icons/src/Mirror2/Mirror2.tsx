import React, { SVGAttributes } from 'react';

export interface Mirror2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mirror2: React.FC<Mirror2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15.707 12.207l-3 3-1.414-1.414 3-3 1.414 1.414zm-1-4L9.05 13.864 7.636 12.45l5.657-5.657 1.414 1.414z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M4 10a8 8 0 1116 0v12h-2v-2H6v2H4V10zm2 8h12v-8a6 6 0 00-12 0v8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Mirror2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mirror2.displayName = 'Mirror2';
export default Mirror2;
