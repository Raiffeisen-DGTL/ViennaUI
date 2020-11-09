import React, { SVGAttributes } from 'react';

export interface TrainingApparatusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TrainingApparatus: React.FC<TrainingApparatusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.448 16A3.978 3.978 0 0118 22H7.5a5.5 5.5 0 01-.881-10.922L5.8 8H4L3 7V6h6v2H7.8l.825 3.1a75.686 75.686 0 0110.326 2.993L16.266 4H14l-1-1V2h8v1l-1 1h-1.734l3.192 12h-.01zM18 20a2 2 0 00.665-3.887C14.279 14.557 9.152 13 7.5 13a3.5 3.5 0 000 7H18zM7.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3z' />
        </svg>
    );
};

TrainingApparatus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TrainingApparatus.displayName = 'TrainingApparatus';
export default TrainingApparatus;
