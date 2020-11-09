import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { AlertProps } from './Alert';

const presets = getPresets('alert', {
    base: null,
    design: 'design',
    dynamic: null,
    title: null,
    icon: null,
    titleGap: null,
    actionsGap: null,
    custom: null,
    textContainer: null,
});

export const IconContainer = styled.div`
    ${presets.icon}
`;

export const Title = styled.div`
    ${presets.title}
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${presets.textContainer}
`;

export const Box = styled.div<AlertProps>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;

    ${presets.base}
    ${presets.design}

    ${({ dynamic }) =>
        dynamic &&
        css`
            ${presets.dynamic}
        `}

    ${({ compactBelow }) =>
        compactBelow &&
        css`
            @media (max-width: ${compactBelow}px) {
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
