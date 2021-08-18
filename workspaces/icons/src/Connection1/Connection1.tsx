import React, { SVGAttributes } from 'react';

export interface Connection1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Connection1: React.FC<Connection1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17.82 6.198a15.126 15.126 0 00-3.356-4.913l-1.399 1.43a13.127 13.127 0 012.913 4.263A12.873 12.873 0 0117 12c0 1.723-.347 3.43-1.022 5.022a13.126 13.126 0 01-2.913 4.263l1.399 1.43a15.124 15.124 0 003.356-4.913A14.872 14.872 0 0019 12c0-1.992-.401-3.963-1.18-5.802zm-3.817 1.546a11.09 11.09 0 00-2.46-3.602l-1.4 1.43a9.09 9.09 0 012.018 2.952 8.909 8.909 0 010 6.952 9.09 9.09 0 01-2.017 2.952l1.398 1.43a11.093 11.093 0 002.46-3.602 10.91 10.91 0 000-8.512zm-3.817 1.547A7.053 7.053 0 008.62 6.999L7.222 8.43a5.054 5.054 0 011.122 1.642 4.945 4.945 0 010 3.858c-.26.613-.64 1.17-1.122 1.642L8.621 17a7.053 7.053 0 001.565-2.292 6.944 6.944 0 000-5.418zm-3.817 1.546a3.018 3.018 0 00-.67-.98L3.58 12l2.12 2.143a2.982 2.982 0 00.67-3.307z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Connection1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Connection1.displayName = 'Connection1';
export default Connection1;
