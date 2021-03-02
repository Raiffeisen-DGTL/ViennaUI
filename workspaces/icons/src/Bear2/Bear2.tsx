import React, { SVGAttributes } from 'react';

export interface Bear2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bear2: React.FC<Bear2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 16a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M17.975 3.707a3 3 0 114.243 4.243l-.769.768A9.985 9.985 0 0122 12c0 4.894-3.515 8.967-8.159 9.83a4 4 0 01-1.156.17h-1.37c-.403 0-.79-.06-1.156-.17C5.516 20.968 2 16.895 2 12c0-1.129.187-2.213.532-3.226l-.825-.824A3 3 0 015.95 3.707l.235.235c1.288-.7 2.81-.7 4.101-.386l.537.13a5 5 0 002.355 0l.536-.13c1.275-.31 2.774-.314 4.052.36l.21-.209zM20 12a7.99 7.99 0 01-3.346 6.508c.037-.294.042-.597.011-.906l-.371-3.716a4.315 4.315 0 00-8.587 0l-.372 3.716a4.02 4.02 0 00.011.906A7.99 7.99 0 014 12c0-2.382 1.04-4.52 2.694-5.987.742-.659 1.89-.812 3.121-.513l.537.13a7 7 0 003.297 0l.536-.13c1.231-.299 2.379-.146 3.121.513A7.978 7.978 0 0120 12zm-8 8c.461 0 .913-.039 1.353-.114a2.001 2.001 0 001.322-2.085l-.371-3.716a2.315 2.315 0 00-4.607 0L9.325 17.8a2.001 2.001 0 001.323 2.085c.44.075.891.114 1.352.114zM4.642 5.228l-.106-.107a1 1 0 00-1.414 1.415l.308.308c.35-.58.756-1.121 1.212-1.616zm16.162 1.308l-.262.261a10.037 10.037 0 00-1.22-1.608l.067-.068a1 1 0 111.415 1.415z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bear2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bear2.displayName = 'Bear2';
export default Bear2;
