import React, { SVGAttributes } from 'react';

export interface WhatsAppProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WhatsApp: React.FC<WhatsAppProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fill='#2B2D33'
                d='M16.288 14.055c-.243-.12-1.434-.702-1.656-.783-.223-.08-.384-.12-.546.12-.161.242-.626.784-.767.944-.142.16-.283.18-.525.06-.04-.02-.094-.043-.16-.071a6.27 6.27 0 01-1.79-1.123c-.72-.638-1.206-1.425-1.348-1.666-.126-.216-.027-.333.072-.45l.035-.041c.262-.323.525-.662.606-.823.08-.16.04-.301-.02-.421-.041-.081-.273-.641-.482-1.146l-.266-.64c-.174-.415-.35-.414-.491-.413h-.054a9.767 9.767 0 00-.465-.009.893.893 0 00-.646.301l-.048.05c-.252.268-.8.849-.8 1.957 0 1.177.858 2.315.987 2.486l.002.002.043.06c.29.413 1.826 2.599 4.098 3.573.578.248 1.03.396 1.381.507.581.183 1.11.157 1.527.095.466-.07 1.434-.582 1.636-1.144.41-.695.506-1.002.141-1.187l-.096-.05a20.4 20.4 0 00-.368-.188z'
            />
            <path
                fill='#2B2D33'
                fillRule='evenodd'
                d='M19.088 4.899C12.653-1.348 2.004 3.183 2 11.996c0 1.761.46 3.479 1.335 4.996l-.958 3.494A1.006 1.006 0 003.6 21.73l3.618-.948c6.615 3.589 14.78-1.176 14.783-8.781a9.934 9.934 0 00-2.925-7.07l.013-.032zm-1.426 1.437C12.514 1.34 3.995 4.963 3.992 12.014c0 1.409.738 3.396 1.438 4.61l-1.004 3.025 3.515-1.008c5.292 2.87 12.048-.54 12.05-6.623 0-2.136-.83-4.145-2.34-5.655l.01-.027z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WhatsApp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WhatsApp.displayName = 'WhatsApp';
export default WhatsApp;
