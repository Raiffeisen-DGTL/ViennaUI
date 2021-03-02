import React, { SVGAttributes } from 'react';

export interface ConsoleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Console: React.FC<ConsoleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 11a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm10.5-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7 14a1 1 0 100-2 1 1 0 000 2zm9.5-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7 10a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M1.064 8.149C1.862 6.019 3.36 4 6 4c1.049 0 1.879.242 2.64.463l.26.075C9.73 4.776 10.63 5 12 5s2.27-.224 3.1-.462l.26-.075C16.12 4.242 16.951 4 18 4c2.64 0 4.138 2.02 4.936 4.149C23.746 10.308 24 12.943 24 15v.026c0 .499 0 1.613-.288 2.624-.149.518-.395 1.095-.83 1.553A2.524 2.524 0 0121 20c-2.279 0-3.535-1.128-4.584-2.07a12.6 12.6 0 01-.205-.183c-.554-.492-1.062-.913-1.698-1.224C13.893 16.22 13.107 16 12 16s-1.892.219-2.513.523c-.636.311-1.144.732-1.698 1.224l-.205.184C6.535 18.872 5.28 20 3 20c-.785 0-1.42-.308-1.882-.797-.435-.459-.681-1.035-.83-1.553C0 16.639 0 15.525 0 15.026V15c0-2.057.254-4.692 1.064-6.851zm1.872.702C2.246 10.692 2 13.057 2 15c0 .515.006 1.38.212 2.1.101.357.23.593.358.728.1.105.215.172.43.172 1.5 0 2.236-.656 3.308-1.611l.153-.136c.571-.508 1.25-1.087 2.146-1.526.91-.446 2-.727 3.393-.727 1.393 0 2.483.281 3.393.727.896.439 1.575 1.018 2.146 1.526l.153.136C18.764 17.344 19.5 18 21 18c.215 0 .33-.067.43-.172.128-.135.257-.371.358-.728.206-.72.212-1.585.212-2.1 0-1.943-.246-4.308-.936-6.149C20.362 6.981 19.36 6 18 6c-.75 0-1.315.163-2.094.388l-.256.074C14.73 6.724 13.63 7 12 7s-2.73-.276-3.65-.538a91.64 91.64 0 01-.256-.074C7.315 6.163 6.751 6 6 6c-1.36 0-2.362.98-3.064 2.851z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Console.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Console.displayName = 'Console';
export default Console;