import React, { SVGAttributes } from 'react';

export interface IncomingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Incoming: React.FC<IncomingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.991 4H4.009A2.008 2.008 0 002 6.009v11.432C2 18.302 2.698 19 3.559 19h16.453c1.098 0 1.987-.89 1.988-1.988v-11A2.008 2.008 0 0019.991 4zM20 17H4V7.329l8 7L19 8.2V7h-1.662L12 11.671 5.519 6H20v11z' />
        </svg>
    );
};

Incoming.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Incoming.displayName = 'Incoming';
export default Incoming;
