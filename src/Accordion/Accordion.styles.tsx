import styled, { css } from 'styled-components';
import { accordion } from 'vienna.ui-theme';
import { Header, Content, IconBox, TextBox, ContentTextWrapper } from './Item/Item.styles';
import { getPresets, getPresetsCustom } from '../Utils/styling';

const presets = getPresets(
    accordion,
    'accordion'
)({
    list: null,
    box: null,
});

const custom = getPresetsCustom('accordion.custom')({
    box: null,
    list: null,
});

const header = getPresets(
    accordion.item.header,
    'accordion.item.header'
)({
    size: '$size',
});

const gap = getPresets(
    accordion.item.header.gap,
    'accordion.item.header.gap'
)({
    size: '$size',
});

const content = getPresets(
    accordion.item.content,
    'accordion.item.content'
)({
    size: '$size',
    textWrapper: '$size',
});

export const ItemWrapper = styled.div`
    position: relative;
    ${presets.box};
    ${custom.box};
`;

export interface PropsAccordionList {
    $size?: 's' | 'm' | 'l';
    $iconSize?: 's' | 'm' | 'l';
    $iconPosition?: 'left' | 'right' | 'none';
}
export const AccordionList = styled.div<PropsAccordionList>`
    overflow: auto;
    ${presets.list}
    ${ItemWrapper} {
        ${Header} {
            ${header.size}
            ${({ $iconPosition }) =>
                $iconPosition === 'left' &&
                css`
                    flex-direction: row-reverse;
                `};
        }
        ${Content} {
            ${content.size}
        }
        ${ContentTextWrapper} {
            ${content.textWrapper}
        }
        ${IconBox} {
            ${({ $iconPosition }) =>
                $iconPosition === 'none' &&
                css`
                    display: none;
                `}
        }
        ${TextBox} {
            ${gap.size}
        }
    }
    ${ItemWrapper}:last-child > ${Content} {
        border-bottom: none;
    }
    ${custom.list}
`;
