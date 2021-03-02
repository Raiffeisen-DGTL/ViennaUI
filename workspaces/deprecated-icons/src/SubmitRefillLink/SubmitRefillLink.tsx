import React, { SVGAttributes } from 'react';

export interface SubmitRefillLinkProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SubmitRefillLink: React.FC<SubmitRefillLinkProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 11h2v8.018A1.983 1.983 0 0120.018 21H3.982A1.983 1.983 0 012 19.018V11h2v8h16v-8zm-9-4.728L9.273 8H8V6.727l4-3.999 4 3.999V8h-1.273L13 6.272V17h-2V6.272z' />
        </svg>
    );
};

SubmitRefillLink.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SubmitRefillLink.displayName = 'SubmitRefillLink';
export default SubmitRefillLink;
