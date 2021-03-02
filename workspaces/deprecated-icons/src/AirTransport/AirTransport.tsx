import React, { SVGAttributes } from 'react';

export interface AirTransportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AirTransport: React.FC<AirTransportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.45 22.977l-2.171-3.256-3.165-2.11L2.022 16c.349-.617 1.003-1 1.712-1h1.689a463.31 463.31 0 013.28-3.687L3.351 8.34a2 2 0 01-.817-2.64l.166-.337a2.106 2.106 0 012.436-1.09l8.027 2.19a76.085 76.085 0 012.14-2.181c2.071-2.008 5.362-3.03 6.4-1.989 1.062 1.061.036 4.356-2 6.41a93.09 93.09 0 01-2.179 2.113l2.2 8.047a2.1 2.1 0 01-1.086 2.437l-.334.167a2 2 0 01-2.643-.818l-2.983-5.37A449.6 449.6 0 019 18.568v1.747c0 .684-.356 1.318-.939 1.675l-1.611.987zM3.8 17l1.918 1.279L7 20.2v-2.53l.337-.3c1.1-.97 2.961-2.629 4.932-4.416l.931-.854 4.207 7.574.41-.205-2.533-9.29.439-.412c.981-.921 1.875-1.778 2.564-2.474a6.524 6.524 0 001.816-3.4A6.933 6.933 0 0016.7 5.718a83.403 83.403 0 00-2.49 2.553l-.412.437-9.27-2.527-.2.41 7.551 4.2-.845.934a422.075 422.075 0 00-4.4 4.94l-.3.34L3.8 17z' />
        </svg>
    );
};

AirTransport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AirTransport.displayName = 'AirTransport';
export default AirTransport;
