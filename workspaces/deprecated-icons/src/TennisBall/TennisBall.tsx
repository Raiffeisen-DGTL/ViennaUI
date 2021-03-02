import React, { SVGAttributes } from 'react';

export interface TennisBallProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TennisBall: React.FC<TennisBallProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.159 6.239l.003-.004a9.938 9.938 0 010 11.524 6.9 6.9 0 01-1.362-1.166 8.191 8.191 0 000-9.192 6.9 6.9 0 011.359-1.162zM3.792 12a8.163 8.163 0 001.42 4.608 6.9 6.9 0 01-1.364 1.163 9.935 9.935 0 010-11.542 6.9 6.9 0 011.364 1.163A8.163 8.163 0 003.792 12zm2.134-5.5a8 8 0 00-1.369-1.155 9.952 9.952 0 0114.893.008 7.886 7.886 0 00-1.08.892 8.023 8.023 0 000 11.508 7.96 7.96 0 001.08.892 9.952 9.952 0 01-14.893.009A8 8 0 005.926 17.5a8.047 8.047 0 000-11zm1.493 12.29h-.001a8.1 8.1 0 009.185-.016 10.1 10.1 0 010-13.544 8.1 8.1 0 00-9.184-.016 10.1 10.1 0 010 13.576z' />
        </svg>
    );
};

TennisBall.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TennisBall.displayName = 'TennisBall';
export default TennisBall;
