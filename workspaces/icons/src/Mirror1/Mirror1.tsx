import React, { SVGAttributes } from 'react';

export interface Mirror1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mirror1: React.FC<Mirror1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.707 7.707l-5 5-1.414-1.414 5-5 1.414 1.414zm3 2l-5 5-1.414-1.414 5-5 1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M12 2a9.465 9.465 0 00-3.423.639 9.055 9.055 0 00-2.918 1.828 8.487 8.487 0 00-1.965 2.759A8.095 8.095 0 003 10.5c0 1.126.237 2.238.694 3.274a8.487 8.487 0 001.965 2.759 9.055 9.055 0 002.918 1.828 9.435 9.435 0 002.423.586V20H6v2h12v-2h-5v-1.053a9.435 9.435 0 002.424-.586 9.056 9.056 0 002.917-1.828 8.486 8.486 0 001.965-2.759A8.096 8.096 0 0021 10.5a8.095 8.095 0 00-.694-3.274 8.487 8.487 0 00-1.965-2.759 9.056 9.056 0 00-2.918-1.828A9.465 9.465 0 0012 2zM9.3 4.503A7.465 7.465 0 0112 4c.928 0 1.845.171 2.7.503a7.056 7.056 0 012.273 1.423 6.486 6.486 0 011.503 2.108c.347.784.524 1.622.524 2.466 0 .844-.177 1.682-.524 2.466a6.487 6.487 0 01-1.503 2.108 7.055 7.055 0 01-2.273 1.423A7.465 7.465 0 0112 17a7.465 7.465 0 01-2.7-.503 7.055 7.055 0 01-2.273-1.423 6.488 6.488 0 01-1.503-2.108A6.095 6.095 0 015 10.5c0-.844.177-1.682.524-2.466a6.488 6.488 0 011.503-2.108 7.055 7.055 0 012.274-1.423z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Mirror1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mirror1.displayName = 'Mirror1';
export default Mirror1;
