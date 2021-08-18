import React, { SVGAttributes } from 'react';

export interface EditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Edit: React.FC<EditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.707 3.293l4 4a1 1 0 010 1.414l-11 11a1 1 0 01-.51.274l-5 1a1 1 0 01-1.178-1.177l1-5a1 1 0 01.274-.511l11-11a1 1 0 011.414 0zM13.5 7.914l-7.578 7.579-.646 3.232 3.232-.646 7.579-7.579L13.5 7.914zm2.5-2.5L14.915 6.5 17.5 9.085 18.585 8 16 5.414z' />
        </svg>
    );
};

Edit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Edit.displayName = 'Edit';
export default Edit;
