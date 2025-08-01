import styled, { css } from 'styled-components';
import { collapse } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

export interface PropsCollapseWrapper {
    $size?: 's' | 'm' | 'l' | 'xl';
    $open: boolean;
}

export interface PropsCollapseContent {
    $hide?: boolean;
}

const header = getPresets(
    collapse.wrapper.header,
    'collapse.wrapper.header'
)({
    base: null,
    focus: null,
    hover: null,
    size: '$size',
});

const icon = getPresets(
    collapse.wrapper.icon,
    'collapse.wrapper.icon'
)({
    base: null,
    size: '$size',
});

const content = getPresets(
    collapse.wrapper.content,
    'collapse.wrapper.content'
)({
    size: '$size',
});

export const HeaderIcon = styled.div`
    ${icon.base}
`;

export const Header = styled.div`
    ${header.base}

    &:hover {
        ${header.hover}
    }

    &:focus-visible {
        ${header.focus}
    }
`;

export const Content = styled.div<PropsCollapseContent>`
    ${({ $hide }) =>
        $hide &&
        css`
            display: none;
        `}
`;

export const CollapseWrapper = styled.div<PropsCollapseWrapper>`
    ${Header} {
        ${header.size}
    }

    ${HeaderIcon} {
        ${icon.size}
        ${({ $open }) => css`
            transform: rotate(${$open ? '90deg' : '0deg'});
        `}
    }

    ${Content} {
        ${content.size}
    }
`;
