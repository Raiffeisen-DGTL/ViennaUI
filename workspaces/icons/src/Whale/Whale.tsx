import React, { SVGAttributes } from 'react';

export interface WhaleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Whale: React.FC<WhaleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 2a5 5 0 014 2 4.992 4.992 0 012.087-1.62A5 5 0 0119 2v2a3 3 0 00-3 3h-2a3 3 0 00-3-3V2zm7 14a1 1 0 11-2 0 1 1 0 012 0zm-2.894 3.435a2 2 0 001.788 0l1.317-.659a4 4 0 013.578 0l.658.33a1 1 0 01-.894 1.788l-.659-.329a2 2 0 00-1.788 0l-1.317.659a4 4 0 01-3.578 0l-1.317-.659a2 2 0 00-1.788 0l-1.317.659a4 4 0 01-3.578 0l-1.317-.659a2 2 0 00-1.788 0l-.659.33a1 1 0 11-.894-1.79l.658-.329a4 4 0 013.578 0l1.317.659a2 2 0 001.788 0l1.317-.659a4 4 0 013.578 0l1.317.659z' />
            <path d='M2.465 9L3 9.803V14a3 3 0 004.148 2.772 1.74 1.74 0 00.49-.33c.114-.104.23-.226.34-.35.224-.247.47-.553.702-.852.45-.583.91-1.236 1.057-1.49A5.5 5.5 0 0120 16.5v.5h2v-.5a7.5 7.5 0 00-13.995-3.75c-.074.128-.462.69-.909 1.268-.217.281-.43.543-.605.738-.08.09-.144.155-.19.197A1 1 0 015 14V9.803L5.535 9H7a1 1 0 001-1V7H5a1 1 0 00-.832.445L4 7.697l-.168-.252A1 1 0 003 7H0v1a1 1 0 001 1h1.465z' />
        </svg>
    );
};

Whale.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Whale.displayName = 'Whale';
export default Whale;
