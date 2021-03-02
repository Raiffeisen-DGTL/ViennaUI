import React, { SVGAttributes } from 'react';

export interface ClothesBabyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ClothesBaby: React.FC<ClothesBabyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.757 2.03A1 1 0 017 2h2a3 3 0 006 0h2a1 1 0 01.242.03l3.243.81A2 2 0 0122 4.78V9a2 2 0 01-2 2h-1v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9H4a2 2 0 01-2-2V4.78a2 2 0 011.515-1.94l3.242-.81zM16.583 4A5 5 0 0113 6.899V9h-2V6.899A5 5 0 017.417 4h-.294L4 4.78V9h3v5h10V9h3V4.78L16.877 4h-.294zM7 20v-4h10v4h-4v-2h-2v2H7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ClothesBaby.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ClothesBaby.displayName = 'ClothesBaby';
export default ClothesBaby;
