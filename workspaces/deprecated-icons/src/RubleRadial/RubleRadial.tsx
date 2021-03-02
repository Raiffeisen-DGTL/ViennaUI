import React, { SVGAttributes } from 'react';

export interface RubleRadialProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RubleRadial: React.FC<RubleRadialProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm2.867 10.485v1.72H11.32V18.2H9.36v-1.995H7.8v-1.72h1.56v-.905H7.8v-1.72h1.56V6.8h3.051c2.294 0 3.789 1.277 3.789 3.25 0 2.02-1.469 3.53-3.789 3.53h-1.09v.905h3.546zm-2.47-2.625c1.186 0 1.843-.651 1.843-1.75 0-.934-.67-1.59-1.843-1.59h-1.076v3.34h1.076z' />
        </svg>
    );
};

RubleRadial.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RubleRadial.displayName = 'RubleRadial';
export default RubleRadial;
