import styled from 'styled-components';
import { Checkbox } from '../../Checkbox';
import { Item } from '../../DropList/Item';
import { getPresets } from '../../Utils/styling';

const checkbox = getPresets('select.checkbox', {
    base: null,
    custom: null,
});

const item = getPresets('dropList.item', {
    hover: null,
});

const value = getPresets('select.chip', {
    textWithCheckbox: null,
});

interface PropsStyledOption {
    $hover?: boolean;
    $selected?: boolean;
}
export const StyledOption = styled(Item)<PropsStyledOption>`
    justify-content: space-between;
    overflow: auto;
    ${({ $hover, $selected }) => ($hover ? item.hover : $selected ? '' : 'background-color: transparent!important;')}
`;

export const StyledCheckbox = styled(Checkbox)`
    ${checkbox.base}
    input {
        display: none;
    }
    ${checkbox.custom}
`;

export const Value = styled.div`
    ${value.textWithCheckbox}
`;
