import React, { SVGAttributes } from 'react';

export interface PassportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Passport: React.FC<PassportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 10a1 1 0 00-1 1v4c0 .834.64 1.278.983 1.468.364.202.815.352 1.157.466l.044.015c.398.132.672.227.855.328a1 1 0 001.922 0c.183-.1.457-.196.855-.328l.043-.015c.343-.114.794-.264 1.158-.466.342-.19.983-.634.983-1.468v-4a1 1 0 00-1-1H9zm1 4.744V12h4v2.744c-.182.093-.445.184-.816.307l-.043.015c-.337.112-.78.26-1.141.457-.361-.198-.803-.345-1.14-.457l-.044-.015c-.37-.123-.634-.214-.816-.307zm4.133-.08l-.013.01a.063.063 0 01.013-.01zm-3 2.673l-.013-.011.013.01zm-1.266-2.674l.013.011a.061.061 0 01-.013-.01zm3.013 2.663a.061.061 0 01-.013.01l.013-.01z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M7 2a3 3 0 00-3 3v16a1 1 0 001 1h12a3 3 0 003-3V7a1 1 0 00-1-1H6V5a1 1 0 011-1h13V2H7zM6 20V8h12v11a1 1 0 01-1 1H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Passport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Passport.displayName = 'Passport';
export default Passport;
