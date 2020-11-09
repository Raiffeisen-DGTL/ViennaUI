import React, { SVGAttributes } from 'react';

export interface MusicProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Music: React.FC<MusicProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 7.8v8.418a4.924 4.924 0 00-2.589-.156c-2.2.44-3.663 2.078-3.333 3.724.213.9.867 1.633 1.738 1.945a4.525 4.525 0 001.712.32c.356 0 .712-.036 1.061-.107 2.142-.428 3.411-1.886 3.411-3.6v-7.01l8-2.667v3.548a4.924 4.924 0 00-2.589-.156c-2.2.44-3.663 2.078-3.333 3.724.213.9.867 1.633 1.738 1.945a4.521 4.521 0 001.712.32c.356 0 .712-.036 1.061-.107A3.9 3.9 0 0021 14.216v-9.8a1.741 1.741 0 00-2.291-1.651l-7.941 2.646A2.23 2.23 0 009 7.8zM7.2 19.98a2.89 2.89 0 01-1.618-.1.821.821 0 01-.539-.486c-.08-.4.567-1.133 1.765-1.372a3.41 3.41 0 01.668-.068c.325-.005.647.053.95.17.245.07.445.25.539.486.076.398-.571 1.131-1.765 1.37zm10-4c-.538.122-1.1.087-1.618-.1a.821.821 0 01-.539-.486c-.08-.4.567-1.133 1.765-1.372a3.41 3.41 0 01.668-.068c.325-.005.647.053.95.17.245.07.445.25.539.486.076.398-.571 1.131-1.765 1.37zM11 9.226V7.441l8-2.666v1.784l-8 2.667z' />
        </svg>
    );
};

Music.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Music.displayName = 'Music';
export default Music;
