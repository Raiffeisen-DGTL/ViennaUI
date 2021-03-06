import React, { SVGAttributes } from 'react';

export interface DocPreviewProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocPreview: React.FC<DocPreviewProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h4v-2H4V4h12v5h2V3z'
                clipRule='evenodd'
            />
            <path d='M16 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            <path
                fillRule='evenodd'
                d='M16 12c-1.954 0-3.67.879-4.87 1.846a8.061 8.061 0 00-1.47 1.523c-.18.25-.336.508-.45.762-.108.239-.21.543-.21.869 0 .326.102.63.21.87.114.253.27.51.45.761a8.061 8.061 0 001.47 1.523C12.33 21.12 14.046 22 16 22c1.954 0 3.67-.879 4.87-1.846a8.06 8.06 0 001.47-1.523c.18-.25.336-.508.45-.762.108-.239.21-.543.21-.869 0-.326-.102-.63-.21-.87a4.452 4.452 0 00-.45-.761 8.06 8.06 0 00-1.47-1.523C19.67 12.88 17.954 12 16 12zm-4.966 5.049a1.04 1.04 0 01-.02-.049 2.496 2.496 0 01.27-.463 6.073 6.073 0 011.1-1.133C13.357 14.62 14.642 14 16 14c1.36 0 2.644.621 3.615 1.404.48.387.856.791 1.102 1.133a2.496 2.496 0 01.27.463 2.496 2.496 0 01-.27.463 6.073 6.073 0 01-1.102 1.133C18.645 19.38 17.36 20 16 20c-1.36 0-2.644-.621-3.615-1.404a6.073 6.073 0 01-1.102-1.133 2.496 2.496 0 01-.25-.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocPreview.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocPreview.displayName = 'DocPreview';
export default DocPreview;
