import React, { SVGAttributes } from 'react';

export interface DocumentEditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentEdit: React.FC<DocumentEditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.85 6h10v2h-10V6zm12-4a2 2 0 012 2v15.573A2.426 2.426 0 0119.423 22H6.35l2-2h11.5V4h-14v7.5l-2 2V4a2 2 0 012-2h14zm-12 12.202l-5.15 5.15v.798h.798L8.648 15l-.798-.798zM9.052 13l.798.798L11.648 12l-.798-.798L9.052 13zM1 21.85v-3.202l8.895-8.895a1.35 1.35 0 011.91 0l1.292 1.292a1.35 1.35 0 010 1.91L4.202 21.85H1z' />
        </svg>
    );
};

DocumentEdit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentEdit.displayName = 'DocumentEdit';
export default DocumentEdit;
