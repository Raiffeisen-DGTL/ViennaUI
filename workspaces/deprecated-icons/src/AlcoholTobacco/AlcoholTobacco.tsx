import React, { SVGAttributes } from 'react';

export interface AlcoholTobaccoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AlcoholTobacco: React.FC<AlcoholTobaccoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 14a3.522 3.522 0 011.3-2.7c.484-.485.7-.717.7-1.3 0-.583-.216-.82-.708-1.306A3.512 3.512 0 0116 6a3.59 3.59 0 011.31-2.752c.479-.475.69-.707.69-1.248h2a3.5 3.5 0 01-1.282 2.668C18.221 5.162 18 5.4 18 6c0 .56.214.8.7 1.271a3.5 3.5 0 010 5.45c-.485.479-.7.714-.7 1.279h-2zm-7 6h2l1 1v1H4v-1l1-1h2v-4.094a6.068 6.068 0 01-5-6v-6C2 2.854 2.854 2.001 3.906 2h8.188A1.907 1.907 0 0114 3.909v6a6.12 6.12 0 01-.632 2.706 8.168 8.168 0 00-1.433-2.05A4.04 4.04 0 0012 9.909V4H4v5.909A4.05 4.05 0 008 14a3.876 3.876 0 001.39-.269 4.1 4.1 0 01.444.738l.481 1.058A5.819 5.819 0 019 15.908V20zm4.371-5h5.691A1.937 1.937 0 0121 16.938v1.02a4.047 4.047 0 01-4.729 3.985 4.2 4.2 0 01-3.059-2.46l-2.467-5.427A5.222 5.222 0 006 11V9a7.225 7.225 0 016.565 4.228L13.371 15zM19 17.958V17h-4.72l.82 1.803a2.041 2.041 0 003.9-.845z' />
        </svg>
    );
};

AlcoholTobacco.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AlcoholTobacco.displayName = 'AlcoholTobacco';
export default AlcoholTobacco;
