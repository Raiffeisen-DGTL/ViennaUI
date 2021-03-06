import React, { SVGAttributes } from 'react';

export interface PalmProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Palm: React.FC<PalmProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.755 6.422a5 5 0 00-4.39 4.022L5 10.689l-.45-1.252a7.012 7.012 0 015.705-4.977A4.558 4.558 0 008.292 4a4.665 4.665 0 00-2.867 1H4V3.56a6.679 6.679 0 018.458-.1 6.68 6.68 0 018.459.1V5h-1.426a4.662 4.662 0 00-2.866-1 4.53 4.53 0 00-1.854.413 5.952 5.952 0 015.356 4.472l-.533 1.179-1.335-.259a3.945 3.945 0 00-3.544-3.395 12.191 12.191 0 01-.222 10.413c-.2-.027-.4-.049-.6-.065a9.952 9.952 0 00-.886-.045c-.252 0-.502.022-.752.038a10.274 10.274 0 00.679-9.461c-.5.28-.937.661-1.283 1.118a4.22 4.22 0 00-.844 2.519l-1.3.637-.7-1.064a6.214 6.214 0 011.238-3.298c.214-.28.451-.54.71-.78zM13 18a9.983 9.983 0 017.981 4h-2.707a7.954 7.954 0 00-10.548 0H5.019A9.983 9.983 0 0113 18z' />
        </svg>
    );
};

Palm.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Palm.displayName = 'Palm';
export default Palm;
