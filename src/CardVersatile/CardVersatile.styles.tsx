import styled, { css } from 'styled-components';
import { cardVersatile } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    cardVersatile,
    'cardVersatile'
)({
    base: null,
    design: ['$design', 'shadow'],
    selected: ['$design', 'shadow'],
    boxTop: null,
    boxTopContent: null,
    boxTopLeft: null,
    boxTopRight: null,
    boxHeading: null,
    boxHeadingInfo: null,
    boxHint: null,
    boxInfo: null,
    boxBottom: null,
    title: null,
    subtitle: null,
    info: null,
    extraInfo: null,
    custom: null,
    customBoxTop: null,
    customBoxTopContent: null,
    customBoxTopLeft: null,
    customBoxTopRight: null,
    customBoxHeading: null,
    customBoxHeadingInfo: null,
    customBoxHint: null,
    customBoxInfo: null,
    customBoxBottom: null,
    customTitle: null,
    customSubtitle: null,
    customInfo: null,
    customExtraInfo: null,
    customHoverBorder: null,
    hoverBorder: null,
});

const presetBaseRadius = getPresets(
    cardVersatile.base,
    'cardVersatile.base'
)({
    'border-radius': null,
});

export interface BoxProps {
    $design?: 'gray' | 'shadow' | 'stroke' | 'white';
    $hasInteractive?: boolean;
    $selected?: boolean;
}

export const Title = styled.div`
    ${presets.title}
    ${presets.customTitle}
`;

export const Box = styled.div<BoxProps>`
    ${presets.base}
    ${presets.design}

    ${({ $hasInteractive, $design, $selected }) =>
        $hasInteractive &&
        css`
            cursor: pointer;

            ${() =>
                !$selected &&
                css`
                    &:hover {
                        ${() =>
                            $design === 'gray'
                                ? css`
                                      background-color: ${color.primary.seattle.c05};
                                  `
                                : $design === 'stroke'
                                  ? css`
                                        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
                                    `
                                  : $design === 'white'
                                    ? css`
                                          background-color: ${color.primary.seattle.c01};
                                      `
                                    : css``}

                        &::before {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            pointer-events: none;
                            ${presets.hoverBorder}
                            ${presets.customHoverBorder}
                            ${presetBaseRadius}
                        }

                        ${Title} {
                            color: ${color.primary.oslo.c120};
                        }
                    }
                `}

            &:active {
                ${presets.selected}
            }
        `}

    ${({ $selected }) =>
        $selected &&
        css`
            ${presets.selected}
        `}

    > hr {
        margin: 0;
    }

    ${presets.custom}
`;

export const BoxTop = styled.div`
    ${presets.boxTop}
    ${presets.customBoxTop}
`;

export const BoxTopContent = styled.div`
    ${presets.boxTopContent}
    ${presets.customBoxTopContent}
`;

export const BoxTopLeft = styled.div`
    ${presets.boxTopLeft}
    ${presets.customBoxTopLeft}
`;

export const BoxTopRight = styled.div`
    ${presets.boxTopRight}
    ${presets.customBoxTopRight}
`;

export const BoxHeading = styled.div`
    ${presets.boxHeading}
    ${presets.customBoxHeading}
`;

export const BoxHeadingInfo = styled.div`
    ${presets.boxHeadingInfo}
    ${presets.customBoxHeadingInfo}
`;

export const BoxHint = styled.div`
    ${presets.boxHint}
    ${presets.customBoxHint}
`;

export const BoxInfo = styled.div`
    ${presets.boxInfo}
    ${presets.customBoxInfo}
`;

export const BoxBottom = styled.div`
    ${presets.boxBottom}
    ${presets.customBoxBottom}
`;

export const Subtitle = styled.div`
    ${presets.subtitle}
    ${presets.customSubtitle}
`;

export const Info = styled.div`
    ${presets.info}
    ${presets.customInfo}
`;

export const ExtraInfo = styled.div`
    ${presets.extraInfo}
    ${presets.customExtraInfo}
`;
