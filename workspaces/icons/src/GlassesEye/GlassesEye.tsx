import React, { SVGAttributes } from 'react';

export interface GlassesEyeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GlassesEye: React.FC<GlassesEyeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 7.414l2.707-2.707-1.414-1.414-3 3A1 1 0 002 7v11a2 2 0 002 2h5a2 2 0 002-2v-2h2v2a2 2 0 002 2h5a2 2 0 002-2V7a1 1 0 00-.293-.707l-3-3-1.414 1.414L20 7.414V12h-5a2 2 0 00-2 2h-2a2 2 0 00-2-2H4V7.414zM20 14h-5v4h5v-4zM4 14h5v4H4v-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

GlassesEye.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GlassesEye.displayName = 'GlassesEye';
export default GlassesEye;
