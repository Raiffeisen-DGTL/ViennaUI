import React, { SVGAttributes } from 'react';

export interface ButtonsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Buttons: React.FC<ButtonsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.026 8h2v2h-2V8zm3 0h2v2h-2V8zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v2h-2V8zm0 3h2v2h-2v-2zm-6 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm5.93-1h2.019a10 10 0 110-2h-2.018a8 8 0 100 2z' />
        </svg>
    );
};

Buttons.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Buttons.displayName = 'Buttons';
export default Buttons;
