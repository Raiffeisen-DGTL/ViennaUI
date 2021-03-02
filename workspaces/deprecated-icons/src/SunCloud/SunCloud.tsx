import React, { SVGAttributes } from 'react';

export interface SunCloudProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SunCloud: React.FC<SunCloudProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.4 22.02H6.15a4.043 4.043 0 01-1.243-7.892 5.786 5.786 0 0111.126-.894A4.5 4.5 0 1117.4 22.02zm-6.806-10.8a4 4 0 00-3.979 3.707l-.051.73-.723.1a2.243 2.243 0 00.309 4.463H17.4a2.7 2.7 0 000-5.4 4.26 4.26 0 00-1.478.29c-.237.077-.922.38-.922.38s-.233-.71-.318-.946c-.776-2.148-2.12-3.324-4.088-3.324zM13 2.191h2v3h-2v-3zm7 10.071v-2h3v2h-3zm-1.05-4.535l-1.415-1.415 2.122-2.121 1.414 1.414-2.121 2.122zM6.929 5.604L8.343 4.19l2.121 2.121L9.05 7.726 6.93 5.604zm3.758 2.96a6.5 6.5 0 00-.925.068 4.983 4.983 0 019.079 3.82 5.224 5.224 0 00-1.372-.2c-.15 0-.301.01-.451.03A3.162 3.162 0 0014 8.062c-.7.003-1.378.236-1.93.665a6.5 6.5 0 00-1.383-.163z' />
        </svg>
    );
};

SunCloud.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SunCloud.displayName = 'SunCloud';
export default SunCloud;
