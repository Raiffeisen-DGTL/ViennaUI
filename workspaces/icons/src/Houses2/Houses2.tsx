import React, { SVGAttributes } from 'react';

export interface Houses2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Houses2: React.FC<Houses2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 18h2v5H4v-5h2v3h4v-3zm-2-7.28l6 6.005V18h-1.27L8 13.267 3.27 18H2v-1.276l6-6.004zM18 10h2v5h-5l-2-2h5v-3zm-2-7.28l6 6.005V10h-1.27L16 5.267 11.27 10H10V8.724l6-6.004z' />
        </svg>
    );
};

Houses2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Houses2.displayName = 'Houses2';
export default Houses2;
