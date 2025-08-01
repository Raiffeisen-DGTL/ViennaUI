import styled, { css } from 'styled-components';
import { alert } from 'vienna.ui-theme';
import { CloseCancelXIcon } from 'vienna.icons';
import { getPresets } from '../Utils/styling';
import { ResponsiveProp } from '../Utils/responsiveness';

const presets = getPresets(
    alert,
    'alert'
)({
    base: null,
    design: '$design',
    dynamic: null,
    title: null,
    icon: null,
    rightContainer: null,
    actionsGap: null,
    titleGap: null,
    custom: null,
    textContainer: null,
    compact: ['$compact', false],
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

export type AlertDesign = 'plain' | 'error' | 'warning' | 'success' | 'accent';
export interface PropsBox {
    $design?: AlertDesign;
    $dynamic?: boolean;
    $compact?: ResponsiveProp<boolean>;
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
        ${presets.compact.responsive(
            (isCompact) => css`
                flex-direction: ${isCompact ? 'column' : 'row'};
            `
        )}
        ${({ $compact }) =>
            $compact &&
            css`
                ${Title} {
                    ${presets.titleGap}
                }
            `}
    }

    ${Title} {
        ${presets.compact}
    }

    ${presets.custom}
`;

export const Actions = styled.div`
    ${presets.actionsGap}
`;

export const CloseIcon = styled(CloseCancelXIcon)`
    cursor: pointer;
`;
