import React, { SVGAttributes } from 'react';

export interface DocumentSendProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentSend: React.FC<DocumentSendProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.947 20L12 22H4.559A1.559 1.559 0 013 20.441V3.559C3 2.698 3.698 2 4.559 2h14.882A1.559 1.559 0 0121 3.564V15l-2-2V4H5v16h6.947zM7 6h10v2H7V6zm0 4h7v2H7v-2zm11.985 8l-1.377-1.376v-1.202h1.203l3.681 3.681-3.681 3.682h-1.203v-1.202L19.192 20H13v-2h5.985z' />
        </svg>
    );
};

DocumentSend.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentSend.displayName = 'DocumentSend';
export default DocumentSend;
