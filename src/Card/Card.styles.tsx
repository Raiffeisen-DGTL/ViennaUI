import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { WithMarginStyled, withMargin } from '../Whitespace/utils';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';

const presets = getPresets('card', {
    base: null,
    size: responsivePreset('$size', 'm'),
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

export interface PropsBox<B = Breakpoints> extends WithMarginStyled {
    $size: ResponsiveProp<'s' | 'm' | 'l', B>;
    $stretch?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    ${presets.base}
    ${presets.size}

    ${({ $stretch }) =>
        $stretch &&
        css`
            height: 100%;

            ${Content} {
                flex-grow: 1;
            }
        `}

    ${withMargin('card')}

    ${presets.custom}
`;
export const ComponentHelperCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2rem;

    font-size: 16px;
    height: 100%;
    box-sizing: border-box;
    background-color: #f8f8f8;
    color: #aaabad;
    height: 200px;
`;
