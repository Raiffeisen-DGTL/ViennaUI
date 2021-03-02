import React, { SVGAttributes } from 'react';

export interface LeafProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Leaf: React.FC<LeafProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.542 17.044c-1.299-1.518-2.15-3.268-2.248-5.164-.115-2.234.824-4.483 2.928-6.587l.026-.027.029-.024c1.169-1.005 2.708-1.681 4.285-2.146 1.588-.469 3.285-.743 4.826-.903a42.3 42.3 0 015.199-.207L21.05 2l.904.045.045.905v.004c.003.082.012.315.015.458a42.303 42.303 0 01-.207 5.199c-.16 1.541-.434 3.238-.903 4.826-.465 1.577-1.141 3.116-2.146 4.285l-.024.029-.027.026c-2.104 2.104-4.353 3.043-6.587 2.928-1.896-.098-3.646-.95-5.164-2.248l-3.249 3.25-1.414-1.415 3.249-3.249zm-.25-5.267c-.08-1.536.536-3.25 2.317-5.043.865-.733 2.092-1.3 3.519-1.72 1.432-.422 2.999-.68 4.466-.832a40.305 40.305 0 014.43-.205v.641a40.323 40.323 0 01-.206 3.788c-.153 1.467-.41 3.034-.832 4.466-.42 1.427-.987 2.654-1.72 3.52-1.792 1.78-3.507 2.396-5.043 2.316-1.305-.067-2.612-.643-3.848-1.669l7.832-7.832-1.414-1.414-7.832 7.832c-1.026-1.236-1.602-2.543-1.67-3.848z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Leaf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Leaf.displayName = 'Leaf';
export default Leaf;
