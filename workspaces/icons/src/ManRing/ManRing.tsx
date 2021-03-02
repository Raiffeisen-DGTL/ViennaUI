import React, { SVGAttributes } from 'react';

export interface ManRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ManRing: React.FC<ManRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 7.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10.5 11a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 00-5.607 13.706c.028-.06.057-.118.086-.175.503-1 1.532-1.531 2.56-1.531h5.923c1.027 0 2.056.53 2.56 1.53l.085.176A8 8 0 0012 4zM8.046 18.913a2.61 2.61 0 00-.013.035A7.963 7.963 0 0012 20a7.963 7.963 0 003.967-1.052l-.013-.035a5.571 5.571 0 00-.22-.483c-.122-.245-.406-.43-.772-.43H9.038c-.366 0-.65.185-.773.43a5.544 5.544 0 00-.219.483z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ManRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ManRing.displayName = 'ManRing';
export default ManRing;
