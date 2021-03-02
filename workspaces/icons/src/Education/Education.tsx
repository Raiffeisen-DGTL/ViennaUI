import React, { SVGAttributes } from 'react';

export interface EducationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Education: React.FC<EducationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.553 3.106a1 1 0 01.894 0l10 5A1 1 0 0123 9v6h-2v-4.382l-2 1V19a1 1 0 01-.293.707l-.001.002-.002.001-.004.004-.01.01-.014.014-.015.014a5.847 5.847 0 01-.435.36 8.39 8.39 0 01-1.279.782C15.825 21.456 14.173 22 12 22s-3.825-.544-4.947-1.106a8.387 8.387 0 01-1.278-.781 5.816 5.816 0 01-.34-.274l-.141-.131h-.001A1 1 0 015 19v-7.382L1.553 9.894a1 1 0 010-1.788l10-5zm.894 11.788l4.502-2.25L17 18.53a6.438 6.438 0 01-.947.575c-.878.438-2.226.894-4.053.894s-3.175-.456-4.053-.894A6.438 6.438 0 017 18.53v-5.913l4.553 2.276a1 1 0 00.894 0zM4.237 9L12 12.882 19.764 9 12 5.118 4.236 9z'
                clipRule='evenodd'
            />
            <path d='M21 17v2h2v-2h-2z' />
        </svg>
    );
};

Education.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Education.displayName = 'Education';
export default Education;
