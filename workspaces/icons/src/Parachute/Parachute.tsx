import React, { SVGAttributes } from 'react';

export interface ParachuteProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Parachute: React.FC<ParachuteProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.598 2.593A10.001 10.001 0 0112 2c1.165 0 2.32.2 3.402.593a9.16 9.16 0 012.913 1.705 8.019 8.019 0 011.98 2.595A7.25 7.25 0 0121 10v1h-.071a3 3 0 01-.503 1.114L12.81 22.588a1 1 0 01-1.618 0L3.574 12.114A3 3 0 013.07 11H3v-1c0-1.07.241-2.127.705-3.107a8.018 8.018 0 011.98-2.595 9.159 9.159 0 012.913-1.705zM5.236 11L9.6 17l-1.494-5.48a3 3 0 01-.094-.52H5.236zm4.8 0L12 18.2l1.963-7.2h-3.926zm5.952 0c-.016.176-.047.35-.094.521L14.4 17l4.364-6h-2.776zM7.002 5.803A7.098 7.098 0 018.99 4.584l-.031.072c-.315.734-.555 1.582-.716 2.49A16.012 16.012 0 008.028 9h-2.93c.084-.426.222-.846.414-1.25.34-.72.844-1.383 1.489-1.947zm3.211 1.693A13.86 13.86 0 0010.033 9h3.934a13.86 13.86 0 00-.18-1.504 9.484 9.484 0 00-.585-2.052c-.245-.573-.51-.962-.749-1.192C12.22 4.027 12.067 4 12 4s-.22.027-.453.252c-.239.23-.504.62-.75 1.192a9.484 9.484 0 00-.584 2.052zm5.543-.35c.106.598.178 1.221.215 1.854h2.93a5.35 5.35 0 00-.414-1.25 6.017 6.017 0 00-1.489-1.947 7.097 7.097 0 00-1.989-1.219l.031.072c.315.734.555 1.582.716 2.49z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Parachute.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Parachute.displayName = 'Parachute';
export default Parachute;
