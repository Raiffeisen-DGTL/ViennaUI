import React, { SVGAttributes } from 'react';

export interface MirrorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mirror: React.FC<MirrorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 12h-1.95c0 .34-.05.67-.05 1h2v1.92h-2.49a8.29 8.29 0 01-6.51 6V23h-2v-2a8.28 8.28 0 01-6.55-6H2v-2h2v-1H2v-2h2.2A8.42 8.42 0 0111 3.07V1h2v2a8.41 8.41 0 016.8 7H22v2zm-10 7.2c3.42 0 6.2-3.2 6.2-7.2S15.42 4.8 12 4.8C8.58 4.8 5.8 8 5.8 12s2.78 7.2 6.2 7.2zm-3.636-7.832l4.003-4.003 1.272 1.273-4.002 4.002-1.273-1.272zm1.995 2.994l4.004-4.001 1.272 1.273-4.003 4-1.273-1.272z' />
        </svg>
    );
};

Mirror.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mirror.displayName = 'Mirror';
export default Mirror;
