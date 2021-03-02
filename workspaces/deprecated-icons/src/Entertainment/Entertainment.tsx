import React, { SVGAttributes } from 'react';

export interface EntertainmentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Entertainment: React.FC<EntertainmentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.155 22h-5.068a1.7 1.7 0 01-1.548-2.4l2.141-4.719-2.558-2.561L4.4 14.462A1.7 1.7 0 012 12.913V7.845c0-.9.513-1.72 1.321-2.115L9.83 2.555a4.049 4.049 0 014.507.839 6.251 6.251 0 011.132 1.869c.29.744.71 1.431 1.238 2.03a7.987 7.987 0 002.039 1.237 7 7 0 011.86 1.133 4.033 4.033 0 01.86 4.462l-3.2 6.554A2.354 2.354 0 0116.155 22zm-4.6-2h4.823l3.273-6.707a2.031 2.031 0 00-.456-2.216c-.409-.3-.85-.55-1.318-.747a9.35 9.35 0 01-2.581-1.623A8.608 8.608 0 0113.652 6.1a5.111 5.111 0 00-.729-1.291 2.05 2.05 0 00-2.261-.436L4 7.625v4.823l4.25-1.926a2.071 2.071 0 012.323.421l2.484 2.485c.61.61.779 1.536.422 2.322L11.555 20zM10.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm.793-9.707l3-3 1.415 1.414-3 3-1.415-1.414z' />
        </svg>
    );
};

Entertainment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Entertainment.displayName = 'Entertainment';
export default Entertainment;
