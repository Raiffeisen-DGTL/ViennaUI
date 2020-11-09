import React, { SVGAttributes } from 'react';

export interface CameraProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Camera: React.FC<CameraProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.558 6H9.442l-.545 1.632L8.442 9H4v9h16V9h-4.442l-.455-1.368L14.558 6zM9.514 4h4.972a2.1 2.1 0 011.993 1.437L17 7h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h3l.521-1.563A2.1 2.1 0 019.514 4zM3 4h3v2H3V4zm9 6.7a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zM12 9a4 4 0 110 8 4 4 0 010-8z' />
        </svg>
    );
};

Camera.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Camera.displayName = 'Camera';
export default Camera;
