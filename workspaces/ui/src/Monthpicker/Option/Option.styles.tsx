import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Checkbox, CheckboxProps } from '../../Checkbox';
import { Item, Props } from '../../DropList/Item';

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
export const StyledOption = styled<React.FC<Props>>(Item)`
    justify-content: space-between;
    overflow: auto;
    ${({ hover, selected }) => (hover ? item.hover : selected ? '' : 'background-color: transparent!important;')}
`;

export const StyledCheckbox = styled<React.FC<CheckboxProps>>(Checkbox)`
    ${checkbox.base}
    input {
        display: none;
    }
    ${checkbox.custom}
`;

export const Value = styled.div`
    ${value.textWithCheckbox}
`;
