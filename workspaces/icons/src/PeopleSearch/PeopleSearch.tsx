import React, { SVGAttributes } from 'react';

export interface PeopleSearchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PeopleSearch: React.FC<PeopleSearchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 7a5 5 0 1110 0A5 5 0 016 7zm5-3a3 3 0 100 6 3 3 0 000-6zm3 13a4 4 0 117.446 2.032l2.261 2.26-1.414 1.415-2.261-2.26A4 4 0 0114 17zm4-2a2 2 0 100 4 2 2 0 000-4z'
                clipRule='evenodd'
            />
            <path d='M12 16v-2h-2v2h2zm0 2v4h-2v-4h2zm-4.634-4.195C4.21 15.322 2.5 18.7 2.5 22h2c0-2.673 1.39-5.266 3.732-6.393l-.866-1.802z' />
        </svg>
    );
};

PeopleSearch.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PeopleSearch.displayName = 'PeopleSearch';
export default PeopleSearch;
