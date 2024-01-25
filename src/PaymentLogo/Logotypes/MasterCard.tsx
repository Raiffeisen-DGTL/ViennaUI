import React, { FC, SVGProps } from 'react';

interface MasterCardProps extends SVGProps<SVGElement> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const sizes = {
    xs: [14, 8],
    s: [21, 12],
    m: [28, 16],
    l: [35, 20],
    xl: [42, 24],
};

export const MasterCard: FC<MasterCardProps> = (props) => {
    const { size = 'm', ...attrs } = props;
    const [width, height] = sizes[size];

    return (
        <svg {...(attrs as {})} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 16' width={width} height={height}>
            <path fill='#FF5F00' fillRule='evenodd' d='M9.713 1.997h9.313v11.98H9.713V1.996z' clipRule='evenodd' />
            <path
                fill='#EB001B'
                d='M13.97 13.963A8.58 8.58 0 018.383 16C3.752 16 0 12.418 0 8s3.753-8 8.382-8a8.58 8.58 0 015.588 2.037C12.256 3.502 11.176 5.631 11.176 8c0 2.37 1.08 4.498 2.794 5.963z'
            />
            <path
                fill='#F79E1B'
                d='M14.03 13.963A8.58 8.58 0 0019.617 16C24.248 16 28 12.418 28 8s-3.753-8-8.382-8a8.58 8.58 0 00-5.588 2.037C15.744 3.502 16.823 5.631 16.823 8c0 2.37-1.08 4.498-2.795 5.963z'
            />
        </svg>
    );
};

MasterCard.displayName = 'MasterCard';
