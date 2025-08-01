import styled, { css } from 'styled-components';
import { accordion } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../../Utils/styling';

const item = getPresets(
    accordion.item,
    'accordion.item'
)({
    icon: null,
});

const custom = getPresetsCustom('accordion.item.custom')({
    header: null,
    content: null,
});

const header = getPresets(
    accordion.item.header,
    'accordion.item.header'
)({
    base: null,
    hover: null,
    size: '$size',
});

const content = getPresets(
    accordion.item.content,
    'accordion.item.content'
)({
    base: null,
});
export interface PropsHeader {
    open?: boolean;
    $open?: boolean;
    $disabled?: boolean;
    $width?: number;
}
export const Header = styled.div<PropsHeader>`
    display: flex;
    align-items: center;
    flex-direction: row;
    ${header.base}

    &:hover {
        ${header.hover}
    }

    ${({ $width }) =>
        $width &&
        css`
            max-width: ${$width};
            min-width: ${$width};
        `};

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${header.hover};
        `}
    height: fit-content;

    ${custom.header}
`;

export interface PropsContent {
    $width?: number;
    $hide?: boolean;
    $flexDirection?: 'row' | 'column';
}
export const Content = styled.div<PropsContent>`
    display: flex;

    ${({ $flexDirection }) =>
        $flexDirection === 'column'
            ? css`
                  flex-direction: column;
              `
            : css`
                  flex-direction: row;
              `}

    ${content.base}
    ${({ $width }) =>
        $width &&
        css`
            max-width: ${$width};
            min-width: ${$width};
        `}
    ${({ $hide }) =>
        $hide &&
        css`
            display: none;
        `}
    ${custom.content}
`;

export const IconBox = styled.div`
    display: flex;
    align-self: flex-start;
    margin-top: 2px;
    ${item.icon}
`;

export const TextBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
`;

export const ContentTextWrapper = styled.div``;
