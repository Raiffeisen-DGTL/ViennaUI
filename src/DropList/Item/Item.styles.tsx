import styled, { css } from 'styled-components';
import { dropList } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { ResponsiveProp, Breakpoints } from '../../Utils/responsiveness';

const item = getPresets(
    dropList.item,
    'dropList.item'
)({
    base: null,
    size: ['$size', 'm'],
    hover: null,
    selected: null,
    disabled: null,
    custom: null,
});

const description = getPresets(
    dropList.description,
    'dropList.description'
)({
    base: null,
    size: ['$size', 'm'],
    custom: null,
});

const itemWrapper = getPresets(
    dropList.itemWrapper,
    'dropList.itemWrapper'
)({
    base: null,
});

export interface PropsBox<B = Breakpoints> {
    $size?: ResponsiveProp<'s' | 'm' | 'l', B>;
    $disabled?: boolean;
    $selected?: boolean;
    $hover?: boolean;
    $wrapLine?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    flex: 0 0 auto;
    box-sizing: border-box;
    position: relative;

    ${item.base}
    ${item.size}

    &:hover {
        ${item.hover}
    }

    ${({ $hover }) => $hover && item.hover}
    ${({ $selected }) => $selected && item.selected}
    ${({ $disabled }) => $disabled && item.disabled}
    ${({ $wrapLine }) =>
        $wrapLine &&
        css`
            white-space: normal;
        `}

    ${item.custom}
`;

export const Icon = styled.div`
    display: flex;
`;

export const ItemWrapper = styled.div`
    ${itemWrapper.base}
`;

export interface PropsDescription<B = Breakpoints> {
    $size?: ResponsiveProp<'s' | 'm' | 'l', B>;
}

export const DescriptionWrapper = styled.div<PropsDescription>`
    ${description.base};
    ${description.size};
    ${description.custom};
`;
