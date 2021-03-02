import React, { SVGAttributes } from 'react';

export interface IceCreamProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const IceCream: React.FC<IceCreamProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.005 7.76a6 6 0 0111.99 0 3 3 0 01-1.242 5.144l-2.804 8.412A1 1 0 0113 22h-2a1 1 0 01-.949-.684l-2.804-8.412A2.997 2.997 0 015 10a3 3 0 011.005-2.24zm8.823-2.588A4 4 0 0116 8c0 .045.003.09.009.133a1 1 0 00.491 1.001A1 1 0 1115 10a1 1 0 10-2 0 1 1 0 01-2 0 1 1 0 00-2-.006V10a1 1 0 11-1.5-.866 1 1 0 00.491-1A1.01 1.01 0 008 8a4 4 0 016.828-2.828zm-.328 7.426c.069.04.139.076.21.11l-.506 1.517-3.931 1.43-.983-2.947a2.994 2.994 0 00.71-.472 3 3 0 004 0c.153.137.32.258.5.362zm-3.595 4.955L11.721 20h.558l1.118-3.353-2.492.906z'
                clipRule='evenodd'
            />
        </svg>
    );
};

IceCream.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

IceCream.displayName = 'IceCream';
export default IceCream;
