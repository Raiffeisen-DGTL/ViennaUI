import React, { SVGAttributes } from 'react';

export interface Autoservice2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Autoservice2: React.FC<Autoservice2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.414 2H3v2h1.586L5 4.414v1.172L4.586 6H3v2h2.414L7 6.414V6h10v.414L18.586 8H21V6h-1.586L19 5.586V4.414L19.414 4H21V2h-2.414L17 3.586V4H7v-.414L5.414 2z' />
            <path
                fillRule='evenodd'
                d='M8 8c-.47 0-.825.234-1.044.432a3.05 3.05 0 00-.548.694c-.289.481-.535 1.091-.732 1.683a16.86 16.86 0 00-.482 1.78c-.075.351-.136.701-.169 1.002a5.83 5.83 0 00-.357.48c-.28.42-.66 1.112-.668 1.901V21a1 1 0 001 1h4a1 1 0 001-1h4a1 1 0 001 1h4a1 1 0 001-1v-4.98a1 1 0 000-.049c-.01-.788-.388-1.481-.668-1.9a5.77 5.77 0 00-.357-.48c-.033-.3-.094-.65-.169-1.002a16.846 16.846 0 00-.482-1.78c-.198-.592-.443-1.202-.732-1.683a3.052 3.052 0 00-.548-.694C16.824 8.234 16.47 8 16 8H8zm-1.447 9.894L6 17.618V20h2v-1h8v1h2v-2.382l-.553.276a1 1 0 11-.894-1.788l1.283-.642A2.892 2.892 0 0017.54 15H6.46a2.884 2.884 0 00-.296.464l1.283.641a1 1 0 01-.894 1.79zM16.849 13H7.151c.102-.481.249-1.037.423-1.559.178-.533.37-.986.55-1.286A1.91 1.91 0 018.226 10h7.548c.028.037.063.088.103.155.18.3.371.753.55 1.286.173.522.32 1.078.422 1.559z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Autoservice2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Autoservice2.displayName = 'Autoservice2';
export default Autoservice2;
