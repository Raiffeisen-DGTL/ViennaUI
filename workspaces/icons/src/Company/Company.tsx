import React, { SVGAttributes } from 'react';

export interface CompanyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Company: React.FC<CompanyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 11H6V9h6v2zm-6 4h6v-2H6v2zm6-8H6V5h6v2z' />
            <path
                fillRule='evenodd'
                d='M2 1h14v5h6v14h2v2H0v-2h2V1zm2 19h6v-3h2v3h2V3H4v17zm12 0h4V8h-4v2h2v2h-2v2h2v2h-2v4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Company.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Company.displayName = 'Company';
export default Company;
