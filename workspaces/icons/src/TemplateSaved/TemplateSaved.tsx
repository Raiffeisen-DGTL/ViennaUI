import React, { SVGAttributes } from 'react';

export interface TemplateSavedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TemplateSaved: React.FC<TemplateSavedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5 3a1 1 0 011-1h3v2H7v2H5V3zm6-1h4v2h-4V2zm6 0h3a1 1 0 011 1v3h-2V4h-2V2zM5 12V8h2v4H5zm16-4v3h-2V8h2zm0 5v3h-2v-3h2zm0 5v3a1 1 0 01-1 1h-5v-2h4v-2h2zm-6.793-4.793l-8 8a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414L5.5 19.086l7.293-7.293 1.414 1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

TemplateSaved.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TemplateSaved.displayName = 'TemplateSaved';
export default TemplateSaved;
