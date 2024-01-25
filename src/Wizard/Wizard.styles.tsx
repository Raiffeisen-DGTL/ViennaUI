import React from 'react';
import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { BoxStyled } from '../Utils/styled';

const header = getPresets('wizard.header', {
    base: null,
    orientation: '$orientation',
    title: null,
    stepsCount: null,
    stepTitle: null,
});

const stepPoints = getPresets('wizard.stepPoints', {
    base: null,
    orientation: '$orientation',
    horizontalRight: '$size',
});

const stepPoint = getPresets('wizard.stepPoint', {
    base: null,
    type: '$type',
    hover: '$type',
});

const body = getPresets('wizard.body', {
    size: '$size',
});

const footer = getPresets('wizard.footer', {
    size: '$size',
});

const presets = getPresets('wizard', {
    form: null,
    custom: null,
});

export const Box = styled.div``;

export type Size = 's' | 'm' | 'l';
type Orientation = 'vertical' | 'horizontal';

interface PropsHeader {
    $size: Size;
    $orientation: Orientation;
    $padding: number;
}
export const Header = styled.div<PropsHeader>`
    position: relative;
    display: flex;

    ${({ $padding }) =>
        css`
            padding: 0 ${$padding}px 0 ${$padding}px;
        `}

    ${header.base}
    ${header.orientation}
`;

export const StepTitle = styled.div`
    display: inline;
    ${header.stepTitle}
`;

interface PropsStepPoints {
    $size: Size;
    $orientation: Orientation;
}
export const StepPoints = styled.div<PropsStepPoints>`
    position: absolute;
    display: flex;

    ${({ $orientation }) => {
        switch ($orientation) {
            case 'vertical':
                return css`
                    position: static;
                `;
            case 'horizontal':
                return css`
                    right: ${stepPoints.horizontalRight};
                `;
            default:
                return null;
        }
    }}

    ${stepPoints.base}
    ${stepPoints.orientation}
`;

interface PropsStepPoint {
    $type: 'empty' | 'active' | 'elapsed';
    $canClickStep: boolean;
}
export const StepPoint = styled.div<PropsStepPoint>`
    ${stepPoint.base}
    ${stepPoint.type}

    ${({ $canClickStep }) =>
        $canClickStep &&
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

interface PropsBodyStyled {
    $size: Size;
}
const BodyStyled = styled.div<PropsBodyStyled>`
    ${body.size}
`;
interface PropsBody extends BoxStyled<typeof BodyStyled, PropsBodyStyled> {
    size?: PropsBodyStyled['$size'];
}
export const Body: React.FC<PropsBody> = ({ size = 'm', ...attrs }) => <BodyStyled {...(attrs as {})} $size={size} />;

interface PropsFooterStyled {
    $size: Size;
}
const FooterStyled = styled.div<PropsFooterStyled>`
    ${footer.size}
`;
interface PropsFooter extends BoxStyled<typeof FooterStyled, PropsFooterStyled> {
    size?: PropsFooterStyled['$size'];
}
export const Footer: React.FC<PropsFooter> = ({ size = 'm', ...attrs }) => (
    <FooterStyled {...(attrs as {})} $size={size} />
);

export const Step = styled.div``;
