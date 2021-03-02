import React, { SVGAttributes } from 'react';

export interface FlagProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Flag: React.FC<FlagProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M20.924 2.617A1 1 0 0020 2H3v20h2v-8h15a1 1 0 00.707-1.707L16.414 8l4.293-4.293a1 1 0 00.217-1.09zm-6.631 6.09L17.586 12H5V4h12.586l-3.293 3.293a1 1 0 000 1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Flag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Flag.displayName = 'Flag';
export default Flag;
