import React, { SVGAttributes } from 'react';

export interface CheckmarkPartProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckmarkPart: React.FC<CheckmarkPartProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2c-.894 0-1.762.118-2.588.338l.516 1.933A8.013 8.013 0 0112 4c.718 0 1.412.094 2.072.27l.517-1.931A10.013 10.013 0 0012 2zm8.661 4.998a10.044 10.044 0 00-3.66-3.66L16 5.07A8.044 8.044 0 0118.93 8l1.731-1.002zM6.998 3.339a10.044 10.044 0 00-3.66 3.66L5.07 8A8.044 8.044 0 018 5.07L6.998 3.339zm-4.66 6.073A10.012 10.012 0 002 12c0 .894.118 1.762.338 2.588l1.933-.516A8.013 8.013 0 014 12c0-.718.094-1.412.27-2.072l-1.93-.516zM22 12c0-.894-.117-1.762-.338-2.588l-1.933.516c.177.66.271 1.354.271 2.072a8.01 8.01 0 01-.27 2.072l1.931.517c.221-.827.339-1.695.339-2.589zM3.339 17.002a10.044 10.044 0 003.66 3.66L8 18.93A8.044 8.044 0 015.07 16l-1.731 1.002zm13.663 3.659a10.043 10.043 0 003.66-3.66L18.93 16A8.044 8.044 0 0116 18.93l1.002 1.731zm-7.59 1.001a10.046 10.046 0 005.176 0l-.516-1.933A8.01 8.01 0 0112 20a8.01 8.01 0 01-2.072-.27l-.516 1.931zm2.295-6.455l5-5-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414 3.5 3.5a1 1 0 001.414 0z' />
        </svg>
    );
};

CheckmarkPart.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckmarkPart.displayName = 'CheckmarkPart';
export default CheckmarkPart;
