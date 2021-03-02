import React, { SVGAttributes } from 'react';

export interface Inn1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Inn1: React.FC<Inn1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.293 7.207l7-7-1.414-1.414-7 7 1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M2 4h2v17a1 1 0 001 1h1a.999.999 0 00.447-.106L8 21.118l1.553.776a1 1 0 00.894 0L12 21.118l1.553.776a1 1 0 00.894 0L16 21.118l1.553.776c.139.07.292.106.447.106h1a1 1 0 001-1V4h2V2H2v2zm16 15.882V4H6v15.882l1.553-.776a1 1 0 01.894 0l1.553.776 1.553-.776a1 1 0 01.894 0l1.553.776 1.553-.776a1 1 0 01.894 0l1.553.776z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Inn1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Inn1.displayName = 'Inn1';
export default Inn1;
