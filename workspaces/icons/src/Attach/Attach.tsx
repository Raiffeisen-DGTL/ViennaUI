import React, { SVGAttributes } from 'react';

export interface AttachProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Attach: React.FC<AttachProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.818 4.002C10.156 2.72 11.971 2 13.864 2c1.893 0 3.708.72 5.046 2.002C20.248 5.283 21 7.022 21 8.834c0 1.813-.752 3.551-2.09 4.833l-7.209 6.903A5.214 5.214 0 018.098 22a5.214 5.214 0 01-3.604-1.43A4.78 4.78 0 013 17.118c0-1.294.537-2.536 1.493-3.451L11.7 6.763a3.128 3.128 0 012.163-.858c.811 0 1.589.309 2.162.858.574.55.896 1.294.896 2.071 0 .777-.322 1.522-.895 2.071L8.818 17.81l-1.442-1.38 7.209-6.904a.956.956 0 00.298-.69.956.956 0 00-.298-.691 1.043 1.043 0 00-.721-.286c-.27 0-.53.103-.72.286l-7.21 6.903a2.867 2.867 0 00-.895 2.071c0 .777.322 1.522.896 2.072a3.127 3.127 0 002.162.857c.811 0 1.59-.308 2.163-.857l7.208-6.904a4.78 4.78 0 001.493-3.452 4.78 4.78 0 00-1.493-3.452 5.214 5.214 0 00-3.604-1.43 5.214 5.214 0 00-3.604 1.43l-5.767 5.523-1.442-1.38 5.767-5.523z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Attach.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Attach.displayName = 'Attach';
export default Attach;
