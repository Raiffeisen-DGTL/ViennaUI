import React, { SVGAttributes } from 'react';

export interface OnboardingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Onboarding: React.FC<OnboardingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 1v5h2V1h-2zm-.793 5.293l-3.5-3.5-1.414 1.414 3.5 3.5 1.414-1.414z' />
            <path
                fillRule='evenodd'
                d='M4.5 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM3 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'
                clipRule='evenodd'
            />
            <path d='M11.143 11.014l3.29 5.486h2.096c1.026 0 1.81.012 2.473.31.605.271 1.125.714 1.49 1.464.374.772.612 1.931.51 3.667L23 22.06c.114-1.95-.137-3.482-.709-4.659-.582-1.2-1.465-1.965-2.47-2.415-1.084-.486-2.273-.486-3.193-.485h-1.06l-2.71-4.514-1.714 1.028zm-7.23 4.07c1.8-1.039 3.95-.922 5.345-.55l-.516 1.932c-1.105-.294-2.655-.328-3.83.35-1.07.617-2.098 1.986-1.914 5.125l-1.996.118c-.216-3.662 1.005-5.876 2.91-6.975z' />
            <path
                fillRule='evenodd'
                d='M16 10.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM19.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
                clipRule='evenodd'
            />
            <path d='M17.293 2.793l-3.5 3.5 1.414 1.414 3.5-3.5-1.414-1.414z' />
        </svg>
    );
};

Onboarding.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Onboarding.displayName = 'Onboarding';
export default Onboarding;
