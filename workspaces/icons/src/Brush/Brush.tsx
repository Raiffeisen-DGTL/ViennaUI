import React, { SVGAttributes } from 'react';

export interface BrushProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Brush: React.FC<BrushProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10.6 10.66l4.526-8.146 1.748.972-2.292 4.125 2.46 2.108L20.4 7.2l1.2 1.6-7.297 5.472c.214.661.144 1.34.053 1.8a5.983 5.983 0 01-.437 1.325l-.01.026a3.287 3.287 0 01-.4.66c-.297.38-.766.837-1.495 1.275C10.563 20.229 8.117 21 4 21a1 1 0 01-.707-1.707c1.224-1.224 1.458-2.63 1.709-4.135l.012-.072c.12-.724.263-1.564.623-2.283.385-.77 1.005-1.388 1.985-1.73l.057-.027a5.988 5.988 0 011.25-.402c.429-.085 1.052-.152 1.672.015zm1.64 1.166l1.351-2.43 1.812 1.552-2.31 1.732-.852-.854zm-1.948.88c-.125-.124-.418-.211-.97-.1a3.986 3.986 0 00-.825.265l-.18.078c-.485.161-.722.41-.891.748-.203.406-.31.941-.44 1.717l-.03.184c-.158.96-.354 2.149-.956 3.33 2.62-.198 4.135-.775 4.986-1.286.521-.313.802-.606.943-.787a1.37 1.37 0 00.127-.19l.008-.017.044-.1.02-.045a3.987 3.987 0 00.266-.824c.111-.554.024-.847-.101-.972l-2-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Brush.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Brush.displayName = 'Brush';
export default Brush;
