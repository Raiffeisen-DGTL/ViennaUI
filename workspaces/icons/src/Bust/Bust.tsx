import React, { SVGAttributes } from 'react';

export interface BustProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bust: React.FC<BustProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2C9.904 2 8.5 3.97 8.5 6c0 2.03 1.404 4 3.5 4s3.5-1.97 3.5-4c0-2.03-1.404-4-3.5-4zm-1.5 4c0-1.283.835-2 1.5-2s1.5.717 1.5 2-.835 2-1.5 2-1.5-.717-1.5-2zm6.031 12.039c-.99.44-2.23.79-3.531.913V20h4v2H7v-2h4v-1.048a11.598 11.598 0 01-3.531-.913c-.619-.275-1.18-.603-1.604-.967C5.495 16.754 5 16.216 5 15.5c0-.763.352-1.728.97-2.5.642-.803 1.658-1.5 3.03-1.5h6c1.372 0 2.388.697 3.03 1.5.618.772.97 1.737.97 2.5 0 .716-.495 1.254-.865 1.572-.424.364-.985.692-1.604.967zm-9.524-2.643c.028.034.077.086.16.157.231.199.608.433 1.114.658A9.54 9.54 0 0012 17a9.54 9.54 0 003.719-.789c.506-.225.883-.46 1.115-.658.082-.07.131-.123.159-.157-.034-.267-.19-.729-.524-1.146-.357-.447-.84-.75-1.469-.75H9c-.628 0-1.112.303-1.47.75-.333.417-.489.879-.523 1.146z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bust.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bust.displayName = 'Bust';
export default Bust;
