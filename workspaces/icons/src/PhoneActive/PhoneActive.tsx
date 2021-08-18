import React, { SVGAttributes } from 'react';

export interface PhoneActiveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PhoneActive: React.FC<PhoneActiveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.061 2.609A8 8 0 0014 2v2a6 6 0 016 6h2a8 8 0 00-4.939-7.391z' />
            <path
                fillRule='evenodd'
                d='M5.387 3.199a2 2 0 013.13.385l1.939 3.232a2 2 0 01-.301 2.443l-1.026 1.027c.21.43.736 1.26 2.03 2.555 1.295 1.294 2.125 1.82 2.555 2.03l1.027-1.026a2 2 0 012.443-.3l3.232 1.939a2 2 0 01.385 3.129l-2.508 2.508c-.557.557-1.36.916-2.24.806-1.747-.217-5.694-1.096-9.315-4.652-3.656-3.59-4.491-7.609-4.682-9.362-.094-.866.265-1.648.81-2.193l2.52-2.52zm1.414 1.414L4.28 7.134c-.19.19-.253.397-.235.563.16 1.477.88 4.994 4.094 8.15 3.208 3.15 6.684 3.912 8.16 4.096.173.021.386-.042.58-.236l2.508-2.509-3.232-1.939-1.178 1.178c-.34.34-.959.675-1.675.427-.693-.24-1.835-.888-3.557-2.61-1.721-1.72-2.37-2.863-2.61-3.556-.247-.716.088-1.336.427-1.675l1.179-1.178L6.8 4.613z'
                clipRule='evenodd'
            />
            <path d='M14 6a4 4 0 014 4h-2a2 2 0 00-2-2V6z' />
        </svg>
    );
};

PhoneActive.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PhoneActive.displayName = 'PhoneActive';
export default PhoneActive;
