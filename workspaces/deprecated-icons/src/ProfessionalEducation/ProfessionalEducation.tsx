import React, { SVGAttributes } from 'react';

export interface ProfessionalEducationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ProfessionalEducation: React.FC<ProfessionalEducationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 2v7h-3v11a2 2 0 01-2 2H9a2 2 0 01-2-2V9H2V5.586L5.586 2H16zm-5 18V9H9v11h2zm3-13V4H6.414L4 6.414V7h10zm2 4h6v8a3 3 0 01-6 0v-8zm4 8v-6h-2v6a1 1 0 002 0zm-2-9V5h-1V4l1-2h2l1 2v1h-1v5h-2z' />
        </svg>
    );
};

ProfessionalEducation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ProfessionalEducation.displayName = 'ProfessionalEducation';
export default ProfessionalEducation;
