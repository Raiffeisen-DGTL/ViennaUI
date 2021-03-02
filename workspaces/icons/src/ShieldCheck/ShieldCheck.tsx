import React, { SVGAttributes } from 'react';

export interface ShieldcheckProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Shieldcheck: React.FC<ShieldcheckProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.707 15.207l5.5-5.5-1.414-1.414L11 13.086l-2.293-2.293-1.414 1.414 3 3a1 1 0 001.414 0z' />
            <path
                fillRule='evenodd'
                d='M13.059 2.272A20.166 20.166 0 0112.336 2h-.67c-.118.048-.237.093-.356.138l-.369.134c-.465.166-1.122.388-1.888.61-1.55.449-3.479.877-5.153.877-.497 0-.9.408-.9.912v7.296c0 3.625 2.304 6.143 4.423 7.694a17.901 17.901 0 003.903 2.147l.09.036c.187.076.383.156.584.156.2 0 .392-.078.581-.154l.008-.004.006-.002.08-.032a17.895 17.895 0 003.903-2.147C18.696 18.111 21 15.592 21 11.967V4.671a.906.906 0 00-.9-.912c-1.674 0-3.604-.428-5.153-.877a32.63 32.63 0 01-1.888-.61zM19 11.967c0 2.682-1.694 4.677-3.602 6.073-.925.678-1.938 1.2-2.953 1.724l-.445.23-.445-.23c-1.015-.524-2.027-1.046-2.953-1.724C6.694 16.644 5 14.65 5 11.968v-6.25c1.631-.133 3.297-.529 4.607-.908.81-.234 1.601-.511 2.393-.798.792.287 1.583.564 2.393.798 1.31.38 2.976.775 4.607.908v6.25z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Shieldcheck.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Shieldcheck.displayName = 'Shieldcheck';
export default Shieldcheck;
