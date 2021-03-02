import React, { SVGAttributes } from 'react';

export interface ConsultationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Consultation: React.FC<ConsultationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
            <path d='M13 16v-2h-2v2h2zm0 2v4h-2v-4h2zm-4.634-4.195C5.21 15.322 3.5 18.7 3.5 22h2c0-2.673 1.39-5.267 3.732-6.393l-.866-1.802zm6.402 1.802C17.11 16.734 18.5 19.327 18.5 22h2c0-3.299-1.71-6.678-4.865-8.195l-.867 1.802z' />
        </svg>
    );
};

Consultation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Consultation.displayName = 'Consultation';
export default Consultation;
