import React, { SVGAttributes } from 'react';

export interface EyeOpenedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const EyeOpened: React.FC<EyeOpenedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 19c-3.315 0-6.57-2.17-9.795-6.393a1 1 0 010-1.214C5.43 7.17 8.685 5 12 5c3.315 0 6.57 2.17 9.795 6.393a1 1 0 010 1.214C18.57 16.83 15.315 19 12 19zm0-2c2.434 0 5.019-1.634 7.73-5-2.711-3.366-5.296-5-7.73-5s-5.019 1.634-7.73 5c2.711 3.366 5.296 5 7.73 5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

EyeOpened.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

EyeOpened.displayName = 'EyeOpened';
export default EyeOpened;
