import React, { SVGAttributes } from 'react';

export interface AutotransportSideProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AutotransportSide: React.FC<AutotransportSideProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.821 5.212A2 2 0 016.66 4h6.723a2 2 0 011.789 1.106l2.518 5.035 2.796.7A2 2 0 0122 12.78V16a2 2 0 01-1.105 1.789 3.001 3.001 0 01-5.724.211H8.829a3.001 3.001 0 01-5.724-.211A2 2 0 012 16v-3.795a2 2 0 01.162-.788l2.66-6.205zM4 14.764A3.001 3.001 0 018.83 16h6.34A3.001 3.001 0 0120 14.764V12.78l-2.796-.7a2.011 2.011 0 01-.254-.08H4.088L4 12.205v2.559zM13.382 6l2 4H12V6h1.382zM6.659 6H10v4H4.945L6.66 6zM18 16a1 1 0 100 2 1 1 0 000-2zM5 17a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AutotransportSide.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AutotransportSide.displayName = 'AutotransportSide';
export default AutotransportSide;
