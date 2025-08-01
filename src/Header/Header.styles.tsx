import styled, { css } from 'styled-components';
import { header } from 'vienna.ui-theme';
import { Groups } from '../Groups';
import { Button } from '../Button';
import { getPresets, getPresetsCustom } from '../Utils/styling';

interface PropsBox {
    $size?: 'l' | 'm' | 's';
    $fixed?: boolean;
    $mobileBelow?: number;
}

interface PropsHeaderBox extends Pick<PropsBox, '$size'> {
    $shadow?: boolean;
    $isMobile?: boolean;
}

interface PropsContainer extends Pick<PropsBox, '$size'> {
    $isMobile?: boolean;
}

const presets = getPresets(
    header,
    'header'
)({
    base: null,
    header: null,
    list: null,
    actionGroups: null,
    shadow: null,
    fixed: null,
    size: '$size',
});

const sideContent = getPresets(
    header.sideContent,
    'header.sideContent'
)({
    base: null,
    size: '$size',
});

const searchContainer = getPresets(
    header.searchContainer,
    'header.searchContainer'
)({
    base: null,
    size: '$size',
});

const action = getPresets(
    header.action,
    'header.action'
)({
    base: null,
    size: '$size',
});

const box = getPresets(
    header.box,
    'header.box'
)({
    size: '$size',
});

const boxMobile = getPresets(
    header.boxMobile,
    'header.boxMobile'
)({
    size: '$size',
});

const content = getPresets(
    header.content,
    'header.content'
)({
    base: null,
    size: '$size',
});

const contentMobile = getPresets(
    header.contentMobile,
    'header.contentMobile'
)({
    base: null,
    size: '$size',
    height: '$size',
});

const fade = getPresets(
    header.fade,
    'header.fade'
)({
    base: null,
    custom: null,
});

const custom = getPresetsCustom('header.custom')({
    box: null,
    boxMobile: null,
    content: null,
    contentMobile: null,
    fade: null,
    sideContent: null,
});

export const Box = styled.div<PropsBox>`
    ${({ $fixed }) =>
        !$fixed &&
        css`
            position: relative;
        `}
    ${({ $mobileBelow }) =>
        $mobileBelow &&
        css`
            @media (max-width: ${$mobileBelow - 1}px) {
                display: none;
            }
        `}
    ${presets.base}
    ${box.size}
    ${({ $fixed }) =>
        $fixed &&
        css`
            ${presets.fixed}
        `}
    ${custom.box}
`;

export const BoxMobile = styled.div<PropsBox>`
    ${({ $fixed }) =>
        !$fixed &&
        css`
            position: relative;
        `}
    ${({ $mobileBelow }) =>
        $mobileBelow &&
        css`
            @media (min-width: ${$mobileBelow}px) {
                display: none;
            }
        `}
    ${presets.base}
    ${boxMobile.size}
    ${({ $fixed }) =>
        $fixed &&
        css`
            ${presets.fixed}
        `}
    ${custom.boxMobile}
`;

export const HeaderBox = styled.header<PropsHeaderBox>`
    position: absolute;
    ${presets.header}
    ${presets.size}
    ${({ $shadow }) =>
        $shadow &&
        css`
            ${presets.shadow}
        `}
    ${({ $isMobile }) =>
        $isMobile &&
        css`
            padding: 16px;
        `}
`;

export const Action = styled.div<PropsContainer>`
    ${action.base}
    ${action.size}
    ${({ $isMobile }) =>
        $isMobile &&
        css`
            padding: 0;
        `}
`;

export const SideContent = styled.div<PropsContainer>`
    ${sideContent.base}
    ${sideContent.size}
    ${({ $isMobile }) =>
        $isMobile &&
        css`
            padding: 0;
        `}
    ${custom.sideContent}
`;

export const SearchContainer = styled.div<PropsContainer>`
    ${searchContainer.base}
    ${searchContainer.size}
`;

export const ActionGroups = styled(Groups)`
    ${presets.actionGroups}
`;

export const Content = styled.div<PropsContainer>`
    ${content.base};
    ${content.size};
    ${custom.content};
`;

export const ContentMobile = styled.div<PropsContainer>`
    ${contentMobile.base};
    ${contentMobile.size};
    ${contentMobile.height};
    ${custom.contentMobile};
`;

export const CloseButton = styled(Button)`
    position: absolute;
    right: 32px;
`;

export const Fade = styled.div`
    ${fade.base}
    ${custom.fade}
`;
