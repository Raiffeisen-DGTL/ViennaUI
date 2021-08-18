import React, { SVGAttributes } from 'react';

export interface OfferTopProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OfferTop: React.FC<OfferTopProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.57 15.334A3.198 3.198 0 1111 10.656a3.199 3.199 0 113.43 4.678l-1.04.208L15.6 17.2l-1.2 1.6-3.4-2.55-3.4 2.55-1.2-1.6 2.21-1.658-1.04-.208zM8.199 11a1.198 1.198 0 00-.235 2.373l1.762.352-.352-1.762A1.198 1.198 0 008.198 11zM15 12.198a1.198 1.198 0 00-2.373-.235l-.352 1.762 1.762-.352c.56-.112.963-.604.963-1.175z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M3 2a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 18V4h5v4h2V4h9v9h-2v2h2v5H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

OfferTop.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OfferTop.displayName = 'OfferTop';
export default OfferTop;
