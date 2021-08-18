import React, { SVGAttributes } from 'react';

export interface CatProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cat: React.FC<CatProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 15a1 1 0 100-2 1 1 0 000 2zm4-4a1 1 0 110-2 1 1 0 010 2zm-8 0a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M4.707 1.293a1 1 0 00-1.702.608l-1 10A1.003 1.003 0 002 12H0a2 2 0 002 2h.2c.141.696.355 1.365.632 2H1a2 2 0 002 2h1a9.985 9.985 0 008 4 9.985 9.985 0 008-4h1a2 2 0 002-2h-1.832c.277-.635.49-1.304.632-2h.2a2 2 0 002-2h-2c0-.033-.002-.066-.005-.1l-1-10a1 1 0 00-1.702-.607L15.586 5H8.414L4.707 1.293zM18.93 16a7.96 7.96 0 00.818-2H16a2 2 0 012-2h1.995l-.78-7.8-2.508 2.507A1 1 0 0116 7H8a1 1 0 01-.707-.293L4.785 4.2l-.78 7.8H6a2 2 0 012 2H4.252c.183.71.46 1.381.818 2H7a2 2 0 012 2H6.708A7.97 7.97 0 0012 20a7.97 7.97 0 005.292-2H15a2 2 0 012-2h1.93z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cat.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cat.displayName = 'Cat';
export default Cat;
