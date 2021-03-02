import React, { SVGAttributes } from 'react';

export interface QuestionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Question: React.FC<QuestionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm-1 12h2v2h-2v-2zm2.066-1h-1.8a4.8 4.8 0 011.342-3.038l.446-.462a2.28 2.28 0 00.879-1.833 1.635 1.635 0 00-1.768-1.6A1.9 1.9 0 0010.4 10H8.6a3.7 3.7 0 013.566-3.734 3.5 3.5 0 013.567 3.484 3.911 3.911 0 01-1.4 3.056l-.433.426c-.689.719-.834.768-.834 1.768z' />
        </svg>
    );
};

Question.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Question.displayName = 'Question';
export default Question;
