import React, { SVGAttributes } from 'react';

export interface SMSProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SMS: React.FC<SMSProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.237 7.005l.002-.012 1.777 1.705 1.666-1.69.003.006.013-.014h.847v5h-1.542V9.508l-1.012 1.02-.839-.84-.154-.155V12H9.456V7h.775l.006.005zM20 2a2 2 0 012 2v12a2 2 0 01-2 2h-7.586l-4 4H7v-1.414L11.586 16H20V4H4v12h3v2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zM7.307 12.188v-.001a2.555 2.555 0 111.766-4.4l-.855 1.338a1.045 1.045 0 00-.911-.552 1.058 1.058 0 000 2.115c.302-.003.588-.136.784-.365l.754 1.339c-.441.34-.982.524-1.538.526zm10.393 0v-.001a2.555 2.555 0 111.766-4.4l-.855 1.338a1.046 1.046 0 00-.911-.552 1.058 1.058 0 000 2.115c.302-.003.588-.136.784-.365l.753 1.339c-.44.34-.98.524-1.537.526z' />
        </svg>
    );
};

SMS.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SMS.displayName = 'SMS';
export default SMS;
