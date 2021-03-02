import React, { SVGAttributes } from 'react';

export interface GearsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gears: React.FC<GearsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18.968 3.517a3.981 3.981 0 011.514 1.515l1.089-.292.517 1.932L21 6.963a4.02 4.02 0 01-.554 2.069l.797.796-1.415 1.415-.797-.797-.031.018a3.981 3.981 0 01-2.037.536l-.291 1.088-1.932-.517.291-1.088a3.98 3.98 0 01-1.513-1.515l-1.089.292-.518-1.932L13 7.037a4.02 4.02 0 01.555-2.07l-.797-.795 1.415-1.415.796.797.032-.018a3.981 3.981 0 012.037-.537l.291-1.088 1.932.518-.292 1.088zM15.55 5.622a2.004 2.004 0 00-.495 1.848l.025.093a2.008 2.008 0 001.39 1.365l.024.007a1.994 1.994 0 001.895-.496l.052-.052a2.004 2.004 0 00.501-1.866l-.02-.075a2.001 2.001 0 00-3.302-.894l-.07.07zM10 8v2.1a5.006 5.006 0 013.9 3.9H16v2h-2.1a4.972 4.972 0 01-.728 1.757l1.485 1.486-1.414 1.414-1.486-1.485A4.972 4.972 0 0110 19.9V22H8v-2.1a4.972 4.972 0 01-1.757-.728l-1.486 1.485-1.414-1.414 1.485-1.486A4.971 4.971 0 014.1 16H2v-2h2.1c.13-.638.38-1.233.728-1.757l-1.485-1.486 1.414-1.414 1.486 1.485A4.972 4.972 0 018 10.1V8h2zm-1 4a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gears.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gears.displayName = 'Gears';
export default Gears;
