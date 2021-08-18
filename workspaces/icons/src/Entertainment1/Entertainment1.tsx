import React, { SVGAttributes } from 'react';

export interface Entertainment1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Entertainment1: React.FC<Entertainment1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a1 1 0 01.825.435l1.562 2.28 2.651.78a1 1 0 01.51 1.57l-1.685 2.19.075 2.763a1 1 0 01-1.334.97L12 12.06l-2.604.926a1 1 0 01-1.335-.97l.076-2.762-1.685-2.19a1 1 0 01.51-1.57l2.65-.78 1.563-2.28A1 1 0 0112 2zm0 2.769l-.939 1.37a1 1 0 01-.542.393l-1.592.47 1.012 1.315a1 1 0 01.207.638l-.045 1.659 1.564-.556a1 1 0 01.67 0l1.564.556-.045-1.66a1 1 0 01.207-.637l1.012-1.315-1.593-.47a1 1 0 01-.542-.394L12 4.768z'
                clipRule='evenodd'
            />
            <path d='M3 3v2h2V3H3zm16 0v2h2V3h-2zm1 15v2h2v-2h-2zM2 20v-2h2v2H2z' />
            <path fillRule='evenodd' d='M20 12v2h2v-2h2v-2h-2V8h-2v2h-2v2h2zm0 0v-2h2v2h-2z' clipRule='evenodd' />
            <path d='M2 14v-2h2v2H2zm2-4h2v2H4v-2zm-2 0V8h2v2H2zm0 0H0v2h2v-2zm9 4v8h2v-8h-2zm7.832 2.555l-.992 1.488a5 5 0 00-.84 2.774V22h-2v-1.183a7 7 0 011.176-3.883l.992-1.489 1.664 1.11zM6.16 18.043l-.992-1.488 1.664-1.11.992 1.489A7 7 0 019 20.817V22H7v-1.183a5 5 0 00-.84-2.774z' />
        </svg>
    );
};

Entertainment1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Entertainment1.displayName = 'Entertainment1';
export default Entertainment1;
