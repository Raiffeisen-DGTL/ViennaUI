import React, { SVGAttributes } from 'react';

export interface InsuranceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Insurance: React.FC<InsuranceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13.059 2.272A20.166 20.166 0 0112.336 2h-.67c-.24.096-.482.185-.725.272-.465.166-1.122.388-1.888.61-1.55.448-3.479.877-5.153.877-.497 0-.9.408-.9.912v7.296c0 3.625 2.304 6.143 4.423 7.694a17.9 17.9 0 003.903 2.147l.08.032.01.004c.187.076.383.156.584.156.2 0 .392-.078.581-.155l.008-.003.085-.034a17.895 17.895 0 003.903-2.147c2.12-1.55 4.423-4.069 4.423-7.694V4.671a.906.906 0 00-.9-.912c-1.674 0-3.604-.429-5.153-.877a32.605 32.605 0 01-1.888-.61zM19 11.967c0 2.682-1.694 4.677-3.602 6.073-.757.554-1.571 1.004-2.398 1.436V4.366c.46.158.924.308 1.393.444 1.31.38 2.976.775 4.607.908v6.25zm-8-7.601v15.11c-.827-.432-1.641-.882-2.398-1.436C6.694 16.644 5 14.65 5 11.968v-6.25c1.631-.133 3.297-.529 4.607-.908.47-.136.933-.286 1.393-.444z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Insurance.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Insurance.displayName = 'Insurance';
export default Insurance;
