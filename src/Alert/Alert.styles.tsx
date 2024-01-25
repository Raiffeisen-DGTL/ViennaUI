import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { responsiveProp, responsivePreset, ResponsiveProp } from '../Utils/responsiveness';

const presets = getPresets('alert', {
    base: null,
    design: '$design',
    dynamic: null,
    title: null,
    icon: null,
    rightContainer: null,
    titleGap: null,
    actionsGap: null,
    custom: null,
    textContainer: null,
    compact: responsivePreset('$compact', false),
});

export const IconContainer = styled.div`
    ${presets.icon}
`;

export const RightContainer = styled.div`
    ${presets.rightContainer}
`;

export const Title = styled.div`
    ${presets.title}
`;

export const TextContainer = styled.div`
    display: flex;
    ${presets.textContainer}
`;

export const ContentContainer = styled.div`
    width: 100%;
`;

type AlertDesign = 'plain' | 'error' | 'warning' | 'success' | 'accent';
export interface PropsBox {
    $design?: AlertDesign;
    $dynamic?: boolean;
    $compact?: ResponsiveProp<boolean>;
    $compactBelow?: number;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;

    ${presets.base}
    ${presets.design}

    ${({ $dynamic }) =>
        $dynamic &&
        css`
            ${presets.dynamic}
        `}

    ${TextContainer} {
        ${responsiveProp(
            'alert',
            '$compact',
            (isCompact: boolean) => css`
                flex-direction: ${isCompact ? 'column' : 'row'};
            `
        )};
    }

    ${Title} {
        ${presets.compact}
    }

    ${({ $compactBelow }) =>
        $compactBelow &&
        css`
            @media (max-width: ${$compactBelow}px) {
                ${TextContainer} {
                    flex-direction: column;

                    ${Title} {
                        ${presets.titleGap}
                    }
                }
            }
        `}

    ${presets.custom}
`;

export const Actions = styled.div`
    ${presets.actionsGap}
`;
