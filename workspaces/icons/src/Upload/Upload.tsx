import React, { SVGAttributes } from 'react';

export interface UploadProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Upload: React.FC<UploadProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 11a5 5 0 01-5 5v-2a3 3 0 00.51-5.957 1 1 0 01-.778-.662A5.002 5.002 0 007 9a1 1 0 01-1 1 2 2 0 100 4h1v2H6a4 4 0 01-.944-7.888 7.001 7.001 0 0113.363-1.908A5.003 5.003 0 0122 11z' />
            <path d='M11 15.421V22h2v-6.593l1.3 1.3 1.414-1.414-3-3a1 1 0 00-1.414 0l-3 3 1.414 1.414L11 15.421z' />
        </svg>
    );
};

Upload.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Upload.displayName = 'Upload';
export default Upload;
