import React, { SVGAttributes } from 'react';

export interface PremiumProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Premium: React.FC<PremiumProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 2a1 1 0 00-.814.419l-5 7a1 1 0 00.046 1.221l10 12a1 1 0 001.536 0l10-12a1 1 0 00.046-1.221l-5-7A1 1 0 0017 2H7zM3.943 9l3.572-5h1.16l-1.43 5H3.944zm5.383 0l1.428-5h2.492l1.428 5H9.326zm5.246 2H9.428L12 18.074 14.572 11zm-.321 6.737L16.7 11h3.164l-5.614 6.737zM16.754 9l-1.428-5h1.16l3.57 5h-3.302zM4.135 11H7.3l2.45 6.737L4.135 11z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Premium.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Premium.displayName = 'Premium';
export default Premium;
