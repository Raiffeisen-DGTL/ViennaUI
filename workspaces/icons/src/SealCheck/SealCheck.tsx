import React, { SVGAttributes } from 'react';

export interface SealCheckProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SealCheck: React.FC<SealCheckProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.629 12.778a1 1 0 00.078-1.485l-2-2-1.414 1.414 1.214 1.214-2.222 1.796.71 2.638-2.729.14-.976 2.552-2.29-1.49-2.29 1.49-.976-2.551-2.728-.141.709-2.638L4.591 12l2.124-1.717-.71-2.638 2.729-.14.976-2.552L12 6.443l2.558-1.664.654.837 1.576-1.232-1.219-1.56a1 1 0 00-1.333-.222L12 4.057 9.764 2.602a1 1 0 00-1.479.48l-.954 2.492-2.664.137a1 1 0 00-.914 1.258l.693 2.576-2.075 1.677a1 1 0 000 1.556l2.075 1.676-.693 2.576a1 1 0 00.914 1.259l2.664.137.954 2.491a1 1 0 001.48.48L12 19.944l2.236 1.455a1 1 0 001.479-.481l.954-2.491 2.664-.137a1 1 0 00.914-1.259l-.693-2.576 2.075-1.676z' />
            <path d='M11.707 14.707l8.5-8.5-1.414-1.414L11 12.586l-2.293-2.293-1.414 1.414 3 3a1 1 0 001.414 0z' />
        </svg>
    );
};

SealCheck.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SealCheck.displayName = 'SealCheck';
export default SealCheck;
