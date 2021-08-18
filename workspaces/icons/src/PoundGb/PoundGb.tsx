import React, { SVGAttributes } from 'react';

export interface PoundGbProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoundGb: React.FC<PoundGbProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.464 4.464A5 5 0 0117 8h-2a3 3 0 00-5.121-2.121c-.25.25-.477.625-.642 1.05C9.07 7.356 9 7.752 9 8c0 .628.2 1.333.46 2.218l.019.066c.153.52.326 1.108.43 1.716H13v2h-3v3.472c.766 0 1.532.176 2.236.528l.422.211a3 3 0 002.684 0l2.21-1.105.895 1.788L16.236 20a5 5 0 01-4.472 0l-.422-.211a3 3 0 00-2.684 0l-2.21 1.105-.895-1.788L7.763 18A5.03 5.03 0 018 17.89V14H6v-2h1.87c-.082-.369-.198-.77-.33-1.218l-.019-.066C7.285 9.915 7 8.947 7 8c0-.552.14-1.195.372-1.795.234-.601.592-1.24 1.092-1.74z' />
        </svg>
    );
};

PoundGb.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoundGb.displayName = 'PoundGb';
export default PoundGb;
