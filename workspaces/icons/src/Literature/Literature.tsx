import React, { SVGAttributes } from 'react';

export interface LiteratureProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Literature: React.FC<LiteratureProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 9.75v6.586l-3.707 3.707 1.414 1.414 3.707-3.707H14a1 1 0 00.707-.293l1-1A1 1 0 0016 15.75v-1h1a1 1 0 00.707-.293l3-3c.26-.26.431-.587.55-.883.123-.307.216-.65.286-1.003.14-.704.207-1.522.207-2.321 0-.799-.066-1.617-.207-2.321a5.79 5.79 0 00-.286-1.004c-.119-.296-.29-.622-.55-.882-.26-.26-.587-.431-.883-.55a5.786 5.786 0 00-1.003-.286A12.191 12.191 0 0016.5 2c-.799 0-1.617.066-2.321.207-.352.07-.696.163-1.004.286-.296.119-.622.29-.882.55l-2 2A1 1 0 0010 5.75v1H9a1 1 0 00-.707.293l-2 2A1 1 0 006 9.75zm7.707-5.293L12 6.164V7.75a1 1 0 01-1 1H9.414L8 10.164v4.172l6.793-6.793 1.414 1.414-6.793 6.793h4.172l.413-.414L14 13.75a1 1 0 011-1h1.586l2.707-2.707c.008-.01.05-.07.107-.211.064-.161.127-.38.182-.653.109-.546.168-1.228.168-1.929 0-.701-.059-1.383-.168-1.929a3.824 3.824 0 00-.182-.653c-.057-.142-.1-.2-.107-.21a.958.958 0 00-.211-.108 3.826 3.826 0 00-.653-.182A10.216 10.216 0 0016.5 4c-.701 0-1.383.059-1.929.168a3.826 3.826 0 00-.653.182.972.972 0 00-.21.107z'
                clipRule='evenodd'
            />
            <path d='M8 21.75h13v-2H8v2z' />
        </svg>
    );
};

Literature.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Literature.displayName = 'Literature';
export default Literature;
