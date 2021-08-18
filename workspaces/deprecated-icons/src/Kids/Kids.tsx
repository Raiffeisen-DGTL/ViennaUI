import React, { SVGAttributes } from 'react';

export interface KidsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Kids: React.FC<KidsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.87 7.799l.51-1.248L8.48 7h4.549a6.936 6.936 0 016.31-4.559h.461l.269.373c.561.772 1.592 2.486 2.271 3.638a1.706 1.706 0 01-.256 2.062l-.673.685a1.708 1.708 0 01-2.3.131l-.268-.218-.39.672 1.935 4.683-.044.052c-.405.48-.852.922-1.336 1.322l-2.559-6.192 1.895-3.259 1.838 1.494.571-.582c-.454-.775-1.265-2.144-1.865-3.031-3.298.312-4.306 3.724-4.349 3.876l-.186.653H8.406l-2.821 6.9a10.4 10.4 0 01-1.174-1.181l-.193-.232L6.87 7.799a1.718 1.718 0 00-1.45-1.006A1.636 1.636 0 003.8 8.442v1.52H2v-1.52a3.439 3.439 0 013.424-3.45A3.47 3.47 0 018.479 7h.002l-1.611.799zm5.507 13.232a13.215 13.215 0 01-10.192-4.788l1.385-1.15a11.444 11.444 0 0017.615 0l1.385 1.15a13.214 13.214 0 01-10.193 4.788zm-4.858-3.996A10.208 10.208 0 016 16.06l1.773-2.412a5.486 5.486 0 014.45-2.283 5.339 5.339 0 014.172 1.931c.592.73 2.061 2.744 2.124 2.83l.05.068c-.483.36-.997.679-1.536.95-.159-.219-1.502-2.061-2.033-2.711a3.547 3.547 0 00-2.773-1.267 3.683 3.683 0 00-2.993 1.54l-1.715 2.329z' />
        </svg>
    );
};

Kids.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Kids.displayName = 'Kids';
export default Kids;
