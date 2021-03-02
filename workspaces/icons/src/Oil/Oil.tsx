import React, { SVGAttributes } from 'react';

export interface OilProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Oil: React.FC<OilProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.76 2.583a1 1 0 00-.707 1.225l.515 1.923-2.173.56-.409-2.455A1 1 0 0013 3h-3a1 1 0 00-.992.876l-.491 3.928L3.75 9.032A1 1 0 003 10v7h2v-6.225l3.25-.837L7.117 19H3v2h18v-2h-5.109L15 11.276V11h-.032l-.313-2.712 2.43-.626.521 1.942a1 1 0 001.225.707l.169-.046V17h2V9.73l.729-.196a1 1 0 00.739-.906l.19-3.156a1 1 0 00-.164-.611L20.75 2.22a1 1 0 00-1.093-.414l-2.898.776zm2.52 5.537l-1.036-3.864 1.236-.33 1.161 1.759-.126 2.104-1.236.331zm-8.68-.852l1.851-.477L12.153 5h-1.27l-.284 2.268zm2.1 1.524L12.955 11h-2.822l.2-1.598 2.367-.61zM9.133 19l.25-2h4.264l.231 2H9.133zm4.283-4H9.633l.25-2h3.303l.23 2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Oil.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Oil.displayName = 'Oil';
export default Oil;
