import React, { SVGAttributes } from 'react';

export interface TargetOperationsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TargetOperations: React.FC<TargetOperationsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.462 5.89L12.28 9.07l-1.414-1.414 1.567-1.567a7 7 0 104.517 2.037l1.414-1.415a9 9 0 11-6.126-2.632l-1.372-1.373 1.414-1.414 3.182 3.182a1 1 0 010 1.414z' />
            <path d='M9.879 10.879a3 3 0 104.242 0l1.415-1.415a5 5 0 11-7.072 0L9.88 10.88z' />
            <path d='M12 14a1 1 0 100-2 1 1 0 000 2z' />
        </svg>
    );
};

TargetOperations.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TargetOperations.displayName = 'TargetOperations';
export default TargetOperations;
