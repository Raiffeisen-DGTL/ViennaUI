import React, { SVGAttributes } from 'react';

export interface RobotProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Robot: React.FC<RobotProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 21h6v2H9v-2zM9 9h6v2H9V9zm12 12h1v2h-5v-2h2.2v-6.667a1.535 1.535 0 00-1.2-1.494V20H6v-7.161c-.7.157-1.198.777-1.2 1.494V21H7v2H2v-2h1v-6.666a3.321 3.321 0 013-3.3V10a6 6 0 015-5.91V2h2v2.09A6 6 0 0118 10v1.033a3.321 3.321 0 013 3.3V21zM12 5.8A4.2 4.2 0 007.8 10v2h8.4v-2A4.2 4.2 0 0012 5.8zm3 12.4h1.2v-4.346H7.8V18.2H15zm-6.042-3.158h2.021V17H8.958v-1.958z' />
        </svg>
    );
};

Robot.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Robot.displayName = 'Robot';
export default Robot;
