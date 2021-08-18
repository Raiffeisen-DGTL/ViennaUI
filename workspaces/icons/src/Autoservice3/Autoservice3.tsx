import React, { SVGAttributes } from 'react';

export interface Autoservice3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Autoservice3: React.FC<Autoservice3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.66 4a2 2 0 00-1.84 1.212l-2.66 6.205a2 2 0 00-.161.788V16a2 2 0 001.105 1.789A3.001 3.001 0 008.829 18h6.342a3.001 3.001 0 005.724-.211A2 2 0 0022 16v-3.22a2 2 0 00-1.515-1.94l-1.364-.34 1.327-1.138.845.845 1.414-1.414-1.5-1.5a1 1 0 00-1.358-.052l-2.527 2.166-2.151-4.301A2 2 0 0013.382 4H6.659zm2.17 12h6.34A3.001 3.001 0 0120 14.764V12.78l-2.796-.7a2.011 2.011 0 01-.254-.08H4.088L4 12.205v2.559A3.001 3.001 0 018.83 16zm6.552-6l-2-4H12v4h3.382zM10 6H6.66l-1.715 4H10V6zm8 10a1 1 0 100 2 1 1 0 000-2zM5 17a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Autoservice3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Autoservice3.displayName = 'Autoservice3';
export default Autoservice3;
