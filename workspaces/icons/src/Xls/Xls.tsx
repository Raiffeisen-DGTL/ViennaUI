import React, { SVGAttributes } from 'react';

export interface XlsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Xls: React.FC<XlsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 20H3V4h12v4h2V3a1 1 0 00-1-1H2a1 1 0 00-1 1v18a1 1 0 001 1h13v-2zm5.644-4.771c.165.16.247.4.247.72 0 .583-.276.875-.827.875-.398 0-.684-.102-.86-.306-.175-.204-.263-.532-.263-.983h-1.584c0 .526.116.983.349 1.37.236.386.562.683.977.89a3.03 3.03 0 001.38.312c.746 0 1.335-.191 1.768-.574.433-.383.65-.915.65-1.596 0-.619-.174-1.13-.521-1.53-.344-.401-.897-.74-1.66-1.015-.437-.187-.741-.366-.913-.537a.819.819 0 01-.258-.586c0-.276.077-.494.231-.655.154-.165.369-.247.645-.247.293 0 .517.096.671.29.158.19.236.467.236.832h1.574c0-.469-.102-.888-.306-1.257a2.071 2.071 0 00-.865-.854 2.647 2.647 0 00-1.283-.306c-.72 0-1.315.2-1.784.602-.465.397-.698.926-.698 1.584 0 .545.172 1.017.516 1.418.344.398.907.745 1.692 1.042.43.176.725.346.886.51z' />
            <path d='M8.178 12.865l1.053-2.685h1.81l-1.837 3.878L11.084 18H9.252l-1.074-2.734L7.109 18H5.278l1.88-3.942-1.843-3.878h1.81l1.053 2.685zm5.505 3.825h2.772V18h-4.351v-7.82h1.58v6.51z' />
        </svg>
    );
};

Xls.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Xls.displayName = 'Xls';
export default Xls;
