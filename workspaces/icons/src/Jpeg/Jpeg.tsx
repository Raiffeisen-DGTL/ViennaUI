import React, { SVGAttributes } from 'react';

export interface JpegProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Jpeg: React.FC<JpegProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1 20h14v2H2a1 1 0 01-1-1v-1zM17 3v5h-2V4H3v4H1V3a1 1 0 011-1h14a1 1 0 011 1zm4.14 14.86a2.903 2.903 0 001.123-.746v-3.228h-2.691v1.192h1.107v1.434l-.14.097c-.194.125-.446.188-.758.188-.486 0-.837-.161-1.052-.483-.212-.326-.317-.846-.317-1.558v-1.418c.007-.68.107-1.176.3-1.488.194-.311.504-.467.93-.467.35 0 .609.091.773.274.165.179.269.517.312 1.015h1.536c-.068-.895-.319-1.552-.752-1.971-.43-.42-1.069-.629-1.918-.629-.902 0-1.59.292-2.062.876-.47.58-.704 1.409-.704 2.487v1.407c.015 1.063.27 1.874.768 2.433.498.555 1.196.832 2.095.832a4.11 4.11 0 001.45-.247zM5.029 10.18h-1.58v5.339c0 .852-.228 1.278-.687 1.278-.455 0-.682-.369-.682-1.107H.496c0 .76.198 1.352.596 1.778.397.426.954.64 1.67.64.666 0 1.21-.23 1.633-.688.423-.458.634-1.067.634-1.826V10.18z' />
            <path
                fillRule='evenodd'
                d='M7.519 18v-2.75H8.57c.806 0 1.436-.222 1.891-.666.455-.444.682-1.05.682-1.815 0-.767-.23-1.39-.693-1.87-.458-.48-1.074-.72-1.847-.72H5.94V18h1.579zm1.085-4.066H7.519v-2.438h1.1a.808.808 0 01.677.354c.169.23.253.539.253.93 0 .375-.082.662-.247.859-.165.197-.398.295-.698.295z'
                clipRule='evenodd'
            />
            <path d='M15.911 14.616h-2.46v2.073h2.912V18h-4.49v-7.82h4.479v1.316h-2.9v1.847h2.46v1.273z' />
        </svg>
    );
};

Jpeg.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Jpeg.displayName = 'Jpeg';
export default Jpeg;
