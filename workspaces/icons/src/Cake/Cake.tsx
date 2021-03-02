import React, { SVGAttributes } from 'react';

export interface CakeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cake: React.FC<CakeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 4V2H6v2h2z' />
            <path
                fillRule='evenodd'
                d='M8 9V6H6v3a3 3 0 00-3 3v6h2v-1.5c1.245 0 1.92-.579 2.387-.98l.014-.01c.407-.35.606-.51 1.099-.51s.692.16 1.099.51l.013.01c.467.401 1.143.98 2.388.98 1.245 0 1.92-.579 2.387-.98l.014-.01c.407-.35.606-.51 1.099-.51s.692.16 1.099.51l.013.01c.467.401 1.143.98 2.388.98V18h2v-6a3 3 0 00-3-3V6h-2v3h-3V6h-2v3H8zm11 5.5V12a1 1 0 00-1-1H6a1 1 0 00-1 1v2.5c.493 0 .692-.16 1.099-.51l.013-.01C6.58 13.579 7.255 13 8.5 13c1.245 0 1.92.579 2.387.98l.014.01c.407.35.606.51 1.099.51s.692-.16 1.099-.51l.013-.01c.467-.401 1.143-.98 2.388-.98 1.245 0 1.92.579 2.387.98l.014.01c.407.35.606.51 1.099.51z'
                clipRule='evenodd'
            />
            <path d='M2 22h20v-2H2v2zM13 2v2h-2V2h2zm5 0v2h-2V2h2z' />
        </svg>
    );
};

Cake.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cake.displayName = 'Cake';
export default Cake;
