import React, { SVGAttributes } from 'react';

export interface AlcoholAndTobaccoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AlcoholAndTobacco: React.FC<AlcoholAndTobaccoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3.293 3.293A1 1 0 014 3h8a1 1 0 011 1v4h-2V5H5v6a3 3 0 004.5 2.6l1 1.73c-.459.266-.964.46-1.5.57V19h3v2H4v-2h3v-3.1A5.002 5.002 0 013 11V4a1 1 0 01.293-.707zm17.414-1a1 1 0 010 1.414l-1 1a.414.414 0 000 .586 2.414 2.414 0 010 3.414l-.162.162a.644.644 0 00-.12.743l.47.94a1 1 0 11-1.79.895l-.47-.94a2.644 2.644 0 01.496-3.052l.162-.162a.414.414 0 000-.586 2.414 2.414 0 010-3.414l1-1a1 1 0 011.414 0z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M8 9h2a4 4 0 014 4v3a2 2 0 002 2v-4a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-5a4 4 0 01-4-4v-3a2 2 0 00-2-2H8V9zm10 9h2v-3h-2v3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AlcoholAndTobacco.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AlcoholAndTobacco.displayName = 'AlcoholAndTobacco';
export default AlcoholAndTobacco;
