import React, { SVGAttributes } from 'react';

export interface CheckSignProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckSign: React.FC<CheckSignProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 15.283l-5-5V8.83h1.375L12 12.455l8.625-8.625H22v1.453l-10 10zm7.985-5.915l.064.088 2.093 2.153v.965l-2.04 2.104.414 2.901-.567.781-2.887.503-1.371 2.589-.917.299-2.632-1.29-2.631 1.29-.918-.299-1.37-2.589-2.887-.503-.567-.781.413-2.901-2.04-2.104v-.965l2.04-2.104-.413-2.9.567-.781 2.887-.503 1.37-2.59.918-.299 2.631 1.29 2.632-1.29.917.299 1.39 2.657.002.003-1.288 1.288-1.198-2.156-1.662.815-.793.389-.792-.389-1.668-.817-.868 1.641-.413.78-.869.152-1.83.319.262 1.838.125.873-.614.634-1.293 1.334 1.293 1.333.614.634-.125.873-.262 1.839 1.83.318.869.152.413.78.868 1.641 1.668-.817.792-.388.792.388 1.668.817.869-1.641.413-.78.869-.152 1.829-.318-.262-1.839-.124-.873.614-.634 1.292-1.332-1.344-1.382-.056-.059 1.283-1.284z' />
        </svg>
    );
};

CheckSign.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckSign.displayName = 'CheckSign';
export default CheckSign;
