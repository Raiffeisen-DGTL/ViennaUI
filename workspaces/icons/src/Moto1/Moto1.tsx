import React, { SVGAttributes } from 'react';

export interface Moto1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Moto1: React.FC<Moto1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M14 8.382V7h-2V5h3c4.267 0 7 2.2 7 5a1 1 0 01-.051.316l-1 3a1 1 0 01-.286.432 3.496 3.496 0 011.324 2.453A3.5 3.5 0 0115.337 18H11a1 1 0 01-.894-.553L9.31 15.86l-.39-.098A3.5 3.5 0 115 13.035v-.5l-2.554-1.703A1 1 0 012 10V7a1 1 0 011.243-.97l4 1a1 1 0 01.464.263L9.414 9h3.35L14 8.382zm3.83 6.776L17 16.487a1.5 1.5 0 10.83-1.33zM16 9V7.047c2.124.208 3.258 1.077 3.73 1.953H18v2h1.613l-.334 1H18a1 1 0 00-.848.47L14.946 16h-3.328l-.724-1.447a1 1 0 00-.652-.523L7 13.22V12a1 1 0 00-.445-.832L4 9.465V8.28l2.489.622 1.804 1.804A1 1 0 009 11h4a.999.999 0 00.447-.106l2-1A1 1 0 0016 9zM5.5 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Moto1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Moto1.displayName = 'Moto1';
export default Moto1;
