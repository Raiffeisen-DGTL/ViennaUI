import React, { SVGAttributes } from 'react';

export interface AccSpecialProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AccSpecial: React.FC<AccSpecialProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 4a1 1 0 011-1h18a1 1 0 011 1v4a1 1 0 011 1v4a1 1 0 01-1 1v4a1 1 0 01-1 1h-6v-2h5v-3h-2a1 1 0 01-1-1V9a1 1 0 011-1h2V5H4v6H2V4zm17 6v2h2v-2h-2z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M8.825 9.435a1 1 0 00-1.65 0L5.26 12.229l-3.249.958a1 1 0 00-.51 1.569l2.066 2.684-.093 3.387a1 1 0 001.335.97L8 20.66l3.192 1.135a1 1 0 001.335-.97l-.093-3.386 2.065-2.684a1 1 0 00-.51-1.57l-3.249-.957-1.915-2.794zM6.71 13.653L8 11.769l1.291 1.884a1 1 0 00.543.394l2.19.646-1.392 1.81a1 1 0 00-.207.637l.062 2.283-2.152-.765a1 1 0 00-.67 0l-2.152.765.063-2.283a1 1 0 00-.207-.637l-1.393-1.81 2.191-.646a1 1 0 00.542-.394z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AccSpecial.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AccSpecial.displayName = 'AccSpecial';
export default AccSpecial;
