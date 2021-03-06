import React, { SVGAttributes } from 'react';

export interface Pin1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pin1: React.FC<Pin1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 6a4 4 0 115 3.874V18h-2V9.874A4.002 4.002 0 018 6zm4-2a2 2 0 100 4 2 2 0 000-4z'
                clipRule='evenodd'
            />
            <path d='M9.251 16.193c-1.667.242-2.946.683-3.677 1.174-.363.243-.505.441-.552.547a.206.206 0 00-.022.089c0 .015.004.046.03.099.059.12.222.325.597.566.367.236.877.47 1.53.676 1.31.412 3.005.651 4.79.656 1.784.005 3.489-.225 4.817-.631.663-.203 1.185-.436 1.564-.672.388-.242.567-.452.635-.581a.27.27 0 00.037-.108c0-.016 0-.04-.017-.083-.04-.096-.166-.288-.516-.53-.705-.49-1.962-.937-3.62-1.188l.3-1.977c1.794.271 3.395.783 4.46 1.521.536.372.995.842 1.23 1.426a2.18 2.18 0 01-.105 1.873c-.293.555-.789.996-1.345 1.343-.566.354-1.259.65-2.038.888-1.558.477-3.468.724-5.408.719-1.938-.005-3.84-.263-5.383-.748-.772-.243-1.457-.544-2.014-.902-.547-.353-1.034-.803-1.31-1.369a2.176 2.176 0 01-.041-1.875c.253-.573.721-1.034 1.266-1.4 1.086-.728 2.7-1.23 4.504-1.493l.288 1.98z' />
        </svg>
    );
};

Pin1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pin1.displayName = 'Pin1';
export default Pin1;
