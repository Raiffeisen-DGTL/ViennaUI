import styled, { css } from 'styled-components';
import { dropList, select } from 'vienna.ui-theme';
import { Checkbox } from '../../Checkbox';
import { Item } from '../../DropList/Item';
import { getPresets } from '../../Utils/styling';
import { ItemWrapper } from '@/DropList/Item/Item.styles';

const checkbox = getPresets(
    select.checkbox,
    'select.checkbox'
)({
    base: null,
    custom: null,
});

const item = getPresets(
    dropList.item,
    'dropList.item'
)({
    hover: null,
});

const value = getPresets(
    select.chip,
    'select.chip'
)({
    textWithCheckbox: null,
});

export interface PropsStyledOption {
    $active?: boolean;
    $selected?: boolean;
}
export const StyledOption = styled(Item)<PropsStyledOption>`
    justify-content: space-between;
    overflow: auto;
    ${({ $active, $selected }) => ($active ? item.hover : $selected ? '' : 'background-color: transparent!important;')}

    ${ItemWrapper} {
        justify-content: flex-start;
    }
`;
export interface PropsStyledCheckbox {
    $showCheckboxOnRight?: boolean;
}

export const StyledCheckbox = styled(Checkbox)<PropsStyledCheckbox>`
    ${checkbox.base}
    align-self: flex-start;

    input {
        display: none;
    }

    ${checkbox.custom}

    ${({ $showCheckboxOnRight }) =>
        $showCheckboxOnRight &&
        css`
            margin-left: 8px;
            margin-right: 0;
        `}
`;

export interface PropsStyledValue {
    $wrapLine?: boolean;
}
export const Value = styled.div<PropsStyledValue>`
    ${value.textWithCheckbox}
    ${({ $wrapLine }) =>
        $wrapLine &&
        css`
            white-space: normal;
        `}
`;
