import React, { SVGAttributes } from 'react';

export interface BabbleQuestionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BabbleQuestion: React.FC<BabbleQuestionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 2a2 2 0 012 2v12a2 2 0 01-2 2h-7.586l-4 4H7v-1.414L11.586 16H20V4H4v12h3v2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zm-9 11h2v2h-2v-2zm1.85-1h-1.7v-.571a2.669 2.669 0 011.377-2.408A1.15 1.15 0 1010.85 8h-1.7a2.85 2.85 0 114.16 2.531.992.992 0 00-.46.9V12z' />
        </svg>
    );
};

BabbleQuestion.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BabbleQuestion.displayName = 'BabbleQuestion';
export default BabbleQuestion;
