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
            <path d='M12 2.128c5.52.006 9.994 4.48 10 10V22h-2v-9.872a8 8 0 10-16 0V22H2v-9.872c.006-5.52 4.48-9.994 10-10zm2.9 3.855a5.507 5.507 0 004.1 4.836V14.2a6.924 6.924 0 01-6.917 6.919h-.166A6.924 6.924 0 015 14.202v-.12a9.62 9.62 0 002.016.335 4.913 4.913 0 004.9 4.7h.166a4.923 4.923 0 004.917-4.917v-2.026a7.5 7.5 0 01-3.156-3 7.474 7.474 0 01-8.861 3.451l.006-2.147a5.484 5.484 0 007.8-4.483l2.112-.012z' />
        </svg>
    );
};

Girl.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Girl.displayName = 'Girl';
export default Girl;
