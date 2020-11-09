import React, { SVGAttributes } from 'react';

export interface Binoculars2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Binoculars2: React.FC<Binoculars2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.947 15.977l-1.613-8.2a3.362 3.362 0 00-2.686-2.714l-.052-.1A3.538 3.538 0 0014.43 3h-.043c-.898 0-1.758.36-2.387 1-.629-.64-1.489-1-2.386-1H9.57C8.228 3 7 3.757 6.4 4.957l-.052.106a3.35 3.35 0 00-2.669 2.72L2.07 15.807c-.042.229-.065.46-.07.693a4.5 4.5 0 109 0V12h2v4.5a4.5 4.5 0 109 0 4.289 4.289 0 00-.053-.523zM6.5 19.3a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6zm4.391-9.3A1.891 1.891 0 009 11.891v.869a4.484 4.484 0 00-4.22-.416l.869-4.2C5.759 7.484 6.33 6.999 7 7h.854l.258-.988C8.422 5.392 9.056 5 9.75 5A1.25 1.25 0 0111 6.25V7h2v-.75c0-.69.56-1.25 1.25-1.25h.008c.69 0 1.32.386 1.633 1l.359 1h.767c.67.002 1.242.488 1.352 1.149l.917 4.224A4.48 4.48 0 0015 12.76v-.869A1.891 1.891 0 0013.109 10h-2.218zm6.609 9.3a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6z' />
        </svg>
    );
};

Binoculars2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Binoculars2.displayName = 'Binoculars2';
export default Binoculars2;
