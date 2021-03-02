import React, { SVGAttributes } from 'react';

export interface BowlingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bowling: React.FC<BowlingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.562 22.067a6.546 6.546 0 116.546-6.546 6.553 6.553 0 01-6.546 6.546zm0-11.292a4.746 4.746 0 100 9.492 4.746 4.746 0 000-9.492zM15 15h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-7.577 7.231c.558.68 1.2 1.285 1.912 1.801H5.614A8.188 8.188 0 013 15.732c0-1.761.859-3.201 1.864-5.059 1.548-2.86.236-3.886.236-6.486A3.218 3.218 0 018.235 1 3.26 3.26 0 0111.4 4.183c0 2.158-.747 3.206-.227 4.958-.53.368-1.012.8-1.436 1.286a6.919 6.919 0 01-.344-4.364c.128-.619.197-1.248.207-1.88A1.473 1.473 0 008.235 2.8 1.422 1.422 0 006.9 4.187a8.4 8.4 0 00.245 1.844 6.944 6.944 0 01-.7 5.5l-.217.4a8.427 8.427 0 00-1.43 3.8 6.877 6.877 0 001.525 4.5h3.1z' />
        </svg>
    );
};

Bowling.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bowling.displayName = 'Bowling';
export default Bowling;
