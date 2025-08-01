import styled from 'styled-components';
import { Sizes, SizeOption, ColumnSize, ColumnOffset, ColumnOrder, BasedSize, OffsetOption, OrderOption } from './Col';
import { getPresetsCustom } from '../../Utils/styling';

const column = getPresetsCustom('grid.column')({
    custom: null,
});

const viewports: Sizes<string> = {
    /* smartphones in vertical orientation */
    xs: '(min-width: 1px)',
    /* smartphones in horizontal, tablets in vertical orientations */
    s: '(min-width: 768px)',
    /* tablets in horizontal  orientation */
    m: '(min-width: 1024px)',
    /*  laptops */
    l: '(min-width: 1440px)',
    /* desktops */
    xl: '(min-width: 2560px)',
};

function buildSizeBlock(size: SizeOption) {
    return `
        max-width: ${(size !== 'auto' && `${(100 / 12) * size}%`) || '100%'};
        flex-basis: ${(size !== 'auto' && `${(100 / 12) * size}%`) || '100%'};
        flex-grow: ${size === 'auto' ? '1' : '0'};
    `;
}

export interface PropsBox {
    $size: ColumnSize;
    /** Отступ слева */
    $offset?: ColumnOffset;
    /** Порядок отрисовки колонки */
    $order?: ColumnOrder;
}

function columnSize(props: PropsBox): string {
    const { $size } = props;
    let style = '';

    // responsive size
    if (typeof $size === 'object') {
        const { base, ...other } = $size;

        style += `
            ${buildSizeBlock(base || 'auto')}
        `;

        for (const s in other) {
            const sizeKey = s as keyof BasedSize<SizeOption>;
            const mappedSize = $size[sizeKey];

            if (mappedSize === undefined) continue;

            style += `
                @media only screen and ${viewports[s as keyof Sizes<string>]} {
                    ${buildSizeBlock(mappedSize)}
                }
            `;
        }

        // non-responsive size
    } else {
        style = buildSizeBlock($size);
    }

    return style;
}

function columnOffset(props: PropsBox): string {
    const { $offset } = props;
    let style = '';

    // reponsive offset
    if (typeof $offset === 'object') {
        for (const s in $offset) {
            const mappedOffset = $offset[s as keyof Sizes<OffsetOption>];

            style += `
                @media only screen and ${viewports[s as keyof Sizes<string>]} {
                    margin-left: ${mappedOffset && `${(100 / 12) * mappedOffset}%`}
                }
            `;
        }

        // non-responsive offset
    } else {
        style = `margin-left: ${$offset && `${(100 / 12) * $offset}%`};`;
    }

    return style;
}

function columnOrder(props: PropsBox): string {
    const { $order } = props;
    let style = '';

    // reponsive offset
    if (typeof $order === 'object') {
        for (const s in $order) {
            const mappedOrder = $order[s as keyof Sizes<OrderOption>];

            if (mappedOrder) {
                style += `
                    @media only screen and ${viewports[s as keyof Sizes<string>]} {
                        order: ${mappedOrder};
                    }
                `;
            }
        }

        // non-responsive offset
    } else if ($order) {
        style = `order: ${$order};`;
    }

    return style;
}

export const Box = styled.div<PropsBox>`
    width: 100%;
    box-sizing: border-box;

    ${columnSize}
    ${columnOffset}
    ${columnOrder}

    ${column.custom}
`;
