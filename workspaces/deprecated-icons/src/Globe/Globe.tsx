import React, { SVGAttributes } from 'react';

export interface GlobeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Globe: React.FC<GlobeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.9 20H16l1 1v1H7v-1l1-1h2.9v-1.118a8.845 8.845 0 01-5.846-2.514l-1.472 1.464-1.414-1.414 2.75-2.75 1.11 1.138a7.09 7.09 0 109.886-10.135l.233-.233L18.5 2.085 19.915 3.5l-1.4 1.4a8.82 8.82 0 011.624 5.1 8.912 8.912 0 01-7.239 8.739V20zM11.238 5.9c-.376.004-.75.06-1.11.168l-1.4-1.4A5.888 5.888 0 0117.139 10a5.848 5.848 0 01-.572 2.507l-1.4-1.4c.108-.36.166-.732.171-1.107a4.1 4.1 0 00-4.1-4.1zm0 10l.009.004A5.888 5.888 0 016.2 6.964l-.6-.6L7.009 4.95l9.239 9.239-1.414 1.414-.556-.556a5.851 5.851 0 01-3.04.853zm0-1.8a4.052 4.052 0 001.707-.385L7.522 8.292A4.055 4.055 0 007.138 10a4.1 4.1 0 004.1 4.1z' />
        </svg>
    );
};

Globe.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Globe.displayName = 'Globe';
export default Globe;
