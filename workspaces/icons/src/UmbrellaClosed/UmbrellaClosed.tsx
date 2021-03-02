import React, { SVGAttributes } from 'react';

export interface UmbrellaClosedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const UmbrellaClosed: React.FC<UmbrellaClosedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.968 1.749a1 1 0 00-1.936 0l-3.5 13.5A1 1 0 008.5 16.5H11V20a1 1 0 01-2 0v-1H7v1a3 3 0 006 0v-3.5h2.5a1 1 0 00.968-1.251l-3.5-13.5zM12 5.985l2.208 8.515H9.792L12 5.985z'
                clipRule='evenodd'
            />
        </svg>
    );
};

UmbrellaClosed.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

UmbrellaClosed.displayName = 'UmbrellaClosed';
export default UmbrellaClosed;
