import React, { SVGAttributes } from 'react';

export interface TemplateProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Template: React.FC<TemplateProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 3a1 1 0 011-1h3v2H6v2H4V3zm6-1h4v2h-4V2zm6 0h3a1 1 0 011 1v3h-2V4h-2V2zM4 11V8h2v3H4zm16-3v3h-2V8h2zM6 13v3H4v-3h2zm14 0v3h-2v-3h2zM6 20v-2H4v3a1 1 0 001 1h3v-2H6zm14-2v3a1 1 0 01-1 1h-3v-2h2v-2h2zm-6 4h-4v-2h4v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Template.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Template.displayName = 'Template';
export default Template;
