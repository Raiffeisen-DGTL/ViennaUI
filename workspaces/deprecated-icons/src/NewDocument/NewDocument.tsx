import React, { SVGAttributes } from 'react';

export interface NewDocumentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const NewDocument: React.FC<NewDocumentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 6h10v2H8V6zm0 4h10v2H8v-2zm12-8a2 2 0 012 2v15.573A2.426 2.426 0 0119.573 22H7v-2h13V4H6v9H4V4a2 2 0 012-2h14zM9 19H6v3H4v-3H1v-2h3v-3h2v3h3v2z' />
        </svg>
    );
};

NewDocument.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

NewDocument.displayName = 'NewDocument';
export default NewDocument;
