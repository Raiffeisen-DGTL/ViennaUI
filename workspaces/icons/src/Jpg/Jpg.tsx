import React, { SVGAttributes } from 'react';

export interface JpgProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Jpg: React.FC<JpgProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 20H3V4h12v4h2V3a1 1 0 00-1-1H2a1 1 0 00-1 1v18a1 1 0 001 1h13v-2zm6.654-2.14a2.904 2.904 0 001.122-.746v-3.228h-2.69v1.192h1.106v1.434l-.14.097c-.193.125-.446.188-.757.188-.487 0-.838-.161-1.053-.483-.211-.326-.317-.846-.317-1.558v-1.418c.007-.68.107-1.176.3-1.488.194-.311.504-.467.93-.467.351 0 .609.091.773.274.165.179.27.517.312 1.015h1.536c-.068-.895-.319-1.552-.752-1.971-.43-.42-1.069-.629-1.917-.629-.903 0-1.59.292-2.063.876-.469.58-.703 1.409-.703 2.487v1.407c.014 1.063.27 1.874.768 2.433.497.555 1.196.832 2.094.832a4.11 4.11 0 001.45-.247z' />
            <path d='M7.936 10.18h1.58v5.414c0 .759-.212 1.368-.634 1.826-.423.458-.967.687-1.633.687-.716 0-1.273-.213-1.67-.639-.398-.426-.597-1.018-.597-1.778h1.585c0 .738.227 1.107.682 1.107.458 0 .687-.426.687-1.278v-5.34z' />
            <path
                fillRule='evenodd'
                d='M12.555 15.25V18h-1.579v-7.82h2.664c.774 0 1.39.24 1.848.72.462.48.693 1.102.693 1.869 0 .766-.228 1.371-.682 1.815-.455.444-1.085.666-1.891.666h-1.053zm0-1.316h1.085c.3 0 .534-.098.698-.295.165-.197.248-.484.248-.86 0-.39-.085-.7-.253-.929a.808.808 0 00-.677-.354h-1.1v2.438z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Jpg.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Jpg.displayName = 'Jpg';
export default Jpg;
