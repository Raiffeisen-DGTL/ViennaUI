import React, { SVGAttributes } from 'react';

export interface AccSaveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AccSave: React.FC<AccSaveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 5.5a1 1 0 011-1h17v-2H5a3 3 0 00-3 3v16a1 1 0 001 1h8a1 1 0 001-1v-6.586l2.293 2.293 1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4 1.414 1.414L10 14.914V20.5H4V8.33c.313.11.65.17 1 .17h15v3h-2a1 1 0 00-1 1v4a1 1 0 001 1h2v3h-6v2h7a1 1 0 001-1v-4a1 1 0 001-1v-4a1 1 0 00-1-1v-5H5a1 1 0 01-1-1zm15 8v2h2v-2h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AccSave.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AccSave.displayName = 'AccSave';
export default AccSave;
