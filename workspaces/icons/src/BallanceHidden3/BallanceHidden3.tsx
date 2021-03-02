import React, { SVGAttributes } from 'react';

export interface BallanceHidden3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BallanceHidden3: React.FC<BallanceHidden3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.677 10.495l1.104 1.38-1.562 1.25L4 11.6l-1.218 1.524-1.562-1.25 1.104-1.38-1.64-.546.633-1.898L3 8.613V7h2v1.613l1.684-.562.632 1.898-1.64.546zm9.103 1.38l-1.103-1.38 1.64-.546-.633-1.898L13 8.613V7h-2v1.613L9.316 8.05l-.632 1.9 1.64.546-1.105 1.38 1.562 1.25L12 11.6l1.22 1.524 1.56-1.25zM7 15H1v2h6v-2zm8 0H9v2h6v-2zm2 0h6v2h-6v-2zm5.78-3.125l-1.103-1.38 1.64-.546-.633-1.898L21 8.613V7h-2v1.613l-1.684-.562-.632 1.898 1.64.546-1.105 1.38 1.562 1.25L20 11.6l1.22 1.524 1.56-1.25z' />
        </svg>
    );
};

BallanceHidden3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BallanceHidden3.displayName = 'BallanceHidden3';
export default BallanceHidden3;
