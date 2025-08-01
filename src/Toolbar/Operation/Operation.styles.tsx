import styled from 'styled-components';
import { toolbar } from 'vienna.ui-theme';
import { Item } from '../../DropList/Item';
import { getPresets } from '../../Utils/styling';

const tab = getPresets(
    toolbar.tab,
    'toolbar.tab'
)({
    base: null,
    inList: null,
    button: null,
    custom: null,
});

const button = getPresets(
    toolbar.button,
    'toolbar.button'
)({
    design: '$design',
    hover: '$design',
    disabled: '$design',
});

interface PropsOpBox {
    $design?: 'light' | 'dark';
    $disabled?: boolean;
}
export const OpBox = styled.div<PropsOpBox>`
    ${tab.base}
    position: relative;
    min-width: auto;

    &:first-child {
        padding-left: 0px;
    }

    ${({ $disabled }) =>
        $disabled &&
        `
             > button {
             ${button.disabled}
        `}
    > button {
        ${button.design}
        &:hover {
            ${button.hover}
        }
    }
    > [role='listbox'] {
        width: min-content;
    }

    ${tab.custom}
`;

export const StyledItem = styled(Item)`
    padding: 0;
    ${OpBox} {
        ${tab.inList}
        width: 100%;
        > button {
            ${tab.button}
        }
    }
`;
