import React, { SVGAttributes } from 'react';

export interface GirlProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Girl: React.FC<GirlProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2A10 10 0 002 12v10h2V12a8 8 0 0116 0v10h2V12A10 10 0 0012 2z' />
            <path
                fillRule='evenodd'
                d='M12 6c0 .578-.281 1.59-1.056 2.453C10.202 9.278 8.974 10 7 10H6v5a6 6 0 0012 0V9.72l-.758-.19c-.476-.12-1.328-.548-2.057-1.234C14.459 7.614 14 6.817 14 6h-2zm.431 3.79a6.33 6.33 0 00.643-.85c.231.3.484.572.741.814A7.89 7.89 0 0016 11.206V15a4 4 0 01-8 0v-3.052c2.001-.215 3.454-1.072 4.431-2.158z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Girl.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Girl.displayName = 'Girl';
export default Girl;
