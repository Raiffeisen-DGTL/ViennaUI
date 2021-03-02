import React, { SVGAttributes } from 'react';

export interface MoneyBagProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoneyBag: React.FC<MoneyBagProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.933 6.958h6.237v1l-1 1H16.2l3.88 5.047a4.942 4.942 0 01-3.917 7.953H11v-2h5.163a2.941 2.941 0 002.331-4.734l-4.82-6.266h-1.015l-1.56 2.028a3.251 3.251 0 00-1.778-.968l1.638-2.129-2.65-4.416.858-1.515h8l.857 1.515-2.091 3.485zm-.533-3h-4.467l1.8 3h.867l1.8-3zm-7.483 7.105a3 3 0 010 6H5.573v1.281h4.344v1.719H5.573v2H3.917v-2h-2v-1.719h2v-1.281h-2v-1.688h2v-4.312h4zm0 4.3a1.3 1.3 0 000-2.6h-2.3v2.6h2.3z' />
        </svg>
    );
};

MoneyBag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoneyBag.displayName = 'MoneyBag';
export default MoneyBag;
