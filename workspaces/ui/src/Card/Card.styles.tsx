import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('card', {
    base: null,
    header: null,
    footer: null,
    subtitle: null,
    contentTitle: null,
    contentTitleGap: null,

    custom: null,
    customHeader: null,
    customTitle: null,
    customActions: null,
    customContent: null,
    customFooter: null,
});

export const Header = styled.div`
    display: flex;
    ${presets.header}

    ${presets.customHeader}
`;

export const Title = styled.div`
    flex-grow: 1;

    ${presets.customTitle}
`;

export const Actions = styled.div`
    ${presets.customActions}
`;

export const Content = styled.div`
    ${presets.customContent}
`;

export const Footer = styled.div`
    ${presets.footer}

    ${presets.customFooter}
`;

export const Subtitle = styled.div`
    ${presets.subtitle}
`;

export const ContentTitle = styled.div`
    ${presets.contentTitle}

    &:not(:first-child) {
        ${presets.contentTitleGap}
    }
`;

export const Box = styled.div<any>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    ${presets.base}

    ${({ stretch }) =>
        stretch &&
        css`
            height: 100%;

            ${Content} {
                flex-grow: 1;
            }
        `}

    ${presets.custom}
`;
