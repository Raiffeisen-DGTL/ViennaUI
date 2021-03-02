import React, { SVGAttributes } from 'react';

export interface RewindRight2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RewindRight2: React.FC<RewindRight2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 4.414V3h1.414l9 9-9 9H10v-1.414L17.585 12 10 4.414zm-6 0V3h1.414l9 9-9 9H4v-1.414L11.586 12 4 4.414z' />
        </svg>
    );
};

RewindRight2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RewindRight2.displayName = 'RewindRight2';
export default RewindRight2;
