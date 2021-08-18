import React, { SVGAttributes } from 'react';

export interface HintFilledProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HintFilled: React.FC<HintFilledProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9 9.755c.018-.83.303-1.492.857-1.984C10.428 7.257 11.21 7 12.204 7c.936 0 1.694.237 2.274.712.571.47.857 1.083.857 1.839 0 .936-.47 1.68-1.41 2.235-.44.255-.737.483-.89.685-.155.202-.232.466-.232.791v.35h-1.746l-.014-.383c-.043-.51.029-.934.218-1.272.185-.32.508-.617.969-.89.426-.255.716-.483.87-.685.158-.203.237-.46.237-.772a.992.992 0 00-.342-.777c-.233-.203-.536-.304-.91-.304-.378 0-.683.112-.916.336-.233.22-.36.517-.383.89H9zm4.25 5.995a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

HintFilled.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HintFilled.displayName = 'HintFilled';
export default HintFilled;
