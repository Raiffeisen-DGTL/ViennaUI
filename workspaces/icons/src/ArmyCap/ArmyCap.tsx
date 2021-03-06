import React, { SVGAttributes } from 'react';

export interface ArmyCapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArmyCap: React.FC<ArmyCapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2.553 13.144c.529.265 1.05.463 1.447.597V17a1 1 0 00.168.555l.006.01-.005-.01v.002l.002.002.003.005.01.014a2.909 2.909 0 00.125.169c.082.104.2.244.355.408.31.329.773.755 1.406 1.177C7.346 20.182 9.286 21 12 21c2.714 0 4.654-.818 5.93-1.668a8.18 8.18 0 001.406-1.177 6.003 6.003 0 00.451-.536l.007-.01.016-.023.006-.008.01-.014.003-.005.002-.002v-.001l.001-.001A1 1 0 0020 17v-3.259a11.61 11.61 0 001.447-.597c.547-.273 1.153-.642 1.635-1.124.484-.484.918-1.161.918-2.02 0-.802-.383-1.635-.93-2.375-.563-.763-1.371-1.528-2.39-2.207C18.636 4.056 15.692 3 12 3 8.308 3 5.364 4.056 3.32 5.418c-1.019.68-1.827 1.444-2.39 2.207C.383 8.365 0 9.198 0 10c0 .859.434 1.536.918 2.02.482.482 1.088.85 1.635 1.124zm-.014-4.331C2.117 9.385 2 9.802 2 10c0 .141.066.34.332.605.268.268.662.524 1.115.75.186.093.373.177.553.252V11a1 1 0 01.553-.894l.002-.001.002-.001.004-.003.012-.005a4.841 4.841 0 01.132-.06c.084-.035.2-.082.353-.135.304-.108.75-.244 1.35-.377C7.61 9.257 9.433 9 12 9c2.567 0 4.39.257 5.592.524.6.133 1.046.27 1.35.377a6.157 6.157 0 01.453.18l.015.007.017.008.012.005.004.003h.002l.001.001-.019-.01.02.01A1 1 0 0120 11v.607c.18-.075.367-.159.553-.251.453-.227.847-.483 1.115-.75.266-.267.332-.465.332-.606 0-.198-.117-.615-.539-1.187-.405-.55-1.035-1.16-1.89-1.731C17.863 5.944 15.307 5 12 5s-5.864.944-7.57 2.082c-.856.57-1.486 1.181-1.891 1.73zM6 14.246v-2.55c.215-.066.494-.142.842-.22C7.89 11.243 9.567 11 12 11c2.433 0 4.11.243 5.158.476.348.078.627.154.842.22v2.55c-.308.08-.712.177-1.196.273-.893.179-2.051.357-3.375.437A1.5 1.5 0 0012 13a1.5 1.5 0 00-1.43 1.956 25.02 25.02 0 01-3.374-.437A21.694 21.694 0 016 14.246zm0 2.06v.347a6.171 6.171 0 001.18 1.015C8.154 18.318 9.714 19 12 19c2.286 0 3.845-.682 4.82-1.332A6.175 6.175 0 0018 16.653v-.347A26.785 26.785 0 0112 17a26.786 26.786 0 01-6-.694z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ArmyCap.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArmyCap.displayName = 'ArmyCap';
export default ArmyCap;
