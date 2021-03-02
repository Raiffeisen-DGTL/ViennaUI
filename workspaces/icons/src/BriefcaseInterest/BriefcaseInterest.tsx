import React, { SVGAttributes } from 'react';

export interface BriefcaseInterestProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BriefcaseInterest: React.FC<BriefcaseInterestProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 3a2 2 0 00-2 2v2H3a1 1 0 00-1 1v12a1 1 0 001 1h5v-2H4V9h16v2h2V8a1 1 0 00-1-1h-4V5a2 2 0 00-2-2H9zm6 4V5H9v2h6z'
                clipRule='evenodd'
            />
            <path d='M12.207 22.707l9-9-1.414-1.414-9 9 1.414 1.414zM12 12.5a2 2 0 100 4 2 2 0 000-4zm6 8a2 2 0 114 0 2 2 0 01-4 0z' />
        </svg>
    );
};

BriefcaseInterest.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BriefcaseInterest.displayName = 'BriefcaseInterest';
export default BriefcaseInterest;
