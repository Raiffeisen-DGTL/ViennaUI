import React, { SVGAttributes } from 'react';

export interface ViberProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Viber: React.FC<ViberProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fill='#2B2D33'
                d='M19.914 11.787a7.207 7.207 0 00-7.67-7.708l.097-2.071a9.284 9.284 0 016.965 2.726 9.248 9.248 0 012.683 6.97l-2.075.083zM14.158 9.827c.568.57.753 1.418.474 2.173l2.139-.09a4.094 4.094 0 00-1.14-3.536 4.111 4.111 0 00-3.536-1.164L12 9.35a2.074 2.074 0 012.158.477z'
            />
            <path
                fill='#2B2D33'
                fillRule='evenodd'
                d='M9.417 12.153l-2.938 2.883c.311.412.645.791 1.007 1.146.485.476 1.03.915 1.651 1.331l2.685-2.647a1.513 1.513 0 011.845-.21l3.63 2.156c.896.547.945 1.81.093 2.422l-2.483 2.578a1.01 1.01 0 01-.93.128c-2.05-.737-3.757-1.479-5.196-2.334a1.003 1.003 0 01-.041-.025c-1.01-.603-1.888-1.264-2.659-2.019-1.885-1.847-3.045-4.174-4.038-7.365a.96.96 0 01.12-.82l2.663-2.719c.581-.865 1.87-.88 2.47-.028l2.292 3.656c.41.581.338 1.367-.171 1.867zm-5.334-2.09l1.999-1.73 1.635 2.73-2.308 2.264c-.485-.93-.915-2.002-1.326-3.264zm10.082 9.864c-1.248-.462-2.324-.918-3.26-1.391l2.047-2.019 2.67 1.57-1.457 1.84z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Viber.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Viber.displayName = 'Viber';
export default Viber;
