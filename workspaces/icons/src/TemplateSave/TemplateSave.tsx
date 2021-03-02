import React, { SVGAttributes } from 'react';

export interface TemplateSaveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TemplateSave: React.FC<TemplateSaveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 3a1 1 0 011-1h3v2H7v4H5V3zm16 0a1 1 0 00-1-1h-3v2h2v2h2V3zm0 18a1 1 0 01-1 1h-5v-2h4v-2h2v3zM6.707 22.207l4.5-4.5-1.414-1.414L7 19.086V11H5v8.086l-2.793-2.793-1.414 1.414 4.5 4.5a1 1 0 001.414 0zM11 2h4v2h-4V2zm10 6v3h-2V8h2zm0 8v-3h-2v3h2z' />
        </svg>
    );
};

TemplateSave.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TemplateSave.displayName = 'TemplateSave';
export default TemplateSave;
