import React, { SVGAttributes } from 'react';

export interface AutoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Auto: React.FC<AutoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 13.001h3l1 1v1H6l-1-1v-1zm10 1l1-1h3v1l-1 1h-3v-1zm5.7-4.479a2.978 2.978 0 011.3 2.463V18a2.024 2.024 0 01-2.021 2h-1.958a2.014 2.014 0 01-1.734-1H7.734c-.36.617-1.02.998-1.734 1H4a2.006 2.006 0 01-2-2v-6.051A2.94 2.94 0 013.315 9.5l1.399-3.162a2.916 2.916 0 011.943-1.66c1.776-.447 3.6-.675 5.431-.678 1.772.007 3.536.234 5.251.678.87.225 1.589.838 1.948 1.662L20.7 9.522zM7.157 6.614a.938.938 0 00-.615.534L5.722 9h12.556l-.82-1.851a.934.934 0 00-.619-.536A19.289 19.289 0 0012.08 6a18.641 18.641 0 00-4.923.614zM20 18v-5.916c0-.598-.486-1.083-1.084-1.084H5.083C4.485 11 4 11.486 4 12.084V18h2l.021-1H18v1h2z' />
        </svg>
    );
};

Auto.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Auto.displayName = 'Auto';
export default Auto;
