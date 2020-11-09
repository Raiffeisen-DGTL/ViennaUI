import React, { SVGAttributes } from 'react';

export interface SignCheckedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SignChecked: React.FC<SignCheckedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1.59 17l6.676-6.677a6.5 6.5 0 01-.209-2.664 7.051 7.051 0 015.168-5.537A6.5 6.5 0 1114.597 15a6.4 6.4 0 01-1.917-.26L10.418 17l.605.605c.77.77.77 2.02 0 2.79L9.398 22.02a1.972 1.972 0 01-2.789 0L1.59 17zm2.828 0l3.586 3.585L9.59 19l-2-2 4.592-4.592.617.254a4.5 4.5 0 10-2.457-2.455l.254.616L4.418 17zm10.886-8.5a.8.8 0 10-1.6 0 .8.8 0 001.6 0zm-.8-2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8.5 11.413l-6 6-3-3V19h1.414l1.586 1.586L21.59 16h1.414v1.414z' />
        </svg>
    );
};

SignChecked.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SignChecked.displayName = 'SignChecked';
export default SignChecked;
