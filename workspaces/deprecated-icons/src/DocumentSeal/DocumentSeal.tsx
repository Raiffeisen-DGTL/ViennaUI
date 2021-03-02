import React, { SVGAttributes } from 'react';

export interface DocumentSealProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentSeal: React.FC<DocumentSealProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.447 20a2.474 2.474 0 001.481 2H4.559A1.559 1.559 0 013 20.441V3.559C3 2.698 3.698 2 4.559 2h14.882A1.559 1.559 0 0121 3.564v9.6a2.465 2.465 0 01-1.568-.976 2.536 2.536 0 00-.432-.461V4H5v16h6.447zm10.385-3.074a1.9 1.9 0 00.001 1.551 1.89 1.89 0 01-1.533 2.656 1.9 1.9 0 00-1.344.775 1.888 1.888 0 01-3.066 0 1.893 1.893 0 00-1.343-.775 1.891 1.891 0 01-1.534-2.656 1.889 1.889 0 000-1.551 1.891 1.891 0 011.534-2.656 1.887 1.887 0 001.343-.775 1.889 1.889 0 013.066 0c.316.439.806.721 1.344.775a1.89 1.89 0 011.532 2.656zm-1.551 2.249a3.594 3.594 0 010-2.946l-.007-.174-.146-.093a3.6 3.6 0 01-2.552-1.473.19.19 0 00-.308 0 3.59 3.59 0 01-2.551 1.473l-.146.093-.008.174c.421.937.421 2.01 0 2.946l.008.172.146.095c1.022.103 1.95.64 2.551 1.472a.19.19 0 00.308 0 3.6 3.6 0 012.552-1.472l.146-.095.007-.172zM7.063 6.063h10v2h-10v-2zm0 4h7v2h-7v-2z' />
        </svg>
    );
};

DocumentSeal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentSeal.displayName = 'DocumentSeal';
export default DocumentSeal;
