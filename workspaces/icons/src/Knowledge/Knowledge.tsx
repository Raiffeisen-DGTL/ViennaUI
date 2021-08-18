import React, { SVGAttributes } from 'react';

export interface KnowledgeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Knowledge: React.FC<KnowledgeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 5a3 3 0 013-3h11v2H5a1 1 0 00-1 1v1h11a1 1 0 011 1v2.5h-2V8H4v12h6v2H3a1 1 0 01-1-1V5z' />
            <path
                fillRule='evenodd'
                d='M18.616 13.007c.306-.02.617.006.925.086 1.079.28 1.803 1.12 2.163 2.08.36.96.395 2.11.083 3.239s-.934 2.102-1.733 2.752c-.797.648-1.844 1.022-2.919.743a2.872 2.872 0 01-.635-.248c-.197.106-.41.19-.635.248-1.075.28-2.122-.095-2.918-.743-.8-.65-1.422-1.623-1.734-2.752-.313-1.13-.278-2.28.083-3.24.36-.96 1.084-1.8 2.163-2.08.308-.08.619-.106.925-.085H15.5V12a1 1 0 01.293-.707l2-2 1.414 1.414-1.707 1.707v.593h1.116zm.422 2.021a.914.914 0 00-.305-.025l-.04.004h-4.386l-.04-.004a.914.914 0 00-.305.025c-.294.077-.6.33-.794.848-.195.518-.24 1.232-.028 2.002.213.77.623 1.373 1.068 1.734.448.364.856.437 1.154.36a.936.936 0 00.43-.255l.708-.707.707.707a.936.936 0 00.43.255c.299.077.707.004 1.155-.36.445-.361.854-.963 1.068-1.733.213-.771.167-1.485-.028-2.003-.195-.519-.5-.771-.794-.848z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Knowledge.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Knowledge.displayName = 'Knowledge';
export default Knowledge;
