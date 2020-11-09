import React, { SVGAttributes } from 'react';

export interface UmbrellaProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Umbrella: React.FC<UmbrellaProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.815 12.077l-.215-1.068a9.823 9.823 0 00-8.6-7.78V2h-2v3l.11-.041v.051c.295-.035.593-.054.89-.056a8.042 8.042 0 017.557 5.346H4.443a8.049 8.049 0 015.748-5.132V3.346A9.824 9.824 0 002.4 11.009l-.217 1.068H11V18.5a1.5 1.5 0 01-3 0v-.583H6v.583a3.5 3.5 0 007 0v-6.423h8.815z' />
        </svg>
    );
};

Umbrella.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Umbrella.displayName = 'Umbrella';
export default Umbrella;
