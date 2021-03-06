import React, { SVGAttributes } from 'react';

export interface SoundProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sound: React.FC<SoundProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13 3a1 1 0 00-1.64-.768L5.638 7H3a1 1 0 00-1 1v8a1 1 0 001 1h2.638l5.722 4.768A1 1 0 0013 21V3zM6.64 8.768L11 5.135v13.73l-4.36-3.633A1 1 0 006 15H4V9h2a1 1 0 00.64-.232z'
                clipRule='evenodd'
            />
            <path d='M17.36 5.768L18 5l.64-.768.002.001.001.001.005.004.012.01a3.252 3.252 0 01.154.14c.098.092.232.224.39.395.315.341.729.842 1.142 1.496A10.644 10.644 0 0122 12c0 2.48-.829 4.414-1.654 5.721a10.432 10.432 0 01-1.142 1.496 7.981 7.981 0 01-.544.535l-.012.01-.005.003-.002.003L18 19l-.64-.768.012-.01.072-.067a5.88 5.88 0 00.29-.294c.247-.268.583-.673.92-1.207A8.643 8.643 0 0020 12c0-2.02-.671-3.586-1.346-4.654a8.42 8.42 0 00-.92-1.207 5.899 5.899 0 00-.362-.36l-.014-.013.001.002z' />
            <path d='M14.4 8.8L15 8l.6-.8.003.002.004.003.009.007.027.021.086.07a6.943 6.943 0 011.08 1.171c.58.798 1.191 2 1.191 3.526 0 1.526-.61 2.728-1.191 3.526a6.944 6.944 0 01-1.08 1.17c-.035.03-.064.053-.086.07l-.027.022-.01.007-.003.003-.002.001S15.6 16.8 15 16l-.6-.8-.002.002h-.002l.006-.004.041-.033a4.951 4.951 0 00.748-.815c.42-.578.809-1.376.809-2.35 0-.974-.389-1.772-.809-2.35a4.952 4.952 0 00-.748-.815 1.965 1.965 0 00-.041-.033l-.006-.005.002.001.001.002z' />
        </svg>
    );
};

Sound.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sound.displayName = 'Sound';
export default Sound;
