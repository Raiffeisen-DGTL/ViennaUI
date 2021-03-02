import React, { SVGAttributes } from 'react';

export interface MetroTrainProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MetroTrain: React.FC<MetroTrainProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.711 19l1.953 3.021h-2.328L13.383 19h-2.829l-1.952 3.021H6.273L8.226 19H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v9a2 2 0 01-2 2h-.289zM16 17v-4H8v4h8zm0-6V8H8v3h8zm-7 3h2v2H9v-2zm4 0h2v2h-2v-2zM12 1a10.986 10.986 0 019.208 17h-2.519a9 9 0 10-13.378 0H2.792A10.986 10.986 0 0112 1z' />
        </svg>
    );
};

MetroTrain.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MetroTrain.displayName = 'MetroTrain';
export default MetroTrain;
