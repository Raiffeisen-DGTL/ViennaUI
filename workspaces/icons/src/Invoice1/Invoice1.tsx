import React, { SVGAttributes } from 'react';

export interface Invoice1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Invoice1: React.FC<Invoice1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 9h8V7H8v2zm6 4H8v-2h6v2zm-6 4h8v-2H8v2z' />
            <path
                fillRule='evenodd'
                d='M4 21V3a1 1 0 011-1h.528a3 3 0 011.342.317l.683.341a1 1 0 00.894 0l.211-.105a3 3 0 012.684 0l.21.105a1 1 0 00.895 0l.211-.105a3 3 0 012.684 0l.21.105a1 1 0 00.895 0l.684-.341A3 3 0 0118.472 2H19a1 1 0 011 1v18a1 1 0 01-1 1h-.528a3 3 0 01-1.341-.317l-.684-.341a1 1 0 00-.894 0l-.211.105a3 3 0 01-2.684 0l-.21-.105a1 1 0 00-.895 0l-.211.105a3 3 0 01-2.684 0l-.21-.105a1 1 0 00-.895 0l-.683.341A3 3 0 015.527 22H5a1 1 0 01-1-1zM6.658 4.447L6 4.118v15.764l.658-.33a3 3 0 012.684 0l.21.106a1 1 0 00.895 0l.211-.105a3 3 0 012.684 0l.21.105a1 1 0 00.895 0l.211-.105a3 3 0 012.684 0l.658.329V4.118l-.658.33a3 3 0 01-2.684 0l-.21-.106a1 1 0 00-.895 0l-.211.105a3 3 0 01-2.684 0l-.21-.105a1 1 0 00-.895 0l-.211.105a3 3 0 01-2.684 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Invoice1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Invoice1.displayName = 'Invoice1';
export default Invoice1;
