import React, { SVGAttributes } from 'react';

export interface BalloonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Balloon: React.FC<BalloonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17.5 3.206c-1.507-.87-3.302-1.071-5.037-.604-1.73.465-3.286 1.562-4.399 3.063-1.113 1.5-1.728 3.329-1.718 5.155.007 1.307.106 2.595.79 3.758l-1.352 1.064a1 1 0 00.118 1.652l1.401.81c-.236.17-.51.354-.817.538C5.324 19.34 3.753 20 2 20v2c2.246 0 4.176-.84 5.514-1.642a13.478 13.478 0 001.66-1.175l1.924 1.111a1 1 0 001.49-.723l.245-1.704c1.35.011 2.514-.547 3.65-1.194 1.587-.905 2.862-2.352 3.605-4.066.743-1.714.915-3.61.453-5.341-.463-1.736-1.534-3.19-3.041-4.06zm-4.517 1.327c1.258-.339 2.502-.181 3.517.405 1.015.586 1.773 1.584 2.109 2.843.337 1.264.221 2.698-.356 4.03-.577 1.333-1.564 2.442-2.761 3.124-1.358.774-2.246 1.093-3.285.854l-1.06-.244-.328 2.279L8.18 16.3l1.81-1.424-.741-.796c-.728-.78-.895-1.708-.904-3.271-.007-1.378.46-2.787 1.324-3.953.866-1.167 2.05-1.984 3.313-2.324z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Balloon.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Balloon.displayName = 'Balloon';
export default Balloon;
