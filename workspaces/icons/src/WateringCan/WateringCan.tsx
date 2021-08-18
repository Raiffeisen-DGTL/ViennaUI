import React, { SVGAttributes } from 'react';

export interface WateringCanProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WateringCan: React.FC<WateringCanProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.5 4V1h-2v3H5a3 3 0 00-3 3v6a3 3 0 001.2 2.4L6 17.5V21a1 1 0 001 1h9a1 1 0 001-1v-5.785l3.985-8.855.068.034a1 1 0 00.894-1.788l-2-1a1 1 0 00-.894 1.788l.141.071L17 10.341V5a1 1 0 00-1-1h-3.5zm-2 2v2h2V6H15v14H8V6h2.5zM5 6h1v9l-1.6-1.2A1 1 0 014 13V7a1 1 0 011-1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WateringCan.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WateringCan.displayName = 'WateringCan';
export default WateringCan;
