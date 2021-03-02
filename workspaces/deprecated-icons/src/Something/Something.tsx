import React, { SVGAttributes } from 'react';

export interface SomethingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Something: React.FC<SomethingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 4c1.095 0 1.982.887 1.982 1.982v11.036A1.982 1.982 0 0120 19H3.982A1.983 1.983 0 012 17.018V5.982C2 4.888 2.888 4.001 3.982 4H20zm0 13V6H3.984v11H20zM5 14h2v2H5v-2zm0-3h2v2H5v-2zm12 3h2v2h-2v-2zm0-3h2v2h-2v-2zM8.4 9.815l-.4.333c.04-1.333 1.153-2.7 2.24-1.8l1.445 1.395-.341.308.648.637.67-.654-.269-.324 1.313-1.306c1.131-1.098 2.498.884 2.262 1.757l-.4-.307-1.246 1.246-.418-.34v-.835l-.323.275v1.064l-.517.5 2.685 2.685-1.136 1.126-2.713-2.719-2.616 2.663-1.12-1.142 2.68-2.642-.527-.527v-1.049l-.269-.2v.8l-.434.362L8.4 9.815z' />
        </svg>
    );
};

Something.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Something.displayName = 'Something';
export default Something;
