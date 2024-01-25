import styled from 'styled-components';
import { Item } from '../../DropList/Item';
import { getPresets } from '../../Utils/styling';

const tab = getPresets('toolbar.tab', {
    base: null,
    inList: null,
    button: null,
    custom: null,
});

const button = getPresets('toolbar.button', {
    design: '$design',
    hover: '$design',
});

interface PropsOpBox {
    $design?: 'light' | 'dark';
}
export const OpBox = styled.div<PropsOpBox>`
    ${tab.base}
    position: relative;
    min-width: auto;
    &:first-child {
        padding-left: 0px;
    }
    > button {
        ${button.design}
        &:hover {
            ${button.hover}
        }
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
