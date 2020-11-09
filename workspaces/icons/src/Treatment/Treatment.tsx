import React, { SVGAttributes } from 'react';

export interface TreatmentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Treatment: React.FC<TreatmentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.441 6C21.302 6 22 6.698 22 7.559v10.453C22 19.11 21.11 20 20.012 20H19v2h-2v-2H7v2H5v-2H3.559A1.558 1.558 0 012 18.441V7.559C2 6.698 2.698 6 3.559 6h16.882zM20 18V8.031L19.969 8H4v10h16zM10 4v1H8v-.958C8 2.914 8.914 2 10.042 2h3.916C15.086 2 16 2.914 16 4.042V5h-2V4h-4zm3 6v2h2v2h-2v2h-2v-2H9v-2h2v-2h2z' />
        </svg>
    );
};

Treatment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Treatment.displayName = 'Treatment';
export default Treatment;
