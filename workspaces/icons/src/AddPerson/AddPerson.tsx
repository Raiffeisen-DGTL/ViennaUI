import React, { SVGAttributes } from 'react';

export interface AddPersonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AddPerson: React.FC<AddPersonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 7a5 5 0 1110 0A5 5 0 016 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M12 14v2h-2v-2h2zm0 8v-4h-2v4h2zm-9.5 0c0-3.299 1.71-6.678 4.866-8.195l.866 1.802C5.89 16.734 4.5 19.327 4.5 22h-2zM15 19h3v3h2v-3h3v-2h-3v-3h-2v3h-3v2z' />
        </svg>
    );
};

AddPerson.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AddPerson.displayName = 'AddPerson';
export default AddPerson;
