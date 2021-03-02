import React, { SVGAttributes } from 'react';

export interface RubleArrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RubleArrow: React.FC<RubleArrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.988 19.736V21.8a9.993 9.993 0 117.949-8.8h-2.018a8.056 8.056 0 10-5.931 6.736zm-6-5.392h2V13h-2v-1.687h2V7h4a3 3 0 110 6h-2.313v1.344h3.313V16h-3.313v2H8.988v-2h-2v-1.656zm3.7-5.644v2.6h2.3a1.3 1.3 0 100-2.6h-2.3zm8.5 5.3l3.999 3.997L19.226 22H18.03l-.026-.026-.002-1.154 1.8-1.82h-6.897v-2h6.88l-1.795-1.797L17.988 14h1.2z' />
        </svg>
    );
};

RubleArrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RubleArrow.displayName = 'RubleArrow';
export default RubleArrow;
