import React, { SVGAttributes } from 'react';

export interface QuestionFillProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const QuestionFill: React.FC<QuestionFillProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fill='currentColor'
                fillRule='evenodd'
                d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-.734-7a4.8 4.8 0 011.342-3.038l.446-.462c.564-.44.89-1.118.879-1.833a1.635 1.635 0 00-1.768-1.6A1.9 1.9 0 0010.4 10H8.6a3.7 3.7 0 013.566-3.734 3.5 3.5 0 013.567 3.484 3.911 3.911 0 01-1.4 3.056l-.433.426-.175.18c-.54.556-.659.679-.659 1.588h-1.8zM13 18v-2h-2v2h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

QuestionFill.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

QuestionFill.displayName = 'QuestionFill';
export default QuestionFill;
