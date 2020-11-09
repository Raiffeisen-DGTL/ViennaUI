import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Item, Props } from '../../DropList/Item';

const tab = getPresets('toolbar.tab', {
    base: null,
    inList: null,
    button: null,
    custom: null,
});

const button = getPresets('toolbar.button', {
    design: 'design',
    hover: 'design',
});

export const OpBox = styled.div<{ design?: 'light' | 'dark' }>`
    ${tab.base}
    position: relative;
    min-width: auto;
    &:first-child {
        padding-left: 0px;
    }
    > button {
        ${button.design}
        &: hover {
            ${button.hover}
        }
    }
    ${tab.custom}
`;

export const StyledItem = styled<React.FC<Props>>(Item)`
    padding: 0;
    ${OpBox} {
        ${tab.inList}
        width: 100%;
        > button {
            ${tab.button}
        }
    }
`;
