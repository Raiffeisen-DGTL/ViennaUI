import React, { SVGAttributes } from 'react';

export interface TagPrice4Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TagPrice4: React.FC<TagPrice4Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.293 9.707l4 4 1.414-1.414-4-4-1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M19.707 2.707L17.914 4.5l.793.793A1 1 0 0119 6v1.3l2.703 2.673a1 1 0 01.297.711V21a1 1 0 01-1 1H9a1 1 0 01-1-1v-4.586l-5.707-5.707a1 1 0 010-1.414l7-7A1 1 0 0110 2h5a1 1 0 01.707.293l.793.793 1.793-1.793 1.414 1.414zM13.5 6.086l-.793-.793-1.414 1.414 3 3 1.414-1.414-.793-.793L16.5 5.914l.5.5v4.172l-6 6L4.414 10l6-6h4.172l.5.5L13.5 6.086zM10 20v-1.586l.293.293a1 1 0 001.414 0l.707-.707H18v-2h-3.586l4.293-4.293A1 1 0 0019 11v-.887l1 .989V20H10z'
                clipRule='evenodd'
            />
        </svg>
    );
};

TagPrice4.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TagPrice4.displayName = 'TagPrice4';
export default TagPrice4;
