import React, { SVGAttributes } from 'react';

export interface CourtProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Court: React.FC<CourtProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13.894 1.553a1 1 0 00-1.601-.26l-5 5a1 1 0 000 1.414L9 9.414v.137l-7.08 6.292a3 3 0 104.237 4.236L12.449 13h.137l1.707 1.707a1 1 0 001.414 0l5-5a1 1 0 00-.26-1.601L19 7.382V7a1 1 0 00-.293-.707l-3-3A1 1 0 0015 3h-.382l-.724-1.447zm-3.187 6.74L9.414 7l3.312-3.312.38.76A1 1 0 0014 5h.586L17 7.414V8a1 1 0 00.553.894l.759.38L15 12.586l-1.293-1.293A1 1 0 0013 11h-1a1 1 0 00-.748.336l-6.59 7.414a1 1 0 11-1.412-1.412l7.414-6.59A1 1 0 0011 10V9a1 1 0 00-.293-.707zM13 17a1 1 0 00-.832.445l-2 3A1 1 0 0011 22h11a1 1 0 00.832-1.555l-2-3A1 1 0 0020 17h-7zm-.132 3l.667-1h5.93l.666 1h-7.263z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Court.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Court.displayName = 'Court';
export default Court;
