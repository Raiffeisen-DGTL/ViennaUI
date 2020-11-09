import styled, { css } from 'styled-components';
import { FC } from 'react';
import { getPresets } from 'vienna.ui-primitives';
import { Groups, GroupsProps } from '../Groups';
import { Button } from '../Button';

interface BoxProps {
    size: 'l' | 'm' | 's';
    fixed?: boolean;
    openedMobileMenu?: boolean;
    showContent?: boolean;
    mobileBelow?: number;
}

interface HeaderBox {
    shadow?: boolean;
    size: 'l' | 'm' | 's';
    isMobile?: boolean;
}

interface ContainerProps {
    size: 'l' | 'm' | 's';
    isMobile?: boolean;
}

const presets = getPresets('header', {
    base: null,
    header: null,
    list: null,
    actionGroups: null,
    shadow: null,
    fixed: null,
    size: 'size',
});

const sideContent = getPresets('header.sideContent', {
    base: null,
    size: 'size',
});

const searchContainer = getPresets('header.searchContainer', {
    base: null,
    size: 'size',
});

const action = getPresets('header.action', {
    base: null,
    size: 'size',
});

const box = getPresets('header.box', {
    size: 'size',
});

const boxMobile = getPresets('header.boxMobile', {
    size: 'size',
});

const content = getPresets('header.content', {
    base: null,
    size: 'size',
});

const contentMobile = getPresets('header.contentMobile', {
    base: null,
    size: 'size',
    height: 'size',
});

const fade = getPresets('header.fade', {
    base: null,
    custom: null,
});

const custom = getPresets('header.custom', {
    box: null,
    boxMobile: null,
    content: null,
    contentMobile: null,
    fade: null,
});

export const Box = styled.div<BoxProps>`
    ${({ fixed }) => !fixed && 'position: relative;'}
    ${({ mobileBelow }) => css`
        @media (max-width: ${mobileBelow}px) {
            display: none;
        }
    `}
    ${presets.base}
    ${box.size}
    ${({ fixed }) =>
        fixed &&
        css`
            ${presets.fixed}
        `}
    ${custom.box}
`;

export const BoxMobile = styled.div<BoxProps>`
    ${({ fixed }) => !fixed && 'position: relative;'}
    ${({ mobileBelow }) => css`
        @media (min-width: ${mobileBelow}px) {
            display: none;
        }
    `}
    ${presets.base}
    ${boxMobile.size}
    ${({ fixed }) =>
        fixed &&
        css`
            ${presets.fixed}
        `}
    ${custom.boxMobile}
`;

export const HeaderBox = styled.header<HeaderBox>`
    position: absolute;
    ${presets.header}
    ${presets.size}
    ${({ shadow }) =>
        shadow &&
        css`
            ${presets.shadow}
        `}
    ${({ isMobile }: any) => isMobile && 'padding: 16px'}
`;

export const Action = styled.div<ContainerProps>`
    ${action.base}
    ${action.size}
    ${({ isMobile }: any) => isMobile && 'padding: 0'}
`;

export const SideContent = styled.div<ContainerProps>`
    ${sideContent.base}
    ${sideContent.size}
    ${({ isMobile }: any) => isMobile && 'padding: 0'}
`;

export const SearchContainer = styled.div<ContainerProps>`
    ${searchContainer.base}
    ${searchContainer.size}
`;

export const ActionGroups: FC<GroupsProps> = styled(Groups)`
    ${presets.actionGroups}
`;

export const Content = styled.div<ContainerProps>`
    ${content.base};
    ${content.size};
    ${custom.content};
`;

export const ContentMobile = styled.div<ContainerProps>`
    ${contentMobile.base};
    ${contentMobile.size};
    ${contentMobile.height};
    ${custom.contentMobile};
`;

export const CloseButton: FC<any> = styled(Button)`
    position: absolute;
    right: 32px;
`;

export const Fade = styled.div`
    ${fade.base}
    ${custom.fade}
`;
