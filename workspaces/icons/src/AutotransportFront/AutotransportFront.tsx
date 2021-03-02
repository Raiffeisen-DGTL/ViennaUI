import React, { SVGAttributes } from 'react';

export interface AutotransportFrontProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AutotransportFront: React.FC<AutotransportFrontProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 3c-1.064 0-1.73.8-2.104 1.46-.399.702-.675 1.594-.87 2.44a23.255 23.255 0 00-.508 3.599c-.15.13-.33.297-.511.499C2.57 11.482 2 12.298 2 13.333V20a1 1 0 001 1h4a1 1 0 001-1v-1h8v1a1 1 0 001 1h4a1 1 0 001-1v-6.667c0-1.034-.57-1.851-1.007-2.335a5.626 5.626 0 00-.511-.5 23.253 23.253 0 00-.508-3.598c-.195-.846-.471-1.738-.87-2.44C18.73 3.8 18.064 3 17 3H7zM4 15.387V19h2v-2h12v2h2v-3.613l-1.684.562a1 1 0 01-.632-1.898l2.314-.771c-.02-.287-.196-.616-.491-.944A3.646 3.646 0 0019.16 12H4.84a3.656 3.656 0 00-.347.336c-.295.328-.471.657-.491.944l2.314.771a1 1 0 01-.632 1.898L4 15.387zM5.562 10h12.876a20.855 20.855 0 00-.412-2.65c-.18-.779-.404-1.45-.661-1.903-.128-.225-.238-.35-.313-.41A.251.251 0 0016.996 5H7.004a.252.252 0 00-.056.037c-.075.06-.185.185-.313.41-.257.453-.48 1.124-.66 1.903A20.85 20.85 0 005.561 10z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AutotransportFront.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AutotransportFront.displayName = 'AutotransportFront';
export default AutotransportFront;
