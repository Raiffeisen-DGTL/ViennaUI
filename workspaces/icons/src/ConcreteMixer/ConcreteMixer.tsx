import React, { SVGAttributes } from 'react';

export interface ConcreteMixerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ConcreteMixer: React.FC<ConcreteMixerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M.594 7.923a1 1 0 01.199-1.13l3-3a1 1 0 011.13-.2l6.345 2.962A3 3 0 0113 9.274V11a1 1 0 01-.293.707l-4 4A1 1 0 018 16h-.764c.475.53.764 1.232.764 2h8a3 3 0 014-2.83V13h-2v-2h2V9.694a1 1 0 00-.836-.986L16 8.18V13a1 1 0 01-.293.707l-3 3-1.414-1.414L14 12.586V7a1 1 0 011.164-.986l4.33.721A3 3 0 0122 9.695V18a3 3 0 01-5.236 2H7.236a3 3 0 11-3.084-4.879 2.996 2.996 0 01-.597-.852L.594 7.923zm2.108-.211l.734 1.571 2.847-2.847-1.571-.734-2.01 2.01zm5.51-.376l-3.876 3.876 1.031 2.21a1 1 0 00.907.578h1.312L11 10.586V9.274a1 1 0 00-.577-.906L8.212 7.336zM20 17.99V18a1 1 0 110-.01zM4 18a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ConcreteMixer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ConcreteMixer.displayName = 'ConcreteMixer';
export default ConcreteMixer;
