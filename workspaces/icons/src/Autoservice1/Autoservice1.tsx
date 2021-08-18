import React, { SVGAttributes } from 'react';

export interface Autoservice1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Autoservice1: React.FC<Autoservice1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 21v-3H8a1 1 0 01-1 1H3a1 1 0 01-1-1V12.972c.009-.789.388-1.482.668-1.902a5.97 5.97 0 01.357-.479 10.4 10.4 0 01.169-1.002 16.86 16.86 0 01.482-1.78c.197-.592.443-1.202.732-1.683a3.05 3.05 0 01.548-.694C5.176 5.234 5.53 5 6 5h5V3h3.2a1 1 0 01.901.567l.775 1.61 1.612-.529a1 1 0 011.02.244l1.6 1.601a1 1 0 01.24 1.023l-.525 1.577 1.624.813A1 1 0 0122 10.8v2.4a1 1 0 01-.567.901l-1.61.775.527 1.613a1 1 0 01-.243 1.018l-1.6 1.6a1 1 0 01-1.018.243l-1.613-.527-.775 1.61A1 1 0 0114.2 21H11zm2.571-16H13v4a3 3 0 010 6v4h.571l.502-1.044a2 2 0 012.425-1.034l1.03.337.73-.732-.336-1.03a2 2 0 011.034-2.424L20 12.571v-1.153l-1.072-.536a2 2 0 01-1.003-2.421l.331-.991-.729-.73-1.029.337a2 2 0 01-2.425-1.033L13.571 5zM11 7H6.226a1.884 1.884 0 00-.103.155c-.18.3-.372.753-.55 1.286A14.84 14.84 0 005.152 10H11V7zm0 5H4.46a2.884 2.884 0 00-.296.464l1.283.641a1 1 0 01-.894 1.79L4 14.617V17h2v-1h5v-4zm2 1a1 1 0 100-2v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Autoservice1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Autoservice1.displayName = 'Autoservice1';
export default Autoservice1;
