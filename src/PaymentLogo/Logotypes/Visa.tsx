import React, { FC, SVGProps } from 'react';

interface VisaProps extends SVGProps<SVGElement> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const sizes = {
    xs: [18.75, 6],
    s: [24.66, 8],
    m: [33.91, 11],
    l: [41.85, 13.5],
    xl: [56.22, 18.24],
};

export const Visa: FC<VisaProps> = (props) => {
    const { size = 'm', ...attrs } = props;
    const [width, height] = sizes[size];

    return (
        // eslint-disable-next-line @typescript-eslint/ban-types
        <svg {...(attrs as {})} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 57 19' width={width} height={height}>
            <path
                fill='#20347D'
                d='M40.915 1.448l-.654 3.785c-1.963-1.082-6.431-1.338-6.431.654 0 .792 1.01 1.336 2.23 1.992 1.847.995 4.172 2.247 4.172 5.008 0 4.411-4.723 6.033-7.853 6.033-3.131 0-5.18-.995-5.18-.995l.683-3.957c1.878 1.508 7.57 1.935 7.57-.455 0-1.004-1.12-1.596-2.42-2.283-1.792-.948-3.926-2.077-3.926-4.716 0-4.838 5.406-5.834 7.683-5.834 2.106 0 4.126.768 4.126.768zM11.552 13.115L15.925.995h4.937l-7.299 17.621h-4.78L4.798 3.308C2.212 1.753 0 1.293 0 1.293L.084.995h7.23c1.99 0 2.177 1.587 2.177 1.587l1.544 7.924.517 2.609zM19.785 18.616h4.588L27.24.996h-4.588l-2.867 17.62z'
            />
            <path
                fill='#20347D'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M52.01 18.616h4.213L52.55.996h-3.688c-1.704 0-2.118 1.312-2.118 1.312l-6.842 16.308h4.782L45.64 16h5.832l.538 2.617zM49.373 5.788l-2.411 6.595h3.767l-1.356-6.595z'
            />
        </svg>
    );
};

Visa.displayName = 'Visa';
