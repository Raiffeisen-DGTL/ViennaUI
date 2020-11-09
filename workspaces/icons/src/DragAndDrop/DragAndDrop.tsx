import React, { SVGAttributes } from 'react';

export interface DragAndDropProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DragAndDrop: React.FC<DragAndDropProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.273 8H17v1.273L18.727 11H13V5.272L14.727 7H16V5.727l-4-3.999-4 3.999V7h1.273L11 5.272V11H5.272L7 9.273V8H5.727l-4 4 4 4H7v-1.273L5.272 13H11v5.728L9.273 17H8v1.273l4 3.999 4-3.999V17h-1.273L13 18.728V13h5.727L17 14.727V16h1.273l3.999-4z' />
        </svg>
    );
};

DragAndDrop.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DragAndDrop.displayName = 'DragAndDrop';
export default DragAndDrop;
