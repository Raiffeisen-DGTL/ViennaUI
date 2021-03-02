import React, { SVGAttributes } from 'react';

export interface PencilProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pencil: React.FC<PencilProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.343 4.178l-1.594-1.594a2 2 0 00-2.82 0L2 17.51v4.416h4.414L21.343 7a1.994 1.994 0 000-2.822zM5.586 19.926H4v-1.588L14.571 7.77l1.586 1.585L5.586 19.926zM17.43 8.083L15.844 6.5 18.339 4l1.586 1.586-2.495 2.497z' />
        </svg>
    );
};

Pencil.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pencil.displayName = 'Pencil';
export default Pencil;
