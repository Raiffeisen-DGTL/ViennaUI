import React, { SVGAttributes } from 'react';

export interface BearProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bear: React.FC<BearProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 23a11.412 11.412 0 01-9.857-5.6l-.2-.327L3.3 9.942a3.994 3.994 0 015.054-6.171 9.146 9.146 0 017.3 0A3.939 3.939 0 0118 3a3.995 3.995 0 012.7 6.942l1.351 7.133-.2.327A11.412 11.412 0 0112 23zm-7.945-6.31a9.477 9.477 0 0015.89 0L18.5 9.047l.572-.364a1.994 1.994 0 10-2.528-3.039l-.528.567-.68-.369a7.134 7.134 0 00-6.666 0l-.68.369-.528-.567A1.977 1.977 0 006 5a2 2 0 00-1.069 3.683l.572.364-1.448 7.642zm9.473.211H10.48a1.815 1.815 0 01-1.8-2l.4-3.915L6.63 9.85l.758-1.633L11 9.892l-.536 5.208h3.081l-.472-5.187 3.5-1.721.794 1.616-2.388 1.173.359 3.939a1.815 1.815 0 01-1.81 1.98z' />
        </svg>
    );
};

Bear.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bear.displayName = 'Bear';
export default Bear;
