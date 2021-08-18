import React, { SVGAttributes } from 'react';

export interface ImportPerson2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ImportPerson2: React.FC<ImportPerson2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 2a5 5 0 100 10 5 5 0 000-10zM8 7a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
            <path d='M12 16v-2h-2v2h2zm0 2v4h-2v-4h2zm-4.634-4.195C4.21 15.322 2.5 18.7 2.5 22h2c0-2.673 1.39-5.266 3.732-6.393l-.866-1.802zM18 19.586V13h2v6.586l1.793-1.793 1.414 1.414-3.5 3.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414L18 19.586z' />
        </svg>
    );
};

ImportPerson2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ImportPerson2.displayName = 'ImportPerson2';
export default ImportPerson2;
