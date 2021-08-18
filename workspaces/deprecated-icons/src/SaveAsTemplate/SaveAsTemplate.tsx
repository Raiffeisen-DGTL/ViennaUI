import React, { SVGAttributes } from 'react';

export interface SaveAsTemplateProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SaveAsTemplate: React.FC<SaveAsTemplateProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 7h2v4h-2V7zm.006-5C21.107 2 22 2.893 22 3.994V6h-2V4h-3V2h3.006zM4 7h2v4H4V7zm16 5h2v4h-2v-4zM10 2h6v2h-6V2zm10 18v-3h2v3.012c0 1.098-.89 1.987-1.988 1.988H17v-2h3zm-10 0h6v2h-6v-2zM6 4v2H4V3.994C4 2.893 4.893 2 5.994 2H9v2H6zm2 3h10v2H8V7zm0 4h7v2H8v-2zm-2 8.166l1.517-1.517h1.202v1.202l-3.682 3.682-3.682-3.682V17.65h1.202L4 19.092V14h2v5.166z' />
        </svg>
    );
};

SaveAsTemplate.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SaveAsTemplate.displayName = 'SaveAsTemplate';
export default SaveAsTemplate;
