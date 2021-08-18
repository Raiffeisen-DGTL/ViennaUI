import React, { SVGAttributes } from 'react';

export interface BallanceHidden1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BallanceHidden1: React.FC<BallanceHidden1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1.22 13.875l1.103-1.38-1.64-.546.633-1.898L3 10.613V9h2v1.613l1.684-.562.632 1.898-1.64.546 1.105 1.38-1.562 1.25L4 13.6l-1.22 1.524-1.56-1.25zm9.103-1.38l-1.104 1.38 1.562 1.25L12 13.6l1.218 1.524 1.562-1.25-1.104-1.38 1.64-.546-.633-1.898-1.684.562V9h-2v1.613l-1.684-.562-.632 1.898 1.64.546zm8 0l-1.104 1.38 1.562 1.25L20 13.6l1.218 1.524 1.562-1.25-1.104-1.38 1.64-.546-.633-1.898-1.684.562V9h-2v1.613l-1.684-.562-.632 1.898 1.64.546z' />
        </svg>
    );
};

BallanceHidden1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BallanceHidden1.displayName = 'BallanceHidden1';
export default BallanceHidden1;
