import React, { SVGAttributes } from 'react';

export interface DocReissueProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocReissue: React.FC<DocReissueProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h6v-2H4V4h12v5h2V3z' />
            <path d='M17 13c-.777 0-1.5.22-2.112.602l-1.058-1.697a6 6 0 11-2.807 5.626l-1.157 1.33-1.51-1.311 2.784-3.202a1 1 0 011.411-.099l3.202 2.783-1.312 1.51-1.43-1.243A4 4 0 1017 13z' />
        </svg>
    );
};

DocReissue.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocReissue.displayName = 'DocReissue';
export default DocReissue;
