import React, { SVGAttributes } from 'react';

export interface Entertainment2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Entertainment2: React.FC<Entertainment2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.707 11.293a9.285 9.285 0 00-1.583-1.28 8.054 8.054 0 00-.256-7.51l-1.736.993a6.05 6.05 0 01.18 5.666 6.988 6.988 0 00-1.327-.28 6.427 6.427 0 00-1.61.019c-.2.028-.361.062-.478.09a1.985 1.985 0 00-.27.081 1 1 0 00-.576.612l-4 12a1 1 0 001.243 1.272l13-4A1 1 0 0016 18.05c.012-.236-.023-.474-.056-.707a8.84 8.84 0 00-.37-1.534c-.418-1.255-1.244-2.894-2.866-4.516zm-7.757 5.02l.634-1.903 6.736 3.368-2.216.682-5.154-2.148zm-.634 1.902l-.753 2.258 3.55-1.093-2.797-1.165zm9.265-2.042l-7.358-3.68.542-1.626a4.498 4.498 0 011 .002c.915.102 2.2.51 3.528 1.838 1.258 1.258 1.929 2.502 2.289 3.466z'
                clipRule='evenodd'
            />
            <path d='M13.293 8.293l1.15-1.15a10.794 10.794 0 017.584-3.16l.009 2a8.793 8.793 0 00-6.18 2.575l-1.149 1.15-1.414-1.415zm4.574 8.716a4.777 4.777 0 014.218 1.575l.665.755-1.5 1.322-.665-.754a2.777 2.777 0 00-2.452-.916l-.265-1.982z' />
            <path fillRule='evenodd' d='M3 2v2H1v2h2v2h2V6h2V4H5V2H3zm2 2v2H3V4h2z' clipRule='evenodd' />
            <path d='M14 2v2h2V2h-2zm2 21v-2h2v2h-2z' />
            <path fillRule='evenodd' d='M19 11h-2v2h2v2h2v-2h2v-2h-2V9h-2v2zm2 0v2h-2v-2h2z' clipRule='evenodd' />
        </svg>
    );
};

Entertainment2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Entertainment2.displayName = 'Entertainment2';
export default Entertainment2;
