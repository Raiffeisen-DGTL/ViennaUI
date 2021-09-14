import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const header = getPresets('wizard.header', {
    base: null,
    orientation: 'orientation',
    title: null,
    stepsCount: null,
});

const stepPoints = getPresets('wizard.stepPoints', {
    base: null,
    orientation: 'orientation',
    horizontalRight: 'size',
});

const stepPoint = getPresets('wizard.stepPoint', {
    base: null,
    type: 'type',
    hover: 'type',
});

const body = getPresets('wizard.body', {
    size: 'size',
});

const footer = getPresets('wizard.footer', {
    size: 'size',
});

const presets = getPresets('wizard', {
    form: null,
    custom: null,
});

export const Box = styled.div``;

export const Header = styled.div<{ size: 's' | 'm' | 'l'; orientation: 'vertical' | 'horizontal' }>`
    position: relative;
    display: flex;

    ${header.base}
    ${header.orientation}
`;

export const StepPoints = styled.div<{ orientation: 'vertical' | 'horizontal'; size: 's' | 'm' | 'l' }>`
    position: absolute;
    display: flex;

    ${(props) =>
        props.orientation === 'vertical' &&
        css`
            position: static;
        `}

    ${(props) =>
        props.orientation === 'horizontal' &&
        css`
            right: ${stepPoints.horizontalRight};
        `}
    ${stepPoints.base}
    ${stepPoints.orientation}
`;

export const StepPoint = styled.div<{ type: 'empty' | 'active' | 'elapsed'; canClickStep: boolean }>`
    ${stepPoint.base}
    ${stepPoint.type}

    ${(props) =>
        props.canClickStep &&
        css`
            &:hover {
                ${stepPoint.hover}
            }
        `}

    &:last-child {
        margin-right: 0;
    }
`;

export const Title = styled.div`
    color: white;
    ${header.title}
`;

export const Form = styled.div`
    ${presets.form}
    ${presets.custom}
`;

export const StepsCount = styled.span`
    ${header.stepsCount}
`;

export const Body = styled.div<{ size: 's' | 'm' | 'l' }>`
    ${body.size}
`;

export const Footer = styled.div<{ size: 's' | 'm' | 'l' }>`
    ${footer.size}
`;

export const Step = styled.div``;
