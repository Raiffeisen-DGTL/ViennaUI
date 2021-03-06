import React, { SVGAttributes } from 'react';

export interface IdeasRaitingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const IdeasRaiting: React.FC<IdeasRaitingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.33.828a.4.4 0 00-.66 0l-.968 1.412-1.642.484a.4.4 0 00-.204.628L9.9 4.709 9.853 6.42a.4.4 0 00.534.388L12 6.234l1.613.574a.4.4 0 00.534-.388L14.1 4.71l1.044-1.357a.4.4 0 00-.204-.628l-1.642-.484L12.33.828zm-8 3.5a.4.4 0 00-.66 0L2.702 5.74l-1.642.484a.4.4 0 00-.204.628L1.9 8.209 1.853 9.92a.4.4 0 00.534.388L4 9.734l1.613.574a.4.4 0 00.534-.388L6.1 8.21l1.044-1.357a.4.4 0 00-.204-.628L5.298 5.74 4.33 4.328zm15.34 0a.4.4 0 01.66 0l.968 1.412 1.642.484a.4.4 0 01.204.628L22.1 8.209l.047 1.711a.4.4 0 01-.534.388L20 9.734l-1.613.574a.4.4 0 01-.534-.388l.047-1.71-1.044-1.357a.4.4 0 01.204-.628l1.642-.484.968-1.412z' />
            <path
                fillRule='evenodd'
                d='M8.369 10.514A6.19 6.19 0 0112 9.346a6.19 6.19 0 013.631 1.168 5.721 5.721 0 012.16 3.063 5.487 5.487 0 01-.256 3.707 5.947 5.947 0 01-2.035 2.481v1.581a1 1 0 01-.445.832l-1.5 1a1 1 0 01-.555.168h-2a1 1 0 01-.555-.168l-1.5-1a1 1 0 01-.445-.832v-1.58a5.947 5.947 0 01-2.035-2.482 5.487 5.487 0 01-.257-3.707 5.722 5.722 0 012.161-3.063zm3.631.832a4.19 4.19 0 00-2.457.787 3.722 3.722 0 00-1.41 1.99 3.487 3.487 0 00.164 2.358 3.914 3.914 0 001.682 1.851l.521.284v2.195l.803.535h1.394l.803-.535v-2.195l.52-.284a3.914 3.914 0 001.683-1.85 3.49 3.49 0 00.165-2.36 3.721 3.721 0 00-1.411-1.99A4.19 4.19 0 0012 11.347z'
                clipRule='evenodd'
            />
        </svg>
    );
};

IdeasRaiting.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

IdeasRaiting.displayName = 'IdeasRaiting';
export default IdeasRaiting;
