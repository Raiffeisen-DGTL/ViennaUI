import React, { SVGAttributes } from 'react';

export interface FishingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fishing: React.FC<FishingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13.315 3.223a1.5 1.5 0 10-2.629 0c-.932.325-1.727.98-2.323 1.8C7.502 6.207 7 7.793 7 9.5c0 1.707.502 3.293 1.363 4.477.662.91 1.569 1.618 2.637 1.895V18a3 3 0 11-6 0v-1h2v-2H5v-2H3v5a5 5 0 009 3 4.98 4.98 0 002.087 1.62A5 5 0 0021 18v-5h-2v2h-2v2h2v1a3 3 0 11-6 0v-2.128c1.068-.277 1.975-.984 2.637-1.895C16.498 12.793 17 11.207 17 9.5c0-1.707-.502-3.293-1.363-4.477-.596-.82-1.39-1.475-2.322-1.8zM10.622 8.48c-.426-.338-.813-.84-1.104-1.48.134-.295.29-.563.462-.8C10.568 5.39 11.294 5 12 5s1.432.391 2.02 1.2c.172.237.328.505.463.8-.292.64-.679 1.142-1.105 1.48-.45.358-.926.52-1.378.52-.452 0-.927-.162-1.378-.52zm4 1.566c.13-.103.254-.212.374-.329-.04 1.24-.422 2.322-.976 3.084C13.432 13.609 12.706 14 12 14s-1.432-.391-2.02-1.2c-.554-.761-.936-1.843-.976-3.083.12.117.245.226.374.33.765.607 1.67.953 2.622.953s1.857-.346 2.622-.954z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Fishing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fishing.displayName = 'Fishing';
export default Fishing;
