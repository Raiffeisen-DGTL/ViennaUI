import React, { SVGAttributes } from 'react';

export interface BoxSportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BoxSport: React.FC<BoxSportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.135 5h-1.27a3.828 3.828 0 00-1.933.536A2.027 2.027 0 0013.969 4h-2.942C8.809 4 7.292 5.964 6.494 7H4.062A2.062 2.062 0 002 9.063v6.875A2.062 2.062 0 004.062 18h2.443A12.859 12.859 0 0014 20h.4a4.536 4.536 0 01-1.32-2.054 16.624 16.624 0 01-5.264-1.637V8.583l.008-.011c.666-.956 1.9-2.593 3.6-2.593.729 0 1.76.021 2.583.021v4a1 1 0 01-2 0V8h-1.028L10 9v1.078A2.922 2.922 0 0012.922 13h.156c.314-.004.626-.059.922-.163v3.517A3.646 3.646 0 0017.646 20h1.708A3.646 3.646 0 0023 16.354V8.865A3.864 3.864 0 0019.135 5zM4 16V9h2.1v7H4zm17 .156A1.845 1.845 0 0119.156 18h-1.312A1.845 1.845 0 0116 16.156V8.844C16 7.826 16.826 7 17.844 7h1.312C20.174 7 21 7.826 21 8.844v7.312z' />
        </svg>
    );
};

BoxSport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BoxSport.displayName = 'BoxSport';
export default BoxSport;
