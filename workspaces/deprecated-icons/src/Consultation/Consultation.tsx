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
            <path d='M12 11.831a4 4 0 01-4-4v-1a4 4 0 118 0v1a4 4 0 01-4 4zm-2-5v1a2 2 0 104 0v-1a2 2 0 10-4 0zm1 15v-6h2v6l-1 1-1-1zm0-9h2v2h-2v-2zm7.4 2.831l1.6 7.173h-2.052l-1.5-6.735a1.624 1.624 0 00-1.576-1.269H14v-2h.871a3.593 3.593 0 013.529 2.831zm-12.8 0a3.593 3.593 0 013.528-2.831H10v2h-.869a1.624 1.624 0 00-1.576 1.265l-1.5 6.735H4l1.6-7.169z' />
        </svg>
    );
};

Consultation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Consultation.displayName = 'Consultation';
export default Consultation;
