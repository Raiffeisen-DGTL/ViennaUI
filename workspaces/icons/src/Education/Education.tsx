import React, { SVGAttributes } from 'react';

export interface EducationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Education: React.FC<EducationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 18.001h2v2h-2v-2zM22.847 9H23v8h-2v-6.091L12 15 1 10v-.928L12 4l10.847 5zM12 12.989l7.5-3.461L12 6.02 4.5 9.528l7.5 3.461zm5 4.173v-2.843l2-.945v3.787C19 19.35 15.99 21 12 21s-7-1.649-7-3.838v-3.788l2 .945v2.842C7 17.785 8.765 19 12 19c3.235 0 5-1.214 5-1.838z' />
        </svg>
    );
};

Education.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Education.displayName = 'Education';
export default Education;
