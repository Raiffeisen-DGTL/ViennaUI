import React, { SVGAttributes } from 'react';

export interface CupSportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CupSport: React.FC<CupSportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.478 6.546a.5.5 0 00-.956 0l-.357 1.157a.5.5 0 01-.478.353H9.478a.5.5 0 00-.303.897l1.02.78a.5.5 0 01.174.544l-.38 1.228a.5.5 0 00.782.545l.925-.707a.5.5 0 01.607 0l.926.707a.5.5 0 00.781-.545l-.38-1.228a.5.5 0 01.175-.544l1.02-.78a.5.5 0 00-.303-.897h-1.209a.5.5 0 01-.478-.353l-.357-1.157z' />
            <path
                fillRule='evenodd'
                d='M5 3a1 1 0 011-1h12a1 1 0 011 1v1h3a1 1 0 011 1v.1a8 8 0 01-2.343 5.657l-2.45 2.45a1.02 1.02 0 01-.087.078c-.318.8-.71 1.565-1.154 2.256-.975 1.517-2.358 2.904-3.966 3.327V20h4v2H7v-2h4v-1.132c-1.608-.423-2.99-1.81-3.966-3.327a13.22 13.22 0 01-1.154-2.256.915.915 0 01-.087-.078l-2.45-2.45A8 8 0 011 5.101V5a1 1 0 011-1h3V3zm0 6c0 .2.007.402.02.606l-.263-.263A6 6 0 013.067 6H5v3zm13.98.606l.263-.263A6 6 0 0020.933 6H19v3c0 .2-.007.402-.02.606zM7 4v5c0 1.778.677 3.843 1.716 5.46C9.794 16.135 11.033 17 12 17c.967 0 2.206-.864 3.284-2.54C16.323 12.842 17 10.777 17 9V4H7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CupSport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CupSport.displayName = 'CupSport';
export default CupSport;
