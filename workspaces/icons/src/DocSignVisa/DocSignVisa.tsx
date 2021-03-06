import React, { SVGAttributes } from 'react';

export interface DocSignVisaProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocSignVisa: React.FC<DocSignVisaProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9.757 3.03a1 1 0 00-.464.263l-3 3a1 1 0 000 1.414l10 10 .006.007.994.993A1 1 0 0018 19h3a1 1 0 001-1v-3a1 1 0 00-.293-.707l-1-1-.007-.007-8.744-8.744 1.737-.435 3.6 3.6 1.414-1.414-4-4a1 1 0 00-.95-.263l-4 1zM10 5.414L18.586 14 17 15.586 8.414 7 10 5.414zm10 10V17h-1.586L20 15.414zM4 21c0-.152.047-.573.156-1.183a23.06 23.06 0 01.434-1.929c.123-.45.254-.864.386-1.21.183.462.372 1.029.575 1.638l.012.034c.241.725.503 1.512.773 2.119.135.304.298.622.494.88.155.203.541.651 1.17.651.5 0 .86-.263 1.078-.506.206-.23.343-.505.439-.734.185-.446.326-1.007.442-1.474l.011-.043.096-.381c.114.342.264.792.466 1.155.19.342.634.983 1.468.983h3v-2h-2.744c-.093-.182-.184-.445-.307-.816l-.015-.044c-.114-.342-.264-.793-.466-1.157-.19-.342-.634-.983-1.468-.983-.5 0-.86.263-1.078.506-.206.23-.343.505-.439.734-.185.446-.326 1.007-.442 1.474l-.011.044-.089.35a41.78 41.78 0 01-.492-1.424l-.012-.034c-.241-.725-.503-1.512-.773-2.119a4.478 4.478 0 00-.494-.88C6.015 14.449 5.63 14 5 14c-.554 0-.93.338-1.121.553a3.6 3.6 0 00-.514.808c-.273.566-.511 1.291-.705 2a25.06 25.06 0 00-.472 2.103C2.078 20.074 2 20.652 2 21a1 1 0 102 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocSignVisa.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocSignVisa.displayName = 'DocSignVisa';
export default DocSignVisa;
