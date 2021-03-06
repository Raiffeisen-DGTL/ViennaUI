import React, { SVGAttributes } from 'react';

export interface LeisureAndTravelProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LeisureAndTravel: React.FC<LeisureAndTravelProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 18a4 4 0 014 4h-2a2 2 0 10-4 0H8a4 4 0 014-4zm4.563-3A11.5 11.5 0 0020 20.2V22h-.954a13.486 13.486 0 01-4.558-7H9.512a13.48 13.48 0 01-4.558 7H4v-1.8A11.5 11.5 0 007.437 15H7v-2h1.613L11 5.838V4h-1V2h4v2h-1v1.838L15.388 13H17v2h-.437zM12 9.162L10.721 13h2.558L12 9.162z' />
        </svg>
    );
};

LeisureAndTravel.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LeisureAndTravel.displayName = 'LeisureAndTravel';
export default LeisureAndTravel;
