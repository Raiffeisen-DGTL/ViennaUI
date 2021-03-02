import React, { SVGAttributes } from 'react';

export interface TheaterInProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TheaterIn: React.FC<TheaterInProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 3h20v2h-1v12h-2v-2l-.058.003a2.688 2.688 0 00-.995.266 1.635 1.635 0 00-.646.551c-.16.24-.301.605-.301 1.18h-2c0-.925.234-1.685.637-2.29.217-.326.473-.59.74-.802l-.035-.03c-1.075-.941-1.995-2.547-2.263-5.222a6.208 6.208 0 01-2.08.344 6.22 6.22 0 01-2.078-.344c-.268 2.675-1.188 4.28-2.262 5.221l-.036.031c.267.213.522.476.74.803C8.766 15.315 9 16.075 9 17H7c0-.575-.14-.94-.3-1.18a1.635 1.635 0 00-.647-.55A2.688 2.688 0 005 15v2H3V5H2V3zm17 2v7.997a4.23 4.23 0 00-.25-.044c-.03-.003-.03-.004-.095-.023a2.639 2.639 0 01-.997-.558C16.94 11.742 16 10.308 16 7a1 1 0 00-1.697-.717l-.008.007a2.699 2.699 0 01-.492.315C13.425 6.795 12.827 7 12 7s-1.425-.206-1.803-.395c-.286-.278-1.21-.682-1.58-.53A1 1 0 008 7c0 3.308-.94 4.743-1.659 5.372a2.639 2.639 0 01-.996.558c-.108.032-.288.06-.343.067H5V5h14z'
                clipRule='evenodd'
            />
            <path d='M7 21v-2H3v2h4zm2-2h6v2H9v-2zm12 2v-2h-4v2h4z' />
        </svg>
    );
};

TheaterIn.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TheaterIn.displayName = 'TheaterIn';
export default TheaterIn;
