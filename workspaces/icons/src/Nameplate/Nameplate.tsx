import React, { SVGAttributes } from 'react';

export interface NamePlateProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const NamePlate: React.FC<NamePlateProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.5 18.035l1.415-1.414-3.536-3.536L5.965 14.5 9.5 18.035z' />
            <path
                fillRule='evenodd'
                d='M20.814 3.186a6.002 6.002 0 00-8.485 0L1.722 13.793a1 1 0 000 1.414l7.071 7.07a1 1 0 001.414 0l7.071-7.07a1 1 0 00.168-1.193l-2.08-3.741c-.359-.648-.586-1.06-.722-1.39-.127-.306-.13-.441-.119-.531l.002-.015c.014-.09.055-.219.26-.478.222-.28.553-.613 1.077-1.138a1.006 1.006 0 011.414 0 1.006 1.006 0 010 1.415l-.056.056a2.498 2.498 0 000 3.536 2.498 2.498 0 003.535 0l.057-.057a6.002 6.002 0 000-8.485zM13.743 4.6a4.002 4.002 0 015.657 0 4.002 4.002 0 010 5.657l-.057.057a.498.498 0 01-.707 0 .498.498 0 010-.708l.057-.056a3.006 3.006 0 000-4.243 3.006 3.006 0 00-4.243 0l-.038.038c-.475.475-.89.89-1.193 1.272-.326.412-.587.864-.67 1.428l-.006.044c-.075.566.052 1.072.252 1.557.186.45.471.964.797 1.55l1.739 3.13-5.83 5.83L3.842 14.5l9.9-9.9z'
                clipRule='evenodd'
            />
        </svg>
    );
};

NamePlate.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

NamePlate.displayName = 'NamePlate';
export default NamePlate;
