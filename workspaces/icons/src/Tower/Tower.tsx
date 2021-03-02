import React, { SVGAttributes } from 'react';

export interface TowerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tower: React.FC<TowerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a1 1 0 01.949.684L13.387 4H18a1 1 0 011 1v3h-2V6h-2.946l1.892 5.677.005.014L18.721 20H21v2H3v-2h2.28L9.945 6H7v2H5V5a1 1 0 011-1h4.613l.438-1.316A1 1 0 0112 2zm1.326 8.14L12 6.163l-.977 2.932 2.303 1.047zm-2.94.862l-1.23 3.692 3.792-2.528-2.561-1.164zM8.055 18l-.667 2h9.226l-.667-2H8.054zm7.225-2h-4.476l3.662-2.442L15.28 16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tower.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tower.displayName = 'Tower';
export default Tower;
