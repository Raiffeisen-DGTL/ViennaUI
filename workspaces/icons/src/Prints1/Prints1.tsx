import React, { SVGAttributes } from 'react';

export interface Prints1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Prints1: React.FC<Prints1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19 0h4a1 1 0 011 1v4h-2V2h-3V0zM0 1a1 1 0 011-1h4v2H2v3H0V1zm10.825 1.077a9 9 0 019.868 6.594 1 1 0 11-1.931.517A7 7 0 005 11a1 1 0 11-2 0 9 9 0 017.825-8.923zM12 8a3 3 0 00-3 3c0 .655-.112 1.392-.407 2.054-.297.668-.811 1.322-1.634 1.648l-3.09 1.227a1 1 0 01-.738-1.858l3.09-1.227c.202-.081.393-.262.545-.603C6.92 11.895 7 11.448 7 11a5 5 0 019.33-2.5c.18.312.365.647.491 1.065.127.421.179.874.179 1.435 0 2.796-.94 5.63-3.077 7.623-.844.788-1.82 1.61-2.804 2.24C10.168 21.474 9.065 22 8 22a1 1 0 110-2c.47 0 1.166-.26 2.04-.82.842-.54 1.718-1.272 2.519-2.019C14.203 15.627 15 13.373 15 11c0-.439-.04-.682-.094-.858-.054-.181-.137-.346-.308-.642A3 3 0 0012 8zm0 2a1 1 0 011 1v.292a7 7 0 01-3.87 6.26l-2.683 1.342a1 1 0 11-.894-1.788l2.683-1.342A5 5 0 0011 11.292V11a1 1 0 011-1zm8.164 1.514a1 1 0 01.822 1.15l-.24 1.445a12 12 0 01-4.956 7.858l-1.216.852a1 1 0 01-1.147-1.638l1.216-.852a10 10 0 004.13-6.548l.24-1.445a1 1 0 011.151-.822zM2 22v-3H0v4a1 1 0 001 1h4v-2H2zm20 0v-3h2v4a1 1 0 01-1 1h-4v-2h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Prints1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Prints1.displayName = 'Prints1';
export default Prints1;
