import React, { SVGAttributes } from 'react';

export interface SignSignedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SignSigned: React.FC<SignSignedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.738 10.673L6.414 21.995H2V17.58L16.929 2.654a1.994 1.994 0 012.82 0l1.594 1.594a1.993 1.993 0 01.001 2.82L18.94 9.471l1.195 1.195a.85.85 0 010 1.202L16.6 15.404l-1.272.018.07-1.22 2.934-2.935-.594-.594zm-.212-2.616l2.399-2.399-1.586-1.587L4 18.408v1.587h1.586L16.324 9.26l-.926-.926L16.6 7.13l.926.927zM23 17.409l-6 6-3-3v-1.414h1.414L17 20.581l4.586-4.586H23v1.414z' />
        </svg>
    );
};

SignSigned.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SignSigned.displayName = 'SignSigned';
export default SignSigned;
