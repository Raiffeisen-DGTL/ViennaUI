import React, { SVGAttributes } from 'react';

export interface VisibleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Visible: React.FC<VisibleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 19c-6.6 0-9.662-6.3-9.789-6.568L2 11.99l.217-.437C2.351 11.285 5.532 5 12 5s9.649 6.285 9.781 6.553L22 12l-.221.447C21.649 12.715 18.468 19 12 19zm-7.766-6.986C4.988 13.319 7.511 17 12 17c4.33 0 6.963-3.695 7.758-5-.795-1.3-3.428-5-7.758-5-4.345 0-6.982 3.721-7.766 5.014zM12 16a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z' />
        </svg>
    );
};

Visible.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Visible.displayName = 'Visible';
export default Visible;
