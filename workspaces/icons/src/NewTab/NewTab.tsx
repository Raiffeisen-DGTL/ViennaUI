import React, { SVGAttributes } from 'react';

export interface NewTabProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const NewTab: React.FC<NewTabProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 011-1h8v2H5v14h14v-7h2v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm14.586 1H14V3h6a1 1 0 011 1v6h-2V6.414l-6.293 6.293-1.414-1.414L17.586 5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

NewTab.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

NewTab.displayName = 'NewTab';
export default NewTab;
