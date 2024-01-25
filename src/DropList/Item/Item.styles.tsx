import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { responsivePreset, ResponsiveProp, Breakpoints } from '../../Utils/responsiveness';

const item = getPresets('dropList.item', {
    base: null,
    size: responsivePreset('$size', 'm'),
    hover: null,
    selected: null,
    disabled: null,
    custom: null,
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
    align-items: center;
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
