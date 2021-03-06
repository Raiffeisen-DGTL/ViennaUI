import React, { SVGAttributes } from 'react';

export interface PhoneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Phone: React.FC<PhoneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.673 2.919a2 2 0 013.129.385l1.94 3.232a2 2 0 01-.301 2.443l-1.027 1.027c.21.43.736 1.26 2.031 2.555 1.295 1.295 2.125 1.82 2.555 2.03l1.026-1.026a2 2 0 012.444-.3l3.232 1.939a2 2 0 01.385 3.129l-2.509 2.509c-.556.556-1.36.915-2.24.806-1.747-.218-5.693-1.097-9.314-4.653-3.656-3.59-4.492-7.609-4.682-9.361-.094-.867.265-1.65.81-2.193l2.52-2.522zm1.414 1.414L4.565 6.855c-.19.19-.253.396-.235.563.16 1.477.88 4.993 4.095 8.15 3.207 3.15 6.683 3.911 8.16 4.095.172.021.386-.042.58-.236l2.508-2.508-3.232-1.94-1.179 1.179c-.339.339-.958.674-1.674.426-.694-.24-1.836-.887-3.557-2.609-1.722-1.722-2.37-2.864-2.61-3.557-.248-.716.088-1.335.427-1.674l1.178-1.179-1.939-3.232z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Phone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Phone.displayName = 'Phone';
export default Phone;
