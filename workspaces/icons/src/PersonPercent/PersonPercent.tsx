import React, { SVGAttributes } from 'react';

export interface PersonPercentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PersonPercent: React.FC<PersonPercentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
            <path d='M12 13h-.414l-8.293 8.293 1.414 1.414 7.696-7.696C16.19 15.23 18.5 18.523 18.5 22h2c0-4.402-3.09-9-8.5-9zm-5.5.75a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z' />
            <path d='M12.75 22.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z' />
        </svg>
    );
};

PersonPercent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PersonPercent.displayName = 'PersonPercent';
export default PersonPercent;
