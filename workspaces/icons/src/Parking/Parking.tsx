import React, { SVGAttributes } from 'react';

export interface ParkingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Parking: React.FC<ParkingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15.118 7.454c-.584-.576-1.348-.864-2.291-.864H9.005v9.16h1.917v-2.888h1.81c.969 0 1.756-.288 2.36-.864.606-.58.908-1.337.908-2.272 0-.94-.294-1.697-.882-2.272zm-2.806 3.91h-1.39V8.107h1.397c.55 0 .975.14 1.276.42.304.283.457.685.457 1.205s-.153.923-.457 1.207c-.305.283-.732.425-1.283.425z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 2a9 9 0 00-9 9c0 3.387 1.964 6.253 3.918 8.207.99.99 2.014 1.784 2.867 2.336.426.275.821.498 1.16.657.168.08.334.148.492.2.14.045.344.1.563.1.22 0 .423-.055.563-.1.158-.052.324-.12.493-.2a10.12 10.12 0 001.16-.657 17.947 17.947 0 002.866-2.336C19.036 17.253 21 14.387 21 11a9 9 0 00-9-9zm-7 9a7 7 0 0114 0c0 2.613-1.536 4.997-3.332 6.793a15.962 15.962 0 01-2.54 2.07 8.16 8.16 0 01-.922.527c-.085.04-.154.068-.206.088a2.86 2.86 0 01-.206-.088 8.16 8.16 0 01-.923-.526 15.963 15.963 0 01-2.539-2.071C6.536 15.997 5 13.613 5 11zm6.907 9.508h.004-.004zm.186 0h-.004.004z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Parking.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Parking.displayName = 'Parking';
export default Parking;
