import React, { SVGAttributes } from 'react';

export interface InProgressRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InProgressRing: React.FC<InProgressRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 6.5a1 1 0 00-1 1v2a1 1 0 00.293.707L10.086 12l-1.793 1.793A1 1 0 008 14.5v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-.293-.707L13.914 12l1.793-1.793A1 1 0 0016 9.5v-2a1 1 0 00-1-1H9zm1 8.414l2-2 2 2v.586h-4v-.586zm0-5.828l2 2 2-2V8.5h-4v.586z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InProgressRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InProgressRing.displayName = 'InProgressRing';
export default InProgressRing;
