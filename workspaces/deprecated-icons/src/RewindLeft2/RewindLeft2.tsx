import React, { SVGAttributes } from 'react';

export interface RewindLeft2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RewindLeft2: React.FC<RewindLeft2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 3v1.414L7.415 12 15 19.586V21h-1.414l-9-9 9-9H15zm5.999 0v1.414L13.414 12l7.585 7.586V21h-1.413l-9-9 9-9h1.413z' />
        </svg>
    );
};

RewindLeft2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RewindLeft2.displayName = 'RewindLeft2';
export default RewindLeft2;
