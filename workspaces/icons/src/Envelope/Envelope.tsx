import React, { SVGAttributes } from 'react';

export interface EnvelopeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Envelope: React.FC<EnvelopeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 5h20v1.43l-2 2v-.016L17.414 11H15a3 3 0 01-6 0H6.586L4 8.414v.016l-2-2V5zm10 7.3a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6zM16.586 9l2-2H5.414l2 2h2.365a2.966 2.966 0 014.442 0h2.365zM20 17v-6.449l2-2v8.461C22 18.11 21.11 19 20.012 19H3.969A1.968 1.968 0 012 17.031v-8.48l2 2V17h16z' />
        </svg>
    );
};

Envelope.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Envelope.displayName = 'Envelope';
export default Envelope;
