import React, { SVGAttributes } from 'react';

export interface RoubleGearProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RoubleGear: React.FC<RoubleGearProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 6a3 3 0 00-3-3H4v4H2v2h2v1H2v2h2v3h2v-3h4v-2H6V9h3a3 3 0 003-3zM9 7H6V5h3a1 1 0 010 2z'
                clipRule='evenodd'
            />
            <path d='M14.779 8.744l-.63-1.31 1.802-.867.63 1.31 1.308-.429a1 1 0 011.018.244l1.4 1.401a1 1 0 01.242 1.023l-.426 1.277 1.324.662a1 1 0 01.553.895v2.1a1 1 0 01-.567.901l-1.31.63.427 1.308a1 1 0 01-.243 1.018l-1.4 1.4a1 1 0 01-1.018.243l-1.307-.427-.63 1.31a1 1 0 01-.902.567h-2.1a1 1 0 01-.901-.567l-.63-1.31-1.308.427a1 1 0 01-1.018-.243l-1.401-1.4a1 1 0 01-.244-1.018l.702-2.14 1.9.623-.51 1.555.533.532.724-.237a2 2 0 012.424 1.034l.358.744h.842l.358-.744a2 2 0 012.424-1.034l.724.237.532-.532-.237-.724a2 2 0 011.034-2.424l.744-.358v-.853l-.771-.386a2 2 0 01-1.003-2.421l.23-.691-.529-.53-.723.237a2 2 0 01-2.425-1.033z' />
            <path d='M14 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
        </svg>
    );
};

RoubleGear.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RoubleGear.displayName = 'RoubleGear';
export default RoubleGear;
