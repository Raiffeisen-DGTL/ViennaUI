import React, { SVGAttributes } from 'react';

export interface DocAttachmentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocAttachment: React.FC<DocAttachmentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h8v-2H4V4h12v4h2V3z'
                clipRule='evenodd'
            />
            <path d='M15 13a1 1 0 112 0v6h2v-6a3 3 0 10-6 0v5a5 5 0 0010 0v-7h-2v7a3 3 0 11-6 0v-5z' />
        </svg>
    );
};

DocAttachment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocAttachment.displayName = 'DocAttachment';
export default DocAttachment;
