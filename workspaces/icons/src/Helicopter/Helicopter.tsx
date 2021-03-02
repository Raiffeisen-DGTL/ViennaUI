import React, { SVGAttributes } from 'react';

export interface HelicopterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Helicopter: React.FC<HelicopterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 5h8v1h-.414l-1 1H3.28l-.31-1.243-1.941.486L1.72 9h3.745L7 11.303v2.111l2.892 2.893L9.22 19H7v2h14v-2h-2.218l-.5-2h2.337l.276-.553.003-.004.003-.007.011-.023.038-.08a12.75 12.75 0 00.5-1.267c.266-.8.55-1.915.55-3.066 0-2.123-1.758-3.373-3.052-4.02a11.935 11.935 0 00-1.878-.735 12.138 12.138 0 00-.85-.22l-.015-.004H16.2L16.1 7h-.685l-1-1H14V5h8V3H4v2zm7.28 14h5.44l-.5-2h-4.44l-.5 2zm5.027-9.893L16.781 11h2.874c-.33-.46-.884-.871-1.602-1.23a9.943 9.943 0 00-1.746-.663zM19.913 13H16a1 1 0 01-.97-.758l-.933-3.73L13.586 8h-1.172l-1 1H7.868L9 10.697v1.889L11.414 15h7.931c.064-.162.135-.353.206-.566.142-.426.278-.92.362-1.434z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Helicopter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Helicopter.displayName = 'Helicopter';
export default Helicopter;
