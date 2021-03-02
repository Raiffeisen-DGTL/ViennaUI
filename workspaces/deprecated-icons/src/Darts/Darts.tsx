import React, { SVGAttributes } from 'react';

export interface DartsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Darts: React.FC<DartsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.923 8.683l.015-4.116 3.02-3.02 2.316 2.316v.887h.887l2.313 2.315-3.022 3.022-4.09-.015-1.422 1.422a1.994 1.994 0 01-.52 1.93 2 2 0 11-.893-3.345l1.396-1.396zm4.785-.4l1.22-1.22-.514-.513h-1.94V4.609l-.518-.513-1.223 1.22-.01 2.958 2.985.01zm1.55 2.992l1.49-1.49a10 10 0 11-7.584-7.53l-1.5 1.5a8.3 8.3 0 107.594 7.52zM7.763 7.772a5.962 5.962 0 014.67-1.72l.005 1.707a4.3 4.3 0 103.822 3.8l1.715.013a6 6 0 11-10.212-3.8z' />
        </svg>
    );
};

Darts.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Darts.displayName = 'Darts';
export default Darts;
