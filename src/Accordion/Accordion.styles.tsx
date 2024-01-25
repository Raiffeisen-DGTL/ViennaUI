import styled, { css } from 'styled-components';
import { Header, Content, IconBox } from './Item/Item.styles';
import { getPresets } from '../Utils/styling';

const presets = getPresets('accordion', {
    list: null,
    box: null,
});

const custom = getPresets('accordion.custom', {
    box: null,
    list: null,
});

const item = getPresets('accordion.item', {
    iconLeft: null,
    iconRight: null,
});

const header = getPresets('accordion.item.header', {
    size: '$size',
});

const content = getPresets('accordion.item.content', {
    size: '$size',
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
        ${IconBox} {
            ${({ $iconPosition }) =>
                $iconPosition === 'right' &&
                css`
                    ${item.iconLeft}
                `}
            ${({ $iconPosition }) =>
                $iconPosition === 'left' &&
                css`
                    ${item.iconRight}
                `}
            ${({ $iconPosition }) =>
                $iconPosition === 'none' &&
                css`
                    display: none;
                `}
        }
    }
    ${ItemWrapper}:last-child > ${Content} {
        border-bottom: none;
    }
    ${custom.list}
`;
