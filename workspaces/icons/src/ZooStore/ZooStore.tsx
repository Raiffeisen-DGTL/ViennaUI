import React, { SVGAttributes } from 'react';

export interface ZooStoreProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ZooStore: React.FC<ZooStoreProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.5 6a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2zm4 1a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2zm-15 6a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2zm8.5 0c-2.556 0-4.322 1.909-5.27 3.803a9.536 9.536 0 00-.925 2.975c-.12.926-.08 1.91.3 2.67.35.697.867 1.181 1.564 1.363.629.164 1.252.037 1.73-.1.252-.071.503-.158.737-.24l.12-.044c.196-.069.38-.134.567-.194.452-.146.834-.233 1.177-.233.343 0 .725.087 1.177.233.188.06.371.125.566.194l.121.043c.233.083.485.17.736.242.479.136 1.102.263 1.73.1.698-.183 1.216-.667 1.564-1.365.38-.759.42-1.743.3-2.67a9.536 9.536 0 00-.925-2.974C16.322 11.909 14.556 10 12 10zm-4.106 8.553c-.12-.241-.204-.757-.105-1.518a7.539 7.539 0 01.73-2.338C9.322 13.091 10.556 12 12 12c1.445 0 2.678 1.091 3.481 2.697a7.54 7.54 0 01.731 2.338c.1.761.015 1.277-.105 1.518-.146.29-.251.316-.278.322l-.002.001c-.09.024-.28.026-.676-.088a10.964 10.964 0 01-.62-.204l-.111-.04a23.53 23.53 0 00-.628-.215C13.275 18.163 12.657 18 12 18s-1.275.163-1.791.33c-.217.07-.432.146-.628.215l-.111.04c-.232.081-.433.15-.62.203-.396.114-.586.112-.676.088h-.003c-.026-.007-.131-.032-.277-.323zM20.5 8a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ZooStore.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ZooStore.displayName = 'ZooStore';
export default ZooStore;
