import React, { SVGAttributes } from 'react';

export interface TagPrice2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TagPrice2: React.FC<TagPrice2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19.707 2.707L17.914 4.5l.793.793A1 1 0 0119 6v1.3l2.703 2.673a1 1 0 01.297.711V21a1 1 0 01-1 1H9a1 1 0 01-1-1v-4.586l-5.707-5.707a1 1 0 010-1.414l7-7A1 1 0 0110 2h5a1 1 0 01.707.293l.793.793 1.793-1.793 1.414 1.414zM13.5 6.086l-.793-.793-1.414 1.414 3 3 1.414-1.414-.793-.793L16.5 5.914l.5.5v4.172l-6 6L4.414 10l6-6h4.172l.5.5L13.5 6.086zm5.5 4.027V11a1 1 0 01-.293.707l-7 7a1 1 0 01-1.414 0L10 18.414V20h10v-8.898l-1-.989z'
                clipRule='evenodd'
            />
        </svg>
    );
};

TagPrice2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TagPrice2.displayName = 'TagPrice2';
export default TagPrice2;
