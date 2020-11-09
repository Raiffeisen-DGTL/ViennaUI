import React, { SVGAttributes } from 'react';

export interface PostServicesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PostServices: React.FC<PostServicesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 5V2h-3v1h-2V2h-2v1h-2V2H9v1H7V2H4v3h1v2H4v2h1v2H4v2h1v2H4v2h1v2H4v3h3v-1h2v1h2v-1h2v1h2v-1h2v1h3v-3h-1v-2h1v-2h-1v-2h1v-2h-1V9h1V7h-1V5h1zm-3 14H7V5h10v14z' />
        </svg>
    );
};

PostServices.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PostServices.displayName = 'PostServices';
export default PostServices;
