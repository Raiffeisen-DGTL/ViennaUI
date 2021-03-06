import React, { SVGAttributes } from 'react';

export interface DocumentFavoritesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentFavorites: React.FC<DocumentFavoritesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.021 2C20.114 2 21 2.886 21 3.979V16h-2V4H5v16h10v2H4.979A1.979 1.979 0 013 20.021V3.979C3 2.886 3.886 2 4.979 2h14.042zM17 22h-1v-5h5v1l-4 4zm-2.325-6.025L12 14.476l-2.675 1.5-1.249-.906.6-3.006-2.253-2.086.477-1.467 3.044-.362 1.284-2.779h1.544l1.284 2.783 3.044.362.477 1.467-2.251 2.078.6 3.006-1.251.909zm-3.09-3.214h.83l1.482.83-.331-1.665.257-.79 1.247-1.155-1.687-.2-.672-.487L12 7.751l-.711 1.543-.672.487-1.687.2 1.247 1.155.257.79-.334 1.665 1.485-.83z' />
        </svg>
    );
};

DocumentFavorites.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentFavorites.displayName = 'DocumentFavorites';
export default DocumentFavorites;
