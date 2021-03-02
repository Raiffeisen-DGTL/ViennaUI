import React, { SVGAttributes } from 'react';

export interface FireplaceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fireplace: React.FC<FireplaceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 5H2V3h20v2h-1v12h-2V5H5v12H3V5zm19 14v2H2v-2h20z' />
            <path d='M9 17v-6.625a4.95 4.95 0 01.65-.566C10.229 9.389 11.026 9 12 9c.975 0 1.772.39 2.35.809.283.206.503.412.65.566V17h2V9.667l-.2-.267-.012-.016a.262.262 0 00.011.015l-.001-.002-.003-.003-.007-.01-.021-.027a5.66 5.66 0 00-.318-.361 6.95 6.95 0 00-.923-.805C14.728 7.611 13.526 7 12 7c-1.525 0-2.728.61-3.526 1.191a6.947 6.947 0 00-1.17 1.08 3.9 3.9 0 00-.07.086l-.022.027-.007.01-.003.003-.001.002L7.2 9.4l.1.075-.1-.075-.2.267V17h2z' />
            <path d='M12.474 11.842a.5.5 0 00-.948 0l-.898 2.692c-.076.23-.162.571-.053.93.06.2.179.462.416.676.247.224.584.36 1.009.36.425 0 .762-.136 1.01-.36.236-.214.355-.476.415-.676.109-.359.023-.7-.053-.93l-.898-2.692z' />
        </svg>
    );
};

Fireplace.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fireplace.displayName = 'Fireplace';
export default Fireplace;
