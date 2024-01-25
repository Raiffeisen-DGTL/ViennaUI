import React, { FC, SVGProps } from 'react';

interface MirProps extends SVGProps<SVGElement> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const sizes = {
    xs: [20, 6],
    s: [28, 8],
    m: [38.5, 11],
    l: [48, 13],
    xl: [56, 16],
};

export const Mir: FC<MirProps> = (props) => {
    const { size = 'm', ...attrs } = props;
    const [width, height] = sizes[size];

    return (
        <svg {...(attrs as {})} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 57 16' width={width} height={height}>
            <path
                fill='#24A23F'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M31.213 1.842l-3.467 7.661h-.385V.097h-5.009v15.806h4.238c1.156 0 2.12-.679 2.6-1.649l3.468-7.66h.385v9.309h5.009V.097h-4.238c-1.156 0-2.12.679-2.6 1.745zM12.528 2.23L10.41 9.503h-.385L7.905 2.23C7.52.97 6.46.194 5.208.194H.2V16h5.008V6.69h.386L8.483 16h3.564l2.89-9.31h.384V16h5.009V.097H15.32c-1.348 0-2.504.873-2.793 2.133zM40.17 7.273v8.63h5.009v-5.042h5.393c2.312 0 4.335-1.455 5.009-3.588H40.17z'
            />
            <path
                fill='#4A90E2'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M40.556 0c.628 3.44 3.617 6.045 7.214 6.045h8.03c.065-.326.1-.662.1-1.008C55.9 2.256 53.66 0 50.897 0H40.556z'
            />
        </svg>
    );
};

Mir.displayName = 'Mir';
