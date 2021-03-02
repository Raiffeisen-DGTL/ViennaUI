import React, { SVGAttributes } from 'react';

export interface TagPrice3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TagPrice3: React.FC<TagPrice3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.293 16.707l-4-4 1.414-1.414 4 4-1.414 1.414zm-1-7l4 4 1.414-1.414-4-4-1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M19.914 5.5l2.793-2.793-1.414-1.414L18.5 4.086l-.793-.793A1 1 0 0017 3h-5a1 1 0 00-.707.293l-9 9a1 1 0 000 1.414l8 8a1 1 0 001.414 0l9-9A1 1 0 0021 12V7a1 1 0 00-.293-.707l-.793-.793zm-2.828 0l-.5-.5h-4.172l-8 8L11 19.586l8-8V7.414l-.5-.5-.502.503L18 7.5a1.5 1.5 0 11-1.416-1.498l.502-.502z'
                clipRule='evenodd'
            />
        </svg>
    );
};

TagPrice3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TagPrice3.displayName = 'TagPrice3';
export default TagPrice3;
