import React, { SVGAttributes } from 'react';

export interface ShipProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Ship: React.FC<ShipProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 5H5a1 1 0 00-.98.804L3.18 10H2a1 1 0 00-.929 1.371l1.524 3.808-.148-.073a1 1 0 10-.894 1.789l.658.329a4 4 0 003.578 0l1.317-.659a2 2 0 011.788 0l1.317.659a4 4 0 003.578 0l1.316-.659a2 2 0 011.79 0l1.316.659a4 4 0 003.578 0l.658-.33a1 1 0 00-.894-1.788l-.148.073 1.523-3.808A1 1 0 0022 10h-2.533l-3.888-4.642A1 1 0 0014.812 5H12V3h-2v2H8V3H6v2zM4.894 15.435a2.441 2.441 0 01-.036.018L3.477 12h17.046l-1.381 3.453a3.036 3.036 0 01-.037-.018l-1.316-.659a4 4 0 00-3.578 0l-1.317.659a2 2 0 01-1.789 0l-1.316-.659a4 4 0 00-3.578 0l-1.317.659zM16.858 10l-2.512-3H5.82l-.6 3h11.638z'
                clipRule='evenodd'
            />
            <path d='M15.182 20.527a.962.962 0 011.11.18 2.962 2.962 0 003.42.555l.735-.368a1 1 0 10-.894-1.788l-.735.367a.962.962 0 01-1.11-.18 2.962 2.962 0 00-3.42-.555l-1.394.697a2 2 0 01-1.789 0l-1.393-.697a2.962 2.962 0 00-3.42.555.962.962 0 01-1.11.18l-.735-.367a1 1 0 10-.894 1.788l.735.368c1.14.57 2.518.347 3.42-.555a.962.962 0 011.11-.18l1.393.697a4 4 0 003.578 0l1.393-.697z' />
        </svg>
    );
};

Ship.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Ship.displayName = 'Ship';
export default Ship;
