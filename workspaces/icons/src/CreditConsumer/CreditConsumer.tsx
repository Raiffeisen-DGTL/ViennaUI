import React, { SVGAttributes } from 'react';

export interface CreditConsumerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditConsumer: React.FC<CreditConsumerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.47 1.304A4 4 0 0118 5v1h2a2 2 0 012 2v11a2 2 0 01-2 2h-4v-2h4V8h-2v2h-2V8h-4v2h-2V8H8v3H6V8a2 2 0 012-2h2V5a4 4 0 012.47-3.696zM16 5v1h-4V5a2 2 0 114 0z'
                clipRule='evenodd'
            />
            <path d='M12 18.5a2 2 0 100 4 2 2 0 000-4zm-10-4a2 2 0 114 0 2 2 0 01-4 0zm2.207 8.207l9-9-1.414-1.414-9 9 1.414 1.414z' />
        </svg>
    );
};

CreditConsumer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditConsumer.displayName = 'CreditConsumer';
export default CreditConsumer;
