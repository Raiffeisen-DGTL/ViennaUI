import React, { SVGAttributes } from 'react';

export interface BabbleLogoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BabbleLogo: React.FC<BabbleLogoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.682 7.9l-.47.399c.046-1.592 1.383-3.223 2.683-2.151l1.73 1.671-.408.368.776.763.8-.783-.322-.388 1.578-1.565c1.355-1.315 2.993 1.059 2.71 2.105l-.48-.369-1.493 1.493-.5-.407v-1l-.388.329v1.274l-.618.6 3.22 3.216-1.366 1.345-3.249-3.252-3.144 3.19L7.4 13.37l3.209-3.168-.631-.631V8.315l-.322-.244v.961l-.52.434L7.682 7.9zM20 2a2 2 0 012 2v12a2 2 0 01-2 2h-7.586l-4 4H7v-1.414L11.586 16H20V4H4v12h3v2H4a2 2 0 01-2-2V4a2 2 0 012-2h16z' />
        </svg>
    );
};

BabbleLogo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BabbleLogo.displayName = 'BabbleLogo';
export default BabbleLogo;
