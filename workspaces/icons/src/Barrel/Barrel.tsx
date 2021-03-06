import React, { SVGAttributes } from 'react';

export interface BarrelProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Barrel: React.FC<BarrelProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 4a2 2 0 012-2h12a2 2 0 012 2v4h-2V4H6v4h8v2H6v4h5v2H6v4h5v2H6a2 2 0 01-2-2v-4H2v-2h2v-4H2V8h2V4z' />
            <path
                fillRule='evenodd'
                d='M17 10a1 1 0 00-.78.375l-.005.005-.01.012-.035.045-.131.168a44.736 44.736 0 00-1.87 2.59c-.512.767-1.037 1.618-1.438 2.42-.38.758-.731 1.63-.731 2.385 0 1.43.86 2.435 1.56 3.018a6.409 6.409 0 001.407.884l.031.014.01.004.004.002.003.001a1 1 0 001.267-.452L17 20.125l.718 1.346a1 1 0 001.267.452h.001l.002-.001.003-.002.011-.004.031-.014a5.952 5.952 0 00.427-.215c.264-.147.62-.368.98-.669.7-.583 1.56-1.587 1.56-3.018 0-.755-.352-1.627-.73-2.385-.402-.802-.927-1.653-1.438-2.42a44.736 44.736 0 00-2.002-2.758l-.036-.045-.01-.012-.003-.005A1 1 0 0017 10zm-2.16 9.482c.056.046.111.09.167.13l1.11-2.083a1 1 0 011.765 0l1.111 2.084a3.93 3.93 0 00.167-.131c.5-.417.84-.913.84-1.482 0-.245-.148-.748-.52-1.49-.348-.698-.823-1.472-1.312-2.205A41.83 41.83 0 0017 12.647a41.83 41.83 0 00-1.168 1.658c-.489.733-.964 1.507-1.313 2.205-.37.742-.519 1.245-.519 1.49 0 .57.34 1.065.84 1.482z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Barrel.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Barrel.displayName = 'Barrel';
export default Barrel;
