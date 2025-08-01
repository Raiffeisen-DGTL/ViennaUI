import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { inputSlider } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

type Design = 'outline' | 'material';
type Size<B = Breakpoints> = ResponsiveProp<'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | B>;

const tags = getPresets(
    inputSlider.tags,
    'inputSlider.tags'
)({
    base: null,
});

const line = getPresets(
    inputSlider.line,
    'inputSlider.line'
)({
    base: null,
    size: '$size',
    front: null,
    back: null,
    focus: null,
    design: '$design',
    disabled: null,
    animation: null,
});

const container = getPresets(
    inputSlider.container,
    'inputSlider.container'
)({
    base: null,
    noInput: null,
});

const tag = getPresets(
    inputSlider.tag,
    'inputSlider.tag'
)({
    base: null,
    firstChild: '$design',
    lastChild: '$design',
});

const custom = getPresetsCustom('inputSlider.custom')({
    container: null,
    tags: null,
    tag: null,
    line: null,
    lineFront: null,
    lineBack: null,
    circle: null,
    box: null,
    partLeft: null,
    partRight: null,
});

const circle = getPresets(
    inputSlider.circle,
    'inputSlider.circle'
)({
    base: null,
    disabled: null,
    hover: null,
});

const box = getPresets(
    inputSlider.box,
    'inputSlider.box'
)({
    base: null,
    disabled: null,
});

const part = getPresets(
    inputSlider.part,
    'inputSlider.part'
)({
    base: null,
});

export const PartLeft = styled.div`
    display: flex;
    &:after {
        content: '';
        ${part.base}
    }
    ${custom.partLeft}
`;

export const PartRight = styled.div`
    display: flex;
    &:before {
        content: '';
        ${part.base}
    }
    ${custom.partRight}
`;

interface PropsBox {
    $disabled?: boolean;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ${box.base}
    ${({ $disabled }) =>
        $disabled &&
        css`
            ${box.disabled}
            * {
                ${box.disabled}
            }
        `}
    ${custom.box}
`;

interface PropsContainer {
    $noInput?: boolean;
}
export const Container = styled.div<PropsContainer>`
    position: relative;
    ${container.base}
    ${({ $noInput }) => $noInput && container.noInput}
    ${custom.container}
`;

export const Tags = styled.div`
    position: relative;
    width: 100%;
    ${tags.base}
    ${custom.tags}
`;

interface PropsTagStyled {
    $val?: number;
    $design?: Design;
}
const TagStyled = styled.div<PropsTagStyled>`
    position: absolute;
    user-select: none;
    ${tag.base}
    ${({ $val }) => css`
        left: ${$val}px;
    `}

    &:last-child {
        ${tag.lastChild}
    }

    &:first-child {
        ${tag.firstChild}
    }

    ${custom.tag}
`;

interface PropsTag extends BoxStyled<typeof TagStyled, PropsTagStyled> {
    val?: PropsTagStyled['$val'];
    design?: PropsTagStyled['$design'];
}
export const Tag: FC<PropsTag> = ({ children, design, val, ...attrs }) => (
    <TagStyled {...attrs} $design={design} $val={val}>
        {children}
    </TagStyled>
);

export const Line = styled.div`
    position: absolute;
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: 0px;
    ${custom.line}
`;

interface PropsLineFront {
    $disabled?: boolean;
    $design?: Design;
    $drag?: boolean;
    $noInput?: boolean;
    $size?: Size;
}
export const LineFront = styled.div<PropsLineFront>`
    position: relative;
    display: inline-block;
    ${line.base}
    ${({ $noInput }) => $noInput && line.size}
    ${line.front}
    ${line.design}
    ${({ $drag }) => !$drag && line.animation}
    ${({ $disabled }) => $disabled && line.disabled}
    ${custom.lineFront}
`;

interface PropsLineBack {
    $disabled?: boolean;
    $design?: Design;
    $drag?: boolean;
    $noInput?: boolean;
    $size?: Size;
}
export const LineBack = styled.div<PropsLineBack>`
    position: relative;
    display: inline-block;
    flex-grow: 1;
    ${line.base}
    ${({ $noInput }) => $noInput && line.size}
    ${line.back}
    ${line.design}
    ${({ $drag }) => !$drag && line.animation}
    ${({ $noInput }) =>
        !$noInput &&
        css`
            border-color: transparent;
        `}
    ${({ $noInput, $drag }) => $noInput && $drag && line.focus}
    ${({ $disabled }) => $disabled && line.disabled}
    ${custom.lineBack}
`;

interface PropsCircle {
    $disabled?: boolean;
    $drag?: boolean;
    $size?: Size;
}
export const Circle = styled.div<PropsCircle>`
    position: relative;
    display: inline-block;
    user-select: none;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        ${circle.base}
        ${({ $drag }) => ($drag ? circle.hover : line.animation)}
        ${({ $disabled }) => $disabled && circle.disabled}
        ${custom.circle}
    }
    ${({ $disabled }) =>
        !$disabled &&
        css`
            &:hover:after,
            &:focus:after {
                ${circle.hover}
                ${custom.circle}
            }
        `}
`;
